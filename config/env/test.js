'use strict';

/**
 * Expose
 */

module.exports = {
  db: 'mongodb://localhost/noobjs_test',
  twitter: {
    clientID: process.env.TWITTER_CLIENTID,
    clientSecret: process.env.TWITTER_SECRET,
    callbackURL: 'http://localhost:3000/auth/twitter/callback'
  }
};
