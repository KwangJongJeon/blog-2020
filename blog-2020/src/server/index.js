const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./db');
const blogRouter = require('./routes/blog-router');
const { request } = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

const path = require('path');
// Related with Auto0 
// setting session
// tutorial Link: https://manage.auth0.com/dashboard/us/dev-4p73htuo/applications/MGQ2tsnFzoUgLnudNJKAVm5UQu5uj7be/quickstart/nodejs
let session = require('express-session');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
var userInViews = require('./lib/middleware/userInViews');
var authRouter = require('./routes/auth');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var sess = {
  secret: 'asd9aASgjkHU87',
  cookie: {},
  resave: false,
  saveUninitialized: true
};

if(app.get('env') === 'production') {
  sess.cookie.secure = true;
}

app.use(session(sess));


/*
  TODO: log date: 2020-08-11
        Some bug is occured from index.js:39:13 
        must be fixed
*/
// Configure Passport with the application Setting

// Load environment variables from .env
var dotenv = require('dotenv');
dotenv.config();

// Load Passport
var passport = require('passport');
var Auth0Strategy = require('passport-auth0');

// Configure Passport to use Auto0
var strategy = new Auth0Strategy( {
    domain: process.env.AUTH0_DOMAIN,
    clientID: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    callbackURL:
      process.env.AUTH0_CALLBACK_URL || 'http://localhost:3000/callback'
  },
  function (accessToken, refreshToken, extraParams, profile, done) {
    // accessToken is the token to call Auth0 API (not needed in the most cases)
    // extraParams.id_token has the JSON Web Token
    // profile has all the information from the user
    return done(null, profile);
  }

);

passport.use(strategy);

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
})

app.use(userInViews());
app.use('/', authRouter);
app.use('/', indexRouter);
app.use('/', usersRouter);

app.use(cors());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-origin', '*');
    next();
})

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/', (req, res) => {
    res.send('Hello World');
  });

app.use('/api', blogRouter);

app.listen(PORT, () => console.log(`Server running on Port ${PORT}`));