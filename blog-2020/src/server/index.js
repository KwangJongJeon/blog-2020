const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./db');
const blogRouter = require('./routes/blog-router');
const { request } = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// TODO:
// 2020-07-29 
// need to fix CORS policy error. maybe, I can solve to use a proxy server? 
// --> /jokes/random proxy server but it's not work 
// refer to https://medium.com/@dtkatz/3-ways-to-fix-the-cors-error-and-how-access-control-allow-origin-works-d97d55946d9

app.use(bodyParser.urlencoded({ extended:true }));
app.use(cors());
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-origin', '*');
    next();
})

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/jokes/random', (req, res) => {
    request(
      { url: 'https://joke-api-strict-cors.appspot.com/jokes/random' },
      (error, response, body) => {
        if (error || response.statusCode !== 200) {
          return res.status(500).json({ type: 'error', message: 'error!!!' });
        }
  
        res.json(JSON.parse(body));
      }
    )
  });

app.use('/api', blogRouter);

app.listen(PORT, () => console.log(`Server running on Port ${PORT}`));