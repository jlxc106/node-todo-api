const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


var _id = "5af2481b1311861e0a100b4e";
// var _id = "5af298cb184dc1c15bfba3ac11";

// if(!ObjectID.isValid(_id)){
//     console.log('ID not valid');
// }

// Todo.find({
//     _id
// }).then((todos) =>{
//     if(!todos.length){
//         return console.log('Id not found')
//     }
//     console.log('Todos', todos)
// }).catch((e) => console.log(e));

// Todo.findOne({
//     _id
// }).then((todo) =>{
//     if(!todo){
//         return console.log('Id not found')
//     }
//     console.log('Todo', todo)
// }).catch((e) => console.log(e));

// Todo.findById(_id).then((todo) =>{
//     if(!todo){
//         return console.log('Id not found')
//     }
//     console.log('Todo by id', todo)
// }).catch((e) => console.log(e));


//User.findById
User.findById(_id).then(user =>{
    if(!user){
        return console.log('Id not found')
    }
    console.log('User by id', user);
}).catch(e => console.log('error found: ',e));