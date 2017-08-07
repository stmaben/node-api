var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
     console.log(req.body);
     var todo = new Todo({
        text: req.body.text
     });

     todo.save().then((doc) => {
        res.status(200).send(doc);
     } , (e) => {
        console.log("Some error arose while tring to save the Todo", e);
        res.status(400).send(e);
    });
});


app.listen(3000, () => {
    console.log('Started on port 3000');
});

// var newTodo = new Todo({text: 'op3'});

// newTodo.save().then((doc) => {
//     console.log('Saved todo', doc)
// }, (e) => {
//     console.log('Unable to save todo',e);
// });


// var newUser = new User({
//     name: 'Stani',
//     email: 'sando@gmail.com'
// });

// newUser.save().then((doc) => {
//         console.log(`user: ${newUser.name} has been created in MongoDB!`, doc)
//     }, (e) => {
//         console.log(`Creation of user: ${newUser.name} was not successful!`, e);
//     });