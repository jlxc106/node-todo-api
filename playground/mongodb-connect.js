// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{   //mongodb module v3 (err, client)
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    //v3: const db = client.db('TodoApp');



    //INSERT
    // db.collection("Todos").insertOne({
    //     text: 'Something to do',
    //     completed: false
    // },(err, result)=>{
    //     if(err){
    //         return console.log('Unable to insert todo', err)
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // })

    //Insert new doc into Users collection(name, age, location)

    // db.collection("Users").insertOne({
    //     name: "Jay Lim",
    //     age: 25,
    //     location: "California"
    // },(err, result)=>{
    //     if(err){
    //         return console.log('Unable to insert user', err);
    //     }


    //     console.log(result.ops[0]._id.getTimestamp());
    //     // console.log(JSON.stringify(result.ops, undefined, 2))
    // })


    db.close();     //v3: client.close();
});