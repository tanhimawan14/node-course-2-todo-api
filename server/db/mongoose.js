const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://himawan:asdf1234@ds031167.mlab.com:31167/todoapp' || 'mongodb://localhost:27017/TodoApp');

module.exports = {
  mongoose
};

// var newTodo = new Todo({
//   text: 'Cook dinner'
// });

// newTodo.save().then((doc) => {
//   console.log(`Saved todo ${doc}`);
// }, (err) => {
//   console.log('Unable to save todos');
// });

// var newTodo = new Todo({
//   text: 'Edit this video'
// });
//
// newTodo.save().then((doc) => {
//   console.log(`Saved todo ${doc}`);
// }, (err) => {
//   console.log('Unable to save todos');
// });

// var newUser = new User({
//   email: 'himawan.tan.b@gmail.com'
// });
//
// newUser.save().then((res) => {
//   console.log(JSON.stringify(res, undefined, 2));
// }, (err) => {
//   console.log('Unable to create new user');
// });
