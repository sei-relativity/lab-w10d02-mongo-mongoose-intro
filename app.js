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


const vampOne = {
  name: 'Vamp',
  hair_color: 'Black',
  eye_color:'Green',
  dob: new Date(1951, 2, 13, 7, 47),
  loves: ['Knives', 'Jack'],
  location: 'New York, new york',
  gender: 'm',
  victims: 200
}

const vampTwo = {
  name: 'vampritte',
  eye_color:'Green',
  dob: new Date(1990, 2, 13, 7, 47),
  loves: ['chocolate'],
  location: 'Transelvania, USA',
  gender: 'f',
  victims: 20
}

const vampThree = {
  name: 'edward',
  eye_color:'red',
  hair_color: 'Hot Pink',
  dob: new Date(2000, 2, 13, 7, 47),
  loves: ['Warewolves'],
  location: 'Miami, Florida',
  gender: 'Glowing',
  victims: 2
}

const vampFour = {
  name: 'Dracullette',
  eye_color:'brown',
  hair_color: 'red',
  dob: new Date(1000, 2, 13, 7, 47),
  loves: ['Whips'],
  location: 'Moscow, Russia',
  gender: 'f',
  victims: 500
}



Vampire.create(vampOne, (error, vampire) => {
    if(error){
        console.log(error);
    } else {
        console.log(vampire);
    }
    db.close()
})

Vampire.create(vampTwo, (error, vampire) => {
  if(error){
      console.log(error);
  } else {
      console.log(vampire);
  }
  db.close()
})

Vampire.create(vampThree, (error, vampire) => {
  if(error){
      console.log(error);
  } else {
      console.log(vampire);
  }
  db.close()
})

Vampire.create(vampFour, (error, vampire) => {
  if(error){
      console.log(error);
  } else {
      console.log(vampire);
  }
  db.close()
})