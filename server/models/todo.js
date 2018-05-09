var mongoose = require('mongoose');

var Todo = mongoose.model("Todo", {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true, //removes leading and trailing whitespace

    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt:{
        type: Number,
        default: null
    }
});


// var otherTodo = new Todo({
    //     text: '       Edit this video        '
    // })
    
    // otherTodo.save().then((doc)=>{
    //     console.log(doc)
    // }, (e)=>{
    //     console.log('Unable to save otherTodo', e)
    // });
    
    
    // var newTodo = new Todo({
    //     text: 'Cook dinner'
    // });
    
    // newTodo.save().then((doc)=>{
    //     console.log('Saved todo', doc);
    // },(e)=>{
    //     console.log('Unable to save todo');
    // });
    
    module.exports = {Todo};