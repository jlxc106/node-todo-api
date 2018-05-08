// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{   //mongodb module v3 (err, client)
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    //deleteMany
    // db.collection('Todos').deleteMany({text: "Eat Lunch"}).then((result)=>{
    //     console.log(result);
    // });

    //deleteOne -- deletes the first record and stops
    // db.collection('Todos').deleteOne({text: "Eat Lunch"}).then(result =>{
    //     console.log(result);
    // })

    //findOneAndDelete -- returns the deleted document -- useful
    // db.collection("Todos").findOneAndDelete({completed: false}).then(result=>{
    //     console.log(result);
    // })


    // db.collection("Users").deleteMany({name: "Jay"}).then((result)=>{
    //     console.log(result);
    // })


    db.collection("Users").findOneAndDelete({_id: 123}).then(result=>{
        console.log(result);
    })

    //

    // db.close();     //v3: client.close();
});