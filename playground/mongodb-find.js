// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{   //mongodb module v3 (err, client)
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    //v3: const db = client.db('TodoApp');
    // db.collection('Todos').find({
    //     _id: new ObjectID("5af105c9a481ca0dcc5c3d49")
    // })
    // .toArray()
    // .then((docs)=>{
    //     console.log("Todos");
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err)=>{
    //     console.log('Unable to fetch todos', err)
    // });


    //COUNT
    // db.collection('Users').find({name: "Jay Lim"})
    // .count().then((count)=>{
    //     console.log(`Todos count: ${count}`);
    // }, (err) =>{
    //     console.log(`Unable to fetch todos`, err);
    // })


    //SELECT
    db.collection('Users').find({name: "Jay"}).toArray().then((docs)=>{
        console.log(JSON.stringify(docs,undefined,2));
    });


    // .then((docs)=>{
    //     console.log("Todos");
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err)=>{
    //     console.log('Unable to fetch todos', err)
    // });


    // db.close();     //v3: client.close();
});