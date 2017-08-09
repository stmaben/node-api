const {ObjectID} =  require('mongodb');

const {mangoose} = require('./../server/db/mongoose');
var {Todo} = require('./../server/models/todo');
var {User} = require('./../server/models/user')

var id_user = '59887f782963f1a6d812654a'
User.findById(id_user)
    .then((user) => {
        if(!user){
            return console.log(`No user with an id:${id} does exist!`);
        }
        console.log(JSON.stringify(user, undefined, 2));

    } ,(e) => {
        console.log(e);
});

// var id = '5989ac9b1ad587f2745afbe3';
// if(!ObjectID.isValid(id)){
//     console.log(`Id:[${id}] not valid.`);
// }


// Todo.find({
//     _id: id
// }).then((todos) => {
//    console.log('Todos', todos);
// }); 
 
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById({
//     _id: id
// }).then((todo) => {
//     if(!todo){
//         console.log(`Id:[${id}] not found.`);
//     }
//     console.log('Todos by Id', todo);
// }).catch((e) => console.log(e));