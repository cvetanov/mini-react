var express = require('express');
var path = require('path');
var rollup = require('rollup').rollup;
var babel = require('rollup-plugin-babel');

// generate bundle from main script and save it in 'static/bundle.js'
rollup({
  entry: 'src/main.js',
  plugins: [
    babel({
      exclude: 'node_modules/**'
    })
  ]
}).then(bundle => {
  bundle.write({
    format: 'es',
    dest: 'static/bundle.js'
  });
});

const PORT = 8080;

const app = express();

// serve static files
app.use('/static', express.static('static'));

app.get('/home', (request, response) => {
  response.sendFile(path.join(`${__dirname}/index.html`));
});

const server = app.listen(PORT, () => {
  console.log(`Express server started at port ${server.address().port}`);
});
