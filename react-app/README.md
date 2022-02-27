# React App

This is an example of what a React app looks like once it's been transpiled and bundled.

To illustrate different ways of transpiling and bundling code, there are two builds - one with Parcel and one with the TypeScript compiler.

## The `tsc` build
This is the output from the TypeScript compiler, in `build-tsc`. It includes transpiling JSX and compiling Typescript. This build would never be used in a production React app, but it's useful for understanding what's going on as it's essentially the same process.

It has replaced JSX with calls to `React.createElement()` (per the `jsx: "react"` compiler option), and removed type definitions, but that's about it.

This really is all JSX is under the hood - just a fancy way of calling a function. 

It also explains why custom elements need to start with a capital: 

- `App` becomes `React.createElement(App)` and it's assumed `App` will be a user-defined variable
- `app` becomes `React.createElement("app")` and it's assumed `"app"` will have a library definition and be a known DOM element

## The Parcel build
This is in `build-parcel` and includes transpiling JSX, compiling Typescript, and bundling. 

This is more typical of a real-life production build. As such, the built JavaScript file contains the whole of the React and ReactDOM libraries inline, so you'll need to scroll right down to the bottom to see the app code. 

Modules are referred to from variables like `$17b288f07ec57b56$exports`, which is the exports of some particular file in the bundle, defined as a variable because the bundle is all one file.

Note also that Parcel has added a unique hash to the `index.js` filename. This allows you to cache heavy JS files forever, saving users' bandwidth. On redeploy, the link in the (small, but not cached) `index.html` file will be to an `index.js` with a different content hash.
