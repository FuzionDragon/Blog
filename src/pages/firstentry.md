# First blog entry

As of writing it is 26/06/25.

Currently aside from this website, I am working on multiple different things at once during my summer break. They are each programming based but for different things.

### My portfolio website
**[Repo](https://github.com/FuzionDragon/Tinkerers-Workshop-2) | [Link](https://davidl2.netlify.app)**

If you have seen it already, you might be able to tell that I have copied the styling from that website onto this one.

Personally, not an excuse for laziness on thinking of new styling, I like it as its simple and similar enough to how I customized my desktop (customizations of which I have made a repository for and requiring screenshots still).

Its simple and does the job as a portfolio website, possibly adding new additions in terms of animations and icons to improve aesthetics and UX in the future.

### Coordinator (my game dialogue system)
**Private Repo**

This is a simplish dialogue system plugin, which is developed in Rust for the Bevy game framework.

A side from the usual dialogue display and continuation mechanics you would expect, it allows for the player to input a word or short phase into the system and transition onto another dialogue tree if that 'subject' has a corresponding dialogue branch.

The are some minor features such as loading the dialogue from a Json file with a specific schema and a journal of found subjects and keywords (perhaps relating to a character) implemented as of writing.

The only things needed are mostly to do with aesthetics such as typewriter like rendering of dialogue as well as improving how the journal menu looks.

I believe it is almost ready to be used in a game however I have yet to figure out details of the first game it will be used in (yes, I plan to use this dialogue system for future games). Will it be a simple visual novel style game that will focus on the dialogue system and pushing it to its limits or something else?

As for why it's not open sourced? I don't have a good reason other than it being too specialised by way of having it be integrated with many moving parts as opposed to being a simple dialogue system. Perhaps I will if I get to modularising the project, separating the different components to ensure it is more modular.

### Operating System using Rust
**[Tutorial I am following](https://os.phil-opp.com/)**

I was looking at projects that I could do over summer alongside my game project after I finished my portfolio website and found this cool project.
