const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove()

Todo.remove({}).then((result) => {
  console.log(result);
});

Todo.findOneAndRemove({_id: '58da909d3b7eb51959eb3ada'}).then((todo) => {
  console.log(todo);
});


Todo.findByIdAndRemove('58da909d3b7eb51959eb3adb').then((todo) => {
  console.log(todo);
});
