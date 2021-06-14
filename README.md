### Structure

I've used express for a local web server `./index.js` that serves the test page `./index.html` and added the Rivr analytics adapter as requested into the script on the test page.

The `/src` folder contains two js-files:

- `rivraddon.js` for declaring the analytics addon
- `index.js` imports the addon and exposes it to the other scripts via the browser's `window` object

### Build

Use `npm run build` to get a bundled js-file. The output will be `/build/rivraddon.js`.

### Run

After build, use `npm start` or serve `index.html` from a web server of your choice to run the app.

### Testing

I'm using jest for two simple tests to check if the functions `enableAnalytics` and `trackPbjsEvent` are available on `window`.
Use `npm test` to run the tests. The file containing the tests is `/src/index.test.js`.
