const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '58da6bcbb4b089870dc2dd2c11';

// if(!ObjectID.isValid(id)){
//   console.log('Id not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById({
//   _id: id
// }).then((todo) => {
//   if(!todo) {
//     return console.log('ID not found');
//   }
//   console.log('Todo By Id', todo);
// }).catch((err) => console.log(err));


var id = '58da5a1753a6e3f207004c3c';

User.findById({
  _id: id
}).then((user) => {
  if (!user) {
    return console.log('User not found');
  }
    console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
  console.log(e);
});
