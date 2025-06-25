import { marked } from 'marked';

const files = import.meta.glob('./pages/*.md', { eager: true, query: '?raw', import: 'default' });
const pagelist = document.getElementById('pagelist');
const page = document.getElementById('page');

document.addEventListener('DOMContentLoaded', () => {
  Object.entries(files).map(async ([path, content]) => {
    const filename = path.split('/').pop(); 
    const pagename = filename.replace('.md', '');

    const link = document.createElement('a');
    link.href = '#';
    link.textContent = pagename;
    link.addEventListener('click', (e) => {
      e.preventDefault();
      page.innerHTML = marked.parse(content);
      history.pushState(null, '', `#${pagename}`);
      console.log(pagename);
      console.log(filename);
    });
  
    pagelist.appendChild(link);
  })

  window.addEventListener('popstate', () => {
    if (!window.location.hash) {
      page.innerHTML = '';
      return;
    }
    const pagename = window.location.hash.slice(1);
    const matchingpath = Object.keys(files)
      .find(path => path.endsWith(`/${pagename}.md`));
    
    if (matchingpath) {
      page.innerHTML = marked.parse(files[matchingpath]);
    }
  });
});

if (import.meta.hot) {
  import.meta.hot.accept(() => {
    console.log('Markdown files updated - reloading content');
  });
}
