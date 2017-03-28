// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var user = {name: 'Himawan', age: 20};
// var {name} = user;
// console.log(name);

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to mongodb server.');
  }
  console.log('Connected to mongodb server.');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if(err){
  //     return console.log('Unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops));
  // });

  // db.collection('Users').insertOne({
  //     name: 'Himawan',
  //     age: 20,
  //     location: 'Jakarta'
  // }, (err, result) => {
  //   if(err){
  //     return console.log('Unable to insert user data');
  //   }
  //   console.log(result.ops[0]._id.getTimestamp());
  // });



  db.close();
});
