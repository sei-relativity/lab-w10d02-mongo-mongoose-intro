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
const FrienlyVampires =[
  {
  name: 'Lamees',
  title: 'Queen',
  hair_color: 'Red',
  eye_color: 'Hazel',
  dob:  new Date(1995, 9, 25 , 3, 10),
  loves: ['Cats', 'Pizza'],
  location: 'Heaven Riyadh',
  gender: 'f',
  victims: 10000000000000
  },{
  name: 'Hisham',
  title: 'Peasant',
  hair_color: 'poop brown',
  eye_color: 'puke green',
  dob:  new Date(1990, 0, 0 , 12, 30),
  loves: ['Puppies', 'Dead animals'],
  location: 'Garbage Isles',
  gender: 'f',
  victims: 76400  
  },{
  name: 'Muhannad',
  title: 'Satan',
  hair_color: 'Green fart',
  eye_color: 'devlish pink',
  dob:  new Date(1998, 2, 11 , 8, 40),
  loves: ['Puppies', 'Dead animals'],
  location: 'Hell itself',
  gender: 'm',
  victims: 9000000  
  },{
  name: 'Aisha',
  title: 'Poopykakas',
  hair_color: 'Ginger',
  eye_color: 'Rainbow',
  dob:  new Date(1997, 7, 17 , 7, 07),
  loves: ['turd', 'kaka'],
  location: 'Poopyland',
  gender: 'm',
  victims: 03
  }
];
//adding new vampires
// Vampire.insertMany(FrienlyVampires, (err, vampires) => {
//   if (err){ console.log(err)}
//     console.log("added provided vampire data", vampires)
//     mongoose.connection.close();
//   });


//count
// Vampire.countDocuments({},(err,vampire)=>{
//   console.log(vampire);
//   db.close()
// })
  

//deleting everything on the database
// Vampire.deleteMany({ }, function (err) {});


//finding all females
  // Vampire.find({gender: 'f'}, (err,vampire)=>{
  //     console.log(vampire)
  //     db.close();
  // });

//Vampires with 500 victims
//   Vampire.find({victims: {$gt: 500}},  (err, victim) => {
//     console.log(victim)
//     db.close();
// })


//Vampires with less than or = 500 victims
//   Vampire.find({victims: {$lte: 150}},  (err, victim) => {
//     console.log(victim)
//     db.close();
// })


//Vampires with lvictims that are not equal to 210234
//   Vampire.find({victims: {$ne: 210234}},  (err, victim) => {
//     console.log(victim)
//     db.close();
// })

//Vampires with lvictims greater than 150 AND fewer than 500 victims
//   Vampire.find({ $and: [{victims:{$gt: 150}},{victims:{$lt: 500}}]},  (err, victim) => {
//     console.log(victim)
//     db.close();
// })

//Vampires with the key of "title"
//   Vampire.find({title: {$exists: true}},  (err, victim) => {
//     console.log(victim)
//     db.close();
// })

//Vampires without the key of Victims 
//   Vampire.find({victims:  {$not:{$exists: true}} },  (err, victim) => {
//     console.log(victim)
//     db.close();
// })


//Vampires without the key of Victims and have title
  Vampire.find({victims:   $and [{$not:{$exists: true}}] },  (err, victim) => {
    console.log(victim)
    db.close();
})

