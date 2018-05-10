const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove - remove all documents that match
// Todo.remove({}) - remove all


// Todo.remove({}).then((result) =>{
//     console.log(result);
// });

Todo.findOneAndRemove({_id: "5af3e2940ed492889227a14a"}).then((todo)=>{
    
}); // returns the document that was removed


// Todo.findByIdAndRemove('5af3e2940ed492889227a14a').then((todo) =>{
//     console.log(todo);
// }); 