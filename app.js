const { auth } = require('express-openid-connect');
const express = require('express');
require('dotenv').config();

const app = express();

const config = {
  authRequired: false,
  auth0Logout: true,
  baseURL: process.env.BASE_URL,
  clientID: process.env.AUTH0_CLIENT_ID,
  issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
  secret: process.env.SESSION_SECRET
};


// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
    res.redirect('http://localhost:3000/test');
//   res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out')
});

app.get

const listener = app.listen(process.env.PORT || 1812, () => {
    console.log('Your app is listening on port ' + listener.address().port)
});