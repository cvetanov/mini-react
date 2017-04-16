import express from 'express';
import path from 'path';

const PORT = 8080;

const app = express();

app.use('/js', express.static('src'));
app.get('/home', (request, response) => {
  response.sendFile(path.join(`${__dirname}/index.html`));
});

const server = app.listen(PORT, () => {
  console.log(`Express server started at port ${server.address().port}`);
});
