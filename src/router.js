import { marked } from 'marked';

document.addEventListener('DOMContentLoaded', async () => {
  const linksContainer = document.getElementById('pagelist');
  const pageContainer = document.getElementById('page');
  
  const DEFAULT_PAGE = '/pages/home.md';
  
  const markdownFiles = import.meta.glob('./pages/*.md', {
    eager: true,
    query: '?raw',
    import: 'default'
  });
  
  const files = Object.entries(markdownFiles).map(([path, content]) => {
    return {
      path,
      name: path.split('/').pop().replace('.md', ''),
      content
    };
  });

  files.forEach(file => {
    const link = document.createElement('a');
    link.href = `#${file.name}`;
    link.textContent = file.name;
    link.addEventListener('click', (e) => {
      e.preventDefault();
      loadPage(file.content);
      history.pushState(null, '', `#${file.name}`);
    });
    linksContainer.appendChild(link);
    linksContainer.appendChild(document.createElement('br'));
  });

  const loadInitialPage = () => {
    if (window.location.hash) {
      const pageName = window.location.hash.slice(1);
      const file = files.find(f => f.name === pageName);
      if (file) return loadPage(file.content);
    }
    
    const defaultFile = files.find(f => f.path.includes(DEFAULT_PAGE));
    if (defaultFile) {
      loadPage(defaultFile.content);
      history.replaceState(null, '', '/'); 
    } else if (files.length > 0) {
      loadPage(files[0].content);
    }
  };

  function loadPage(content) {
    pageContainer.innerHTML = marked.parse(content);
  }

  window.addEventListener('popstate', () => {
    if (!window.location.hash && DEFAULT_PAGE) {
      const defaultFile = files.find(f => f.path.includes(DEFAULT_PAGE));
      if (defaultFile) loadPage(defaultFile.content);
    }
  });

  loadInitialPage();
});
