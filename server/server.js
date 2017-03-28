const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

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


var User = mongoose.model('User', {
  email: {
    type: String,
    trim: true,
    required: true,
    minLength: 1
  }
});

var newUser = new User({
  email: 'himawan.tan.b@gmail.com'
});

newUser.save().then((res) => {
  console.log(JSON.stringify(res, undefined, 2));
}, (err) => {
  console.log('Unable to create new user');
});
