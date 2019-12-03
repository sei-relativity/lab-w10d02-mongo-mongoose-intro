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

Vampire.insertMany(seedData, (err, vampires) => {
  if (err){ console.log(err)}
    console.log("added provided vampire data", vampires)
    mongoose.connection.close();
  });

  const my1stVampire = {
      name: 'Abdulwhab albal3',
      title: 'ToonBulder',
      hair_color: 'black',
      eye_color: 'brown',
      dob: new Date(1828, 2, 11, 2, 1),
      loves: ['Music','gragic'],
      location: 'SomeWhere, KSA',
      gender: 'M',
      victims: 99999999999
    }


  const my2stVampire = {
    name: 'Mouhanned',
    title: 'Haker',
    hair_color: 'Blue',
    eye_color: 'Red',
    dob: new Date(1928, 3, 13, 7, 3),
    loves: ['Hack','animi'],
    location: 'Kohber, KSA',
    gender: 'M',
    victims: 10100101010
  }

  const my3stVampire = {
    name: 'Diva',
    title: 'D-N-S',
    hair_color: 'black',
    eye_color: 'black',
    dob: new Date(1993, 3, 3, 7, 3),
    loves: ['coffee','travel'],
    location: 'Riyah, KSA',
    gender: 'F',
    victims: 1234
  }

  const my4stVampire = {
    name: 'Amel',
    title: 'ABC',
    hair_color: 'RED',
    eye_color: 'RED',
    dob: new Date(1991, 1, 2, 3,4),
    loves: ['DrinK Tea','sleeping'],
    location: 'Riyah, KSA',
    gender: 'F',
    victims: 4
  }

  ///////////////
///Querying
////Select by comparison
  
// 1. Find all the vampires that that are females

Vampire.find({gender: 'f'}, (err, vamp)=>{
      console.log(vamp);
      db.close();


// 2. have greater than 500 victims
// Vampire.find({ victims: { $gt: 500 }}, (err, foundVampires) => {
//   if (err) {
//     console.log(err);
//     mongoose.connection.close();
//   } else {
//     console.log(foundVampires);
//     mongoose.connection.close();
//   }
// });
// 3. have fewer than or equal to 150 victims

// Vampire.find({ victims: { $lt: 150 }}, (err, foundVampires) => {
  //   if (err)  {
  //     console.log(err);

  //     mongoose.connection.close();
  //   }  
  //    else {
  //     console.log(foundVampires);
  //     mongoose.connection.close();
  //
  //   }
  // });
  
// 4. have a victim count is not equal to 210234

// Vampire.find({victims: {$ne: 210234}}, (err, foundVampires)=>{
//   if (errr) 
//      {
//       console.log(err);
//       mongoose.connection.close();
//     } else 
//     {
//       console.log('Success ', foundVampires);
//       mongoose.connection.close();
//   }
// 5. have greater than 150 AND fewer than 500 victims
  //  Vampire.find({$and: 
//             [
//                 { victims: { $gt: 150}}, 
//                 {victims: {$slt: 500 }}
//             ]
//         }, 
//                 (err, foundVamps) => {
//              console.log(foundVamps);

//### Select by exists or does not exist
//Select all the vampires that:

// 1. have a key of 'title'

  // Vampire.find({ title: { $exists: true}}, (err, foundVampires) => {
    //console.log(vamp);
    //     db.close();

// 2. do not have a key of 'victims'

// db.vampires.find( { victims: {$exists : false}})
  
// 3. have a title AND no victims

// db.vampires.find( { $and: [ { title: {$exists : true}, victims: {$exists : false}}]})

// 4. have victims AND the victims they have are greater than 1000
//     Vampire.find({ $and: [
//     {victims: {$exists: true}},
//     {victims: {$gt: 1000}},
//     ]
// }, (err, foundVamps) => {
//     if (err) {
//         console.log(err)
//     }   else {
//         console.log(foundVamps)
//     }
// });

// ### Select with OR
// Select all the vampires that:

// 1. are from New York, New York, US or New Orleans, Louisiana, US

// Vampire.find({ $or: [{ location: { $eq: 'New York, New York, US'}}, { location: { $eq: 'New Orleans, Louisiana, US'}}]}, (err, vampires) => {
//   if (err) {
//     console.log(err);
//     mongoose.connection.close();
//   } else {
//     console.log(vampires);
//     mongoose.connection.close();
//   }
// });

// 2. love brooding or being tragic
//    Vampire.find({
//    loves: 'brooding'
// },  (err, res) =>{
//   if  (err) {
//      console.log(err);
//   } 
//      else {
//     console.log(res);
//   }
// })

// 3. have more than 1000 victims or love marshmallows
//    db.vampires.find({ $or: [{victims: { $gt: 1000}}, { loves: 'marshmallows'}]})

// 4. have red hair or green eyes

//    Vampire.find({ $or: [
//    {hair_color: {$eq: 'red'}},
//    {eye_color: {$eq: 'green'}},
//    ]
//    },  
//  (err, foundVamps) => {
//     if (err) {
//         console.log(err)
//
//     }   
//      else {
//         console.log(foundVamps)
//     }
// });


// ### Select objects that match one of several values
// Select all the vampires that:

// 1. love either frilly shirtsleeves or frilly collars
// Vampire.find( {loves: { $in: ['frilly shirtsleeves', 'frilly collars']}},
//         (err, response) => {
//          err ? console.log(err) : console.log(response)
//         });


// 2. love brooding

// Vampire.find( { loves: "brooding"},
//     (err, response) => {
//      err ? console.log(err) : console.log(response)    
//     });

// 3. love at least one of the following: appearing innocent, trickery, lurking in rotting mansions, R&B music
//    Vampire.find( {  loves:  { $in: ['appearing innocent', 'trickery', 'lurking in rotting mansions', 'R&B music']}}, (err, response) => {
//      err ? console.log(err) : console.log(response);
// });

// Vampire.find ({
//    $or:  [
//   {loves: "appearing innocent"}, 
//   {loves: "trickery"}, 
//   {loves: "lurking in rotting mansions"},
//     {loves: 'R&B music'}
//   ]
// }, (err, res) => {
//   if (err) {
//     console.log(err);
//   } else{
//     console.log(res);
//   }
// });


// 4. love fancy cloaks but not if they also love either top hats or virgin blood * Hint-You will also have to use $nin *

//   Vampire.find({
//   $and : [
//      { "loves": { $elemMatch: { $nin: ["top hats", "virgin blood"] } }},
//      {loves: "fancy cloaks"}

//    ]
  
//  }, (err, res) => {
//    if (err) {
//      console.log(err, 'this is the error')
//    } else {
//      console.log(res)
//   }
// })


// ### Negative Selection
// Select all vampires that:

// 1. love ribbons but do not have brown eyes

//  Vampire.find({ $and:  [{loves: 'ribbons'}, {eye_color: {$ne : ['brown']}}] }, (err, vampires) => {
//   console.log(err ? err : vampires);
// });


// 2. are not from Rome

//    Vampire.find( { location: {$ne: 'Rome'}}, (err, response)  => {
//    console.log(err ? err : response);
//     });


// 3. do not love any of the following: [fancy cloaks, frilly shirtsleeves, appearing innocent, being tragic, brooding]

// 5. have not killed more than 200 people

//// Vampire.find( { $and: { loves: { $ne: ['fancy cloaks', 'frilly shirtsleeves', 'appearing innocent', 'being tragic', 'brooding']}, { victims: {$lt : 200}}, (err,response) => {
//     console.log(err ? err : response);
// });  


// ## Replace

// 1. replace the vampire called 'Claudia' with a vampire called 'Eve'. 'Eve' will have a key called 'portrayed_by' with the value 'Tilda Swinton'

//  Vampire.findOneAndUpdate({ name : 'Claudia' }, { name: 'Eve' }, (err, vampires) => {
//      console.log(err ? err : vampires);
//    });

// 2. replace the first male vampire with another whose name is 'Guy Man', and who has a key 'is_actually' with the value 'were-lizard'



// ## Update

// 1. Update 'Guy Man' to have a gender of 'f'



// 2. Update 'Eve' to have a gender of 'm'



//     Vampire.findOneAndUpdate( {name: 'Eve'}, {gender: 'm'}, (err,response) => {
//     console.log(err ? err : response);
//    });
// 3. Update 'Guy Man' to have an array called 'hates' that includes 'clothes' and 'jobs'
// 4. Update 'Guy Man's' hates array also to include 'alarm clocks' and 'jackalopes'
// 5. Rename 'Eve's' name field to 'moniker'
// 6. We now no longer want to categorize female gender as "f", but rather as **fems**. Update all females so that the they are of gender "fems".



// ## Remove

// 1. Remove a single document wherein the hair_color is 'brown'
//     Vampire.findOneAndRemove({ hair_color : 'brown' }, (err, response) => {
//      console.log(err ? err : response);
//      });
// 2. We found out that the vampires with the blue eyes were just fakes! Let's remove all the vampires who have blue eyes from our database.

//   Vampire.remove( { eye_color: "blue"}, (err, response) => {
//     console.log(err ? err : response);
// })


