import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev.js';


const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

// adding /users route
app.get('/users', function(req, res) {
  // Hard coding for simplicity. Pretend this hits a real database
  res.json([
    {"id": 1,"firstName":"callie","lastName":"skrtic","email":"c@c.com"},
    {"id": 2,"firstName":"milo","lastName":"skrtic","email":"m@c.com"},
    {"id": 3,"firstName":"nicholas","lastName":"skrtic","email":"n@c.com"},
    {"id": 4,"firstName":"alex","lastName":"skrtic","email":"a@c.com"}
  ]);
});

app.listen(port, function (err) {
  if (err) {
    console.log(err); // eslint-disable-line no-console
  }
  else {
    open('http://localhost:' + port);
  }
})
