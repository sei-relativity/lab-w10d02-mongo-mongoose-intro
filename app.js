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

// Connection Error/Success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', mongoURI));
db.on('disconnected', () => console.log('mongo disconnected'));

db.on( 'open' , ()=>{
  console.log('Connection made!');
});

/**********************************************************************
Write Your Code Below
**********************************************************************/
// Vampire.insertMany(seedData, (err, vampires) => {
//   if (err){ console.log(err)}
//     console.log("added provided vampire data", vampires)
//     mongoose.connection.close();
//   });

// const myFirstVampire = {
//   name: 'Lamees',
//   title: 'Douches',
//   hair_color: 'Hotpink',
//   eye_color: 'brown',
//   dob: new Date(1071, 2, 13, 7, 47),
//   loves: ['anime','idk'],
//   location: 'GA, Riyadh, SA',
//   gender: 'f',
//   victims: 100091
// }
// const mySecondVampire = {
//   name: 'Aisha',
//   title: 'Countese',
//   hair_color: 'Ginger',
//   eye_color: 'brown',
//   dob: new Date(1241, 2, 13, 7, 47),
//   loves: ['Potato','idk'],
//   location: 'GA, Riyadh, SA',
//   gender: 'f',
//   victims: 10368
// }
// const myThirdVampire = {
//   name: 'Muhannad',
//   title: 'Lord',
//   hair_color: 'black',
//   eye_color: 'black',
//   dob: new Date(0000, 2, 13, 7, 47),
//   loves: ['Blood','Darkness', 'More Blood'],
//   location: 'Unknown',
//   gender: 'm',
//   victims: 998782
// }
// const myFourthVampire = {
//   name: 'Raji',
//   title: 'Count',
//   hair_color: 'N/A',
//   eye_color: 'brown',
//   dob: new Date(1001, 2, 13, 7, 47),
//   loves: ['Coffee','idk'],
//   location: 'GA, Riyadh, SA',
//   gender: 'm',
//   victims: 1091
// }
// Vampire.create(myFirstVampire, (err, vamp)=>{
//   console.log(vamp)
// })
// Vampire.create(mySecondVampire, (err, vamp)=>{
//   console.log(vamp)
// })
// Vampire.create(myThirdVampire, (err, vamp)=>{
//   console.log(vamp)
// })
// Vampire.create(myFourthVampire, (err, vamp)=>{
//   console.log(vamp)
// })
// Vampire.find({gender: 'f'}, (err, vamp)=>{
//     console.log(vamp);
//     db.close();
// })
// Vampire.find({victims: {$gte: 500}}, (err, vamp)=>{
//     console.log(vamp);
//     db.close();
// })
// Vampire.find({victims: {$lte: 150}}, (err, vamp)=>{
//     console.log(vamp);
//     db.close();
// })
// Vampire.find({victims: {$ne: 210234}}, (err, vamp)=>{
//     console.log(vamp);
//     db.close();
// })
// Vampire.find({victims: {$lt: 500, $gt: 150}}, (err, vamp)=>{
//     console.log(vamp);
//     db.close();
// })
// Vampire.find({title: {$exists: true}}, (err, vamp)=>{
//     console.log(vamp);
//     db.close();
// })
// Vampire.find({victims: {$exists: false}}, (err, vamp)=>{
//   console.log(vamp);
//   db.close();
// })
// Vampire.find({ $and: [ { title: { $exists: true } }, { victims: { $exists: false} } ] }, (err, vamp)=>{
//   console.log(vamp);
//   db.close();
// })
// Vampire.find({ $and: [ { victims: { $exists: true } }, { victims: { $gt: 1000} } ] }, (err, vamp)=>{
//   console.log(vamp);
//   db.close();
// })
// Vampire.find({ $or: [ { location: { $eq: 'New York, New York, US' } }, { location: { $eq: 'New Orleans, Louisiana, US'} } ] }, (err, vamp)=>{
//   console.log(vamp);
//   db.close();
// })
// Vampire.find({ $or: [ { loves: { $eq: 'brooding' } }, { loves: { $eq: 'being tragic'} } ] }, (err, vamp)=>{
//   console.log(vamp);
//   db.close();
// })

// Vampire.find({ $or: [ { loves: { $eq: 'marshmallows' } }, { victims: { $gt:1000} } ] }, (err, vamp)=>{
//   console.log(vamp);
//   db.close();
// })

// Vampire.find({ $or: [ { eye_color: { $eq: 'green' } }, { hair_color: { $eq:'red'} } ] }, (err, vamp)=>{
//   console.log(vamp);
//   db.close();
// })

// Vampire.find({ $or: [ { loves: { $eq: 'frilly shirtsleeves' } }, { loves: { $eq: 'frilly collar'} } ] }, (err, vamp)=>{
//   console.log(vamp);
//   db.close();
// })

// Vampire.find({ $or: [ { loves: { $eq: 'brooding' } } ] }, (err, vamp)=>{
//   console.log(vamp);
//   db.close();
// })

// Vampire.find({ $or: [ { loves: { $eq: 'appearing innocent' } }, { loves: { $eq: 'trickery'} }, { loves: { $eq: 'lurking in rotten mansion'} }, { loves: { $eq: 'R&B music'} } ] }, (err, vamp)=>{
//   console.log(vamp);
//   db.close();
// })

// Vampire.find({ $and: [ { loves: { $eq: 'fancy cloaks' } }, { loves: { $ne: 'top hats'} }, { loves: { $ne: 'virgin blood'} } ] }, (err, vamp)=>{
//   console.log(vamp);
//   db.close();
// })

// Vampire.find({ $and: [ { loves: { $eq: 'ribbons' } }, { eye_color: { $ne: 'brown'} } ] }, (err, vamp)=>{
//   console.log(vamp);
//   db.close();
// })

// Vampire.find({ location: {$ne: "Rome, Italy"}}, (err, vamp)=>{
//   console.log(vamp);
//   db.close();
// })

//This is not working idk why
// Vampire.find({ location: { $not: { $regex: "Rome" } } }, (err, vamp)=>{
//   console.log(vamp);
//   db.close();
// })

// Vampire.find({ $and: [ { loves: { $ne: 'appearing innocent' } }, { loves: { $ne: 'fancy cloaks'} }, { loves: { $ne: 'being tragic'} }, { loves: { $ne: 'frilly shirtsleeves'} }, { loves: { $ne: 'brooding'} } ] }, (err, vamp)=>{
//   console.log(vamp);
//   db.close();
// })

// Vampire.find({ victims: { $not: { $gt: 200 } } }, (err, vamp)=>{
//   console.log(vamp);
//   db.close();
// })
// Vampire.findOneAndUpdate({name: '' })