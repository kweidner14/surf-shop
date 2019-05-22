const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

// PassportLocalMongoose automatically salts username and password into Schema
// so we don't need to do it manually here.
const UserSchema = new Schema({
    email: String,
    image: String
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);




// USER:
//     - email - string
//     -password - string
//     -username - string
//     -image - string
//     -posts - array of objects ref Post