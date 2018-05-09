var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();


app.use(bodyParser.json()); //server now recieves json

app.post('/todos', (req, res)=>{
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc)=>{
        res.send(doc);
        console.log(doc);
    }, (err)=>{
        res.status(400).send(err);
    })
})

//GET /todos/123124dsaf


app.listen(3000, ()=>{
    console.log('Started on port 3000');
});

module.exports = {app};