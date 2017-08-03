// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
       return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    db.collection('Todos').insertOne({
        text: 'Something to do',
        completed: false
    }, (err, result) => {
        if(err){
            return  console.log('Unable to insert todo', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    db.collection('MoDo').insertOne({
        text: 'My MoDo text',
        verified: true
    }, (err, result) => {
        if(err){
            return console.log('Unable to isert MoDo Msg', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    db.collection('Users').insertOne({
        name: 'Stani',
        age: 25,
        location: 'Sofia'
    }, (err, result) => {
        if(err){
            return console.log('Unable to insert user: Stani', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    db.close();
});