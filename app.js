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
/**********************************************************************
Create
**********************************************************************/
// Vampire.insertMany(seedData, (err, vampires) => {
//   if (err){ console.log(err)}
//     console.log("added provided vampire data", vampires)
//     mongoose.connection.close();
//   });


// Vampire.countDocuments({},(err,vampire)=>{
//   console.log(vampire);
//   db.close()
// })

// const lameesVampire = {
//   name: 'Lamees Alfallaj',
//   title: 'Earl',
//   hair_color: 'red',
//   eye_color: 'blue',
//   dob: new Date(1995, 9, 25, 15, 10),
//   loves: ['Starbucks','Chips'],
//   location: 'Riyadh, KSA',
//   gender: 'F',
//   victims: 10000000000000000
// }

// const aishaVampire = {
//   name: 'Aisha',
//   title: 'Baron',
//   hair_color: 'blue',
//   eye_color: 'red',
//   dob: new Date(1997, 7, 17, 7, 7),
//   loves: ['Piazza','nodels'],
//   location: 'taif, KSA',
//   gender: 'F',
//   victims: 7
// }

// const muhannadVampire = {
//   name: 'Muhannad',
//   title: 'Lord',
//   hair_color: 'black',
//   eye_color: 'brown',
//   dob: new Date(1998, 2, 11, 11, 11),
//   loves: ['blood','darkness'],
//   location: 'arar, KSA',
//   gender: 'm',
//   victims: 1034420
// }

// const hishamVampire = {
//   name: 'Hisham',
//   title: 'Knights',
//   hair_color: 'black',
//   eye_color: 'brown',
//   dob: new Date(1990, 5, 21, 13, 00),
//   loves: ['sweets','ice cream'],
//   location: 'Riyadh, KSA',
//   gender: 'm',
//   victims: 9000
// }


// Vampire.create(lameesVampire, (error, vampire) => {

//   if (error) {
//     console.log(error);
//   } else {
//     console.log(vampire);
//   }
//   db.close();
// })

// Vampire.create(aishaVampire, (error, vampire) => {

//   if (error) {
//     console.log(error);
//   } else {
//     console.log(vampire);
//   }
//   db.close();
// })

// Vampire.create(muhannadVampire, (error, vampire) => {

//   if (error) {
//     console.log(error);
//   } else {
//     console.log(vampire);
//   }
//   db.close();
// })

// Vampire.create(hishamVampire, (error, vampire) => {

//   if (error) {
//     console.log(error);
//   } else {
//     console.log(vampire);
//   }
//   db.close();
// })
/**********************************************************************
Select by comparison
**********************************************************************/
// Find all the vampires that that are females
// Vampire.find({},(error,vampires)=>{
//     if (error) {
//     console.log(error);
//   } else {
//     console.log(vampires);
//   }
//   db.close();
// })
// have greater than 500 victims

// Vampire.find({victims: {$gte: 500 }},(error,vampires)=>{
//   if (error) {
//   console.log(error);
// } else {
//   console.log(vampires);
// }
// db.close();
// })

// have fewer than or equal to 150 victims

// Vampire.find({victims: {$lte: 150 }},(error,vampires)=>{
//   if (error) {
//   console.log(error);
// } else {
//   console.log(vampires);
// }
// db.close();
// })
// have a victim count is not equal to 210234

// Vampire.find({victims: {$ne: 210234 }},(error,vampires)=>{
//   if (error) {
//   console.log(error);
// } else {
//   console.log(vampires);
// }
// db.close();
// })
// have greater than 150 AND fewer than 500 victims

// Vampire.find({victims: {$gt: 150,  $lt: 500}},(error,vampires)=>{
//   if (error) {
//   console.log(error);
// } else {
//   console.log(vampires);
// }
// db.close();
// })


/**********************************************************************
Select by exists or does not exist
**********************************************************************/


// have a key of 'title'
// Vampire.find({title:{$exists: true}},(error,vampire)=>{
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(vampire);
//   }
//   db.close();
// })

// do not have a key of 'victims'

// Vampire.find({victims:{$exists: false}},(error,vampire)=>{
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(vampire);
//   }
//   db.close();
// })
// have a title AND no victims
// Vampire.find({victims:{$exists: false},title:{$exists: true}},(error,vampire)=>{
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(vampire);
//   }
//   db.close();
// })
// have victims AND the victims they have are greater than 1000

// Vampire.find({victims:{$exists: true, $gt: 1000 }},(error,vampire)=>{
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(vampire);
//   }
//   db.close();
// })

/**********************************************************************
Select with OR
**********************************************************************/

// are from New York, New York, US or New Orleans, Louisiana, US

// Vampire.find({$or:[{location: 'New York, New York, US'},{location: 'New Orleans, Louisiana, US'}]},(error,vampires)=>{
//   if (error) {
//   console.log(error);
// } else {
//   console.log(vampires);
// }
// db.close();
// })

// love brooding or being tragic

// Vampire.find({$or:[{loves: 'brooding'},{loves: 'being tragic'}]},(error,vampires)=>{
//   if (error) {
//   console.log(error);
// } else {
//   console.log(vampires);
// }
// db.close();
// })
// have more than 1000 victims or love marshmallows
// Vampire.find({$or:[{victims: {$gt:1000} },{loves: 'marshmallows'}]},(error,vampires)=>{
//   if (error) {
//   console.log(error);
// } else {
//   console.log(vampires);
// }
// db.close();
// })
// have red hair or green eyes

// Vampire.find({$or:[{hair_color: 'red' },{eye_color: 'green'}]},(error,vampires)=>{
//   if (error) {
//   console.log(error);
// } else {
//   console.log(vampires);
// }
// db.close();
// })

/**********************************************************************
Select objects that match one of several values
**********************************************************************/

// love either frilly shirtsleeves or frilly collars
// Vampire.find({loves: {$in:['frilly shirtsleeves','frilly collars']}},(error,vampires)=>{
//   if (error) {
//   console.log(error);
// } else {
//   console.log(vampires);
// }
// db.close();
// })

// love brooding
// Vampire.find({loves: {$in:['brooding']}},(error,vampires)=>{
//   if (error) {
//   console.log(error);
// } else {
//   console.log(vampires);
// }
// db.close();
// })

// love at least one of the following: appearing innocent, trickery, lurking in rotting mansions, R&B music
// Vampire.find({loves: {$in:['appearing innocent', 'trickery', 'lurking in rotting mansions', 'R&B music']}},(error,vampires)=>{
//   if (error) {
//   console.log(error);
// } else {
//   console.log(vampires);
// }
// db.close();
// })

// love fancy cloaks but not if they also love either top hats or virgin blood * Hint-You will also have to use $nin *

// Vampire.find({loves: {$in:['fancy cloaks'] , $nin: ['top hats','virgin blood']}},(error,vampires)=>{
//   if (error) {
//   console.log(error);
// } else {
//   console.log(vampires);
// }
// db.close();
// })


/**********************************************************************
Negative Selection
**********************************************************************/

// love ribbons but do not have brown eyes
// Vampire.find({loves:{$in:['ribbons']}, eye_color:{$not: {$eq:'brown'}}},(error,vampires)=>{
//   if (error) {
//   console.log(error);
// } else {
//   console.log(vampires);
// }
// db.close();
// })


// are not from Rome
// Vampire.find({location:{$not: {$in: [/.*Rome/]}}},(error,vampires)=>{
//   if (error) {
//   console.log(error);
// } else {
//   console.log(vampires);
// }
// db.close();
// })


// do not love any of the following: [fancy cloaks, frilly shirtsleeves, appearing innocent, being tragic, brooding]
// Vampire.find({loves:{$not: {$in: ['fancy cloaks', 'frilly shirtsleeves', 'appearing innocent','being tragic', 'brooding']}}},(error,vampires)=>{
//   if (error) {
//   console.log(error);
// } else {
//   console.log(vampires);
// }
// db.close();
// })

// have not killed more than 200 people
// Vampire.find({victims:{$not: {$gt: 200}}},(error,vampires)=>{
//   if (error) {
//   console.log(error);
// } else {
//   console.log(vampires);
// }
// db.close();
// })


/**********************************************************************
Replace
**********************************************************************/
// replace the vampire called 'Claudia' with a vampire called 'Eve'.
// 'Eve' will have a key called 'portrayed_by' with the value 'Tilda Swinton'

// Vampire.findOneAndUpdate({name: 'Claudia'}, {name: 'Eve' , portrayed_by:'Tilda Swinton'},{new: true},(err,vampire)=>{
//   console.log(vampire);
//   db.close()
// })

// replace the first male vampire with another whose name is 'Guy Man', and who has a key 'is_actually' with the value 'were-lizard'

// Vampire.findOneAndUpdate({gender: 'm'}, {name: 'Guy Man' , is_actually:'were-lizard'},{new: true},(err,vampire)=>{
//   console.log(vampire);
//   db.close()
// })


/**********************************************************************
Updates
**********************************************************************/

// Update 'Guy Man' to have a gender of 'f'

// Vampire.findOneAndUpdate({name: 'Guy Man'}, {gender: 'f'},{new: true},(err,vampire)=>{
//   console.log(vampire);
//   db.close()
// })

// Update 'Eve' to have a gender of 'm'

// Vampire.findOneAndUpdate({name: 'Eve'}, {gender: 'm'},{new: true},(err,vampire)=>{
//   console.log(vampire);
//   db.close()
// })

// Update 'Guy Man' to have an array called 'hates' that includes 'clothes' and 'jobs'
// Vampire.findOneAndUpdate({name: 'Guy Man'}, {hates: ['clothes', 'jobs']},{new: true},(err,vampire)=>{
//   console.log(vampire);
//   db.close()
// })

// Update 'Guy Man's' hates array also to include 'alarm clocks' and 'jackalopes'
// Vampire.findOneAndUpdate({name: 'Guy Man'}, {$push: {hates: {$each:['alarm clocks', 'jackalopes']}}},{new: true},(err,vampire)=>{
//   console.log(vampire);
//   db.close()
// })

// Rename 'Eve's' name field to 'moniker'

// Vampire.findOneAndUpdate({name: 'Eve'}, {$rename:{name: 'moniker'}},{new: true},(err,vampire)=>{
//   console.log(vampire);
//   db.close()
// })

// We now no longer want to categorize female gender as "f", but rather as fems. Update all females so that the they are of gender "fems".

// Vampire.updateMany({gender:'fems'},{gender: 'f'},{new:true },(err,vampire)=>{
//     console.log(vampire);
//     db.close()
//   })

/**********************************************************************
Remove
**********************************************************************/

// Remove a single document wherein the hair_color is 'brown'
// Vampire.findOneAndRemove({hair_color:'brown'}, (err, vampire)=>{
//     if(err){
//       console.log(err)
//     } else{
//       console.log("This vampire has vanished ", vampire)
//     }
//     db.close()
//   })


// We found out that the vampires with the black eyes were just fakes! Let's remove all the vampires who have blue eyes from our database.
// Vampire.deleteMany({eye_color:'black' }, (err, vampire)=>{
//       if(err){
//         console.log(err)
//       } else{
//         console.log("This vampire has vanished ", vampire)
//       }
//       db.close()
//     })

