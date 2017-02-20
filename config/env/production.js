'use strict';

/**
 * Expose
 */

module.exports = {
  db: process.env.MONGOHQ_URL,
  twitter: {
    clientID: process.env.TWITTER_CLIENTID,
    clientSecret: process.env.TWITTER_SECRET,
    callbackURL: 'http://nodejs-express-demo.herokuapp.com/auth/twitter/callback'
  }
};
