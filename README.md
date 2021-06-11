### Structure

I've used express for a local web server `./index.js` that serves the test page `./index.html` and added the Rivr analytics adapter as requested into the script on the test page.

The `/src` folder contains two JS-files:

- `rivraddon.js` for defining the analytics addon
- `index.js` to expose the functions to the other scripts via the browser's `window` object

### Build

Use `npm run build` to get a bundled js-file.

### Testing

I'm using jest to run two simple test to check if the two functions are available on `window`.
