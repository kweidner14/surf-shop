const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

// PassportLocalMongoose automatically salts username and password into Schema
// so we don't need to do it manually here.
const UserSchema = new Schema({
    email: String,
    image: String,
    posts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Post'
        }
    ]
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);




// USER:
//     - email - string
//     -password - string
//     -username - string
//     -image - string
//     -posts - array of objects ref Post