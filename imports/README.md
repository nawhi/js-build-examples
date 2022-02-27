# Import and export

This is an example of how Parcel inlines source code across multiple files.

It has changed the `greet` function into the snappily named `$cd43b3484c5c8a45$export$aaea0094c1c69714` at the top of the bundle.

Note that the imported JSON file has been converted to a string wrapped with `JSON.parse`. It is checked at build time though - see what happens if you introduce a syntax error to the json file.
