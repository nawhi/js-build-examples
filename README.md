# JavaScript build examples

This repository is a work-in-progress explanation of how JavaScript build systems work.

Build tools are only hard when there's loads going on, and you have to get _all_ of it before you can make any changes.

So the examples here are constructed to each deal with a separate concept. They aim to be simple enough that it's possible to see what the build is actually doing, but still close to what you'd actually need to work with in production.

It may help to explain the following:
- what's JSX and why do I need to import React for it to work?
- how do build tools convert imports & exports / library calls into a single file?
- why does the script filename have a random UUID on it?
- and more...
