/**********************************************************************
Set up and Configuration
**********************************************************************/
// Dependencies
const mongoose = require('mongoose');
const seedData = require('./models/seed_vampires.js');
const Vampire = require('./models/vampire.js');
// Configuration
const mongoURI = 'mongodb://localhost:27017/'+ 'vampires';
const db = mongoose.connection;
// Connect to Mongo
mongoose.connect( mongoURI );
// var vampire = [
//   {
//     name: 'Pirlo',
//     title: 'Count',
//     hair_color: 'black',
//     eye_color: 'brown',
//     dob: new Date(1973, 3, 12, 5, 42),
//     loves: [ 'cereal' ],
//     location: 'Minneapolis, Minnesota, US',
//     gender: 'm',
//     victims: 7
//   },
//   {
//     name: 'Cho',
//     title: 'Count',
//     hair_color: 'brown',
//     eye_color: 'brown',
//     dob: new Date(1971, 2, 13, 7, 47),
//     loves: ['cereal','marshmallows'],
//     location: 'Minneapolis, Minnesota, US',
//     gender: 'm',
//     victims: 5
//   },
//   {
//     name: 'Cula',
//     title: 'Count',
//     hair_color: 'brown',
//     eye_color: 'brown',
//     dob: new Date(1971, 2, 13, 7, 47),
//     loves: ['cereal','marshmallows'],
//     location: 'Minneapolis, Minnesota, US',
//     gender: 'f',
//     victims: 9
//   },
//   {
//     name: 'Sam',
//     title: 'Count',
//     hair_color: 'brown',
//     eye_color: 'brown',
//     dob: new Date(1971, 2, 13, 7, 47),
//     loves: ['cereal','marshmallows'],
//     location: 'Minneapolis, Minnesota, US',
//     gender: 'f',
//     victims: 22
//   }
//   ];
// var vampire = {
//   name: 'Chocula',
//   title: 'Count',
//   hair_color: 'brown',
//   eye_color: 'brown',
//   dob: new Date(1971, 2, 13, 7, 47),
//   loves: ['cereal','marshmallows'],
//   location: 'Minneapolis, Minnesota, US',
//   gender: 'm',
//   victims: 2
// }
// Vampire.create(vampire,(err,vampire) => {
//   if (err)
//   {console.log(err)}
//   else{console.log(vampire)}
//   db.close();
// } )
// Vampire.insertMany(seedData, (err, vampires) => {
//   if (err){ console.log(err)}
//     console.log("added provided vampire data", vampires)
//     mongoose.connection.close();
//   });
// Select by comparison
Vampire.find({gender:"f"},(err,vampire) =>{
  console.log(vampire);
  db.close();
})
Vampire.find({victims:{$gt:500}},(err,vampire) =>{
  // console.log(vampire);
  db.close();
})
Vampire.find({victims:{$lte:150}},(err,vampire) =>{
  // console.log(vampire);
  db.close();
})
Vampire.find({victims:{ $ne: 210234}},(err,vampire) =>{
  // console.log(vampire);
  db.close();
})
Vampire.find({victims:{ $gt:150 , $lt:500}},(err,vampire) =>{
  // console.log(vampire);
  db.close();
})
// Select with OR
Vampire.find({$or: [ {location: 'New York, New York, US '},{location: 'New Orleans, Louisiana, US'}] },(err,vampire) => {
  // console.log(vampire);
  db.close();
})
Vampire.find({$or: [ {loves: 'brooding'},{loves: 'being tragic'}] },(err,vampire) => {
  // console.log(vampire);
  db.close();
})
Vampire.find({$or: [ {loves: 'marshmallows'},{victims:{$gt:1000}} ] },(err,vampire) => {
  // console.log(vampire);
  db.close();
})
Vampire.find({$or: [ {hair_color: 'red'},{eye_color: 'green'}] },(err,vampire) => {
  // console.log(vampire);
  db.close();
})
// Select by exists or does not exist
Vampire.find({title:{$exists: true}},(err,vampire) => {
  // console.log(vampire);
  db.close();
})
Vampire.find({victims:{$exists: false}},(err,vampire) => {
  // console.log(vampire);
  db.close();
})
Vampire.find({victims:{$exists:true},victims:{$gt:1000}},(err,vampire) => {
  // console.log(vampire);
  db.close();
})
// Connection Error/Success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', mongoURI));
db.on('disconnected', () => console.log('mongo disconnected'));
db.on( 'open' , ()=>{
  console.log('Connection made!');
});