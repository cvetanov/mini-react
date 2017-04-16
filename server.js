import express from 'express';
import path from 'path';
import { rollup } from 'rollup';

// generate bundle from main script and save it in 'static/bundle.js'
rollup({
  entry: 'src/main.js'
}).then(bundle => {
  bundle.write({
    format: 'cjs',
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
