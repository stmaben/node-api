// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
       return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
   
    // findOneAndUpdate
    //db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('59832200f208e62dde05cbc2')
    // },
    // {
    //     $set: {
    //         completed: true
    //     }
    // },{
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    //  });

     // findOneAndUpdate_2
     db.collection('Users').findOneAndUpdate({
         name: 'Stani',
         age: 25
     },
    {
        $set: {
            name: "Bobby"
        },
        $inc: {
            age: 1
        }
    },
    {
        returnOriginal: true
    }).then((result) => {
        console.log(result);
    })

   // db.close();
});