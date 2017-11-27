//this is not needed in production - it is just used to host
// the minified version locally to see if there are any
// produciton issues after going through the build
import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

const port = 3000;
const app = express();

//enable gzip compression
app.use(compression());
//serve static files in the dist directory
app.use(express.static('dist'));

app.get  ('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
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
