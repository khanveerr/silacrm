var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');
var User = require('../app/schema/users');

passport.use(new LocalStrategy({ 
  usernameField: 'email'
}, function(username,password,done){
  User.findOne({email: username}, function(err,user){
    if(err) { return done(err); };
    
    // return if user not found in database
    if(!user) {
      return done(null,false, { message: 'User not found' })
    }

    // return if password is wrong
    if(!user.validPassword(password)) {
      return done(null, false, { message: 'Password is wrong' });
    }

    return done(null, user);

  });
}));