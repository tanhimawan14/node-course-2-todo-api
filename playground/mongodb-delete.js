const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

  if(err){
    return console.log('Unable to connect to mongodb server.');
  }
  console.log('Connected to mongodb server.');

  // deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //   console.log(result);
    // });

  // deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //   console.log(result);
    // });

  // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //   console.log(result);
    // });

  // TEST User
      // db.collection('Users').deleteMany({name: 'Himawan'}).then((result) => {
      //   console.log(result);
      // });

      var id = new ObjectID('58d95d479eb53f1f87e23034')

      db.collection('Users').findOneAndDelete({_id: id}).then((result) => {
        console.log(result);
      });

  // db.close();
});
