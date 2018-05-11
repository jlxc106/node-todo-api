const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const bcrypt = require('bcryptjs');

var UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: `{VALUE} is not a valid email`
        }
    },
    password : {
        type: String,
        require: true,
        minlength: 8
    },
    tokens: [{
        access: {
            type: String,
            required: true
        },
        token:{
            type: String,
            required: true
        }
    }]
});

UserSchema.methods.generateAuthToken = function(){
    var user = this;
    var access = 'auth';
    var token = jwt.sign({_id: user._id.toHexString(), access}, 'abc123').toString();

    user.tokens = user.tokens.concat([{access, token}]);
    return user.save().then(()=>{
        return token;
    })
}

UserSchema.methods.toJSON = function(){     //instance methods get called with instances as this
    var user = this;
    var userObject = user.toObject();
    return _.pick(userObject, ["_id", "email"])
};

UserSchema.statics.findByToken = function(token){   //model methods get called with model as this binded
    var User = this;
    var decoded;

    try{
        decoded = jwt.verify(token, 'abc123');
    }catch(e){
        return Promise.reject();
    }

    return User.findOne({
        '_id': decoded._id,
        'tokens.token' : token,
        'tokens.access': 'auth'
    })
}

//is called before save
UserSchema.pre('save', function(next){
    var user = this;
    if(user.isModified('password')){
        bcrypt.genSalt(10, (err, salt)=>{
            bcrypt.hash(user.password, salt, (err, hash)=>{
                user.password = hash;
                next();
            })
        })
    } else {
        next();
    }
})

var User = mongoose.model("User", UserSchema);

// var newUser = new User({
//     email: "    abc@fsdf    "
// })

// newUser.save().then((doc)=>{
//     console.log(doc)
// }, (e)=>{
//     console.log('Unable to save newUser', e)
// });   

module.exports = {User};