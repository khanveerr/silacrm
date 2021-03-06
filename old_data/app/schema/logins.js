
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var crypto = require('crypto');
var jwt = require('jsonwebtoken');


// set up a mongoose model
var UserSchema = new Schema({
  email: {
        type: String,
        unique: true,
        required: true
    },
  name: {
    type: String,
    required: true
  },

  role: {
    type: String,
    required: true
  },
  
  city: {
    type: Number,
    required: true
  },

  hash: String,
  salt: String

});

UserSchema.methods.setPassword = function(password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
};

UserSchema.methods.validPassword = function(password) {
    var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
    return this.hash === hash;
};

UserSchema.methods.generateJwt = function() {
    var expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);

    return jwt.sign({
        _id: this._id,
        email: this.email,
        name: this.name,
        role: this.role,
        city: this.city,
        exp: parseInt(expiry.getTime() / 1000)
    },"silacrmmeanapp");

};


module.exports = mongoose.model('User', UserSchema);
