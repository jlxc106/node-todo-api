var mongoose = require('mongoose');

var User = mongoose.model("User", {
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }
});

// var newUser = new User({
//     email: "    abc@fsdf    "
// })

// newUser.save().then((doc)=>{
//     console.log(doc)
// }, (e)=>{
//     console.log('Unable to save newUser', e)
// });   

module.exports = {User};