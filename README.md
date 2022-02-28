# JavaScript build examples

This repository is an accompaniment to an [article](https://nickwhite.cc/blog/introduction-to-js-build-tools) with an under-the-hood look at how JavaScript build systems work.

Build tools are only hard when there's loads going on, and you have to understand _all_ of it before you can make any changes.

So the examples here are constructed to separate the concepts a little bit. They aim to be simple enough that it's possible to see what the build is actually doing, but still close to what you'd actually need to work with in production.

It may help to explain the following:
- what's JSX and why do I need to import React for it to work?
- how do build tools convert imports & exports / library calls into a single file?
- why does the script filename have a random UUID on it?
- and more...

## Getting started
Navigate to each subdirectory in the monorepo, check out the README, and have a poke around.

Remember to run `yarn install` in the monorepo root if you are going to run any scripts.
