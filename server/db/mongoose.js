var mongoose = require('mongoose');

mongoose.Promise = global.Promise;  //enables promises for mongoose
mongoose.connect(process.env.MONGODB_URI);


module.exports = {
    mongoose
};

