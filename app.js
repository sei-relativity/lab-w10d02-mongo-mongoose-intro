/**********************************************************************
Set up and Configuration
**********************************************************************/
// Dependencies
const mongoose = require("mongoose");
const seedData = require("./models/seed_vampires.js");
const Vampire = require("./models/vampire.js");

// Configuration
const mongoURI = "mongodb://localhost:27017/" + "vampires";
const db = mongoose.connection;

// Connect to Mongo
mongoose.connect(
  mongoURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("the connection with mongod is established");
  }
);

// Connection Error/Success
db.on("error", err => console.log(err.message + " is Mongod not running?"));
db.on("connected", () => console.log("mongo connected: ", mongoURI));
db.on("disconnected", () => console.log("mongo disconnected"));

db.on("open", () => {
  console.log("Connection made!");
});

/**********************************************************************
Write Your Code Below
**********************************************************************/
// // Run it ONCE in then comment it out so it does not make duplicates of data.
// // Insert Seed Data
// Vampire.insertMany(seedData, (error, vampires) => {
//   if (error) {
//     console.log(error);
//   }
//   console.log("added provided vampire data", vampires);
//   mongoose.connection.close();
// });

// Using the create method, create 4 new vampires with some qualities... 2 males + 2 females
const myFirstVampire = {
  name: "Aracula",
  dob: new Date(1990, 6, 1, 18, 00),
  hair_color: "black",
  eye_color: "brown",
  loves: ["eating eyes", "drinking blood"],
  location: "Canberra, Australia",
  gender: "m",
  victims: 111,
  title: "King of Australia"
};

const mySecondVampire = {
  name: "Nracula",
  dob: new Date(1991, 12, 15, 6, 00),
  hair_color: "black",
  eye_color: "black",
  loves: ["eating legs", "drinking sweet blood"],
  location: "Abuja, Nigeria",
  gender: "m",
  victims: 222,
  title: "Prince of Nigeria"
};

const myThirdVampire = {
  name: "Gracula",
  dob: new Date(1992, 3, 25, 10, 30),
  hair_color: "grey",
  eye_color: "blue",
  loves: ["eating hands", "drinking tears"],
  location: "Athens, Greece",
  gender: "f",
  victims: 333,
  title: "Queen of Greece"
};

const myForthVampire = {
  name: "Bracula",
  dob: new Date(1993, 5, 5, 10, 45),
  hair_color: "blonde",
  eye_color: "green",
  loves: ["eating stomachs", "drinking bitter blood"],
  location: "Bogota, Colombia",
  gender: "f",
  victims: 444,
  title: "Princess of Colombia"
};

// // Create the first vampire
// Vampire.create(myFirstVampire, (error, vampire) => {
//   error ? console.log(error) : console.log(vampire);
// });

// // Create the second vampire
// Vampire.create(mySecondVampire, (error, vampire) => {
//   error ? console.log(error) : console.log(vampire);
// });

//// Create the third vampire
// Vampire.create(myThirdVampire, (error, vampire) => {
//   error ? console.log(error) : console.log(vampire);
// });

// // Create the forth vampire
// Vampire.create(myForthVampire, (error, vampire) => {
//   error ? console.log(error) : console.log(vampires);
// });

// // Find all the vampires that that are females
// Vampire.find({ gender: "f" }, (error, vampires) => {
//   error ? console.log(error) : console.log(vampires);
// });

// // Have greater than 500 victims
// Vampire.find({ victims: { $gt: 500 } }, (error, vampires) => {
//   error ? console.log(error) : console.log(vampires);
// });

// // Have fewer than or equal to 150 victims
// Vampire.find({ victims: { $lte: 150 } }, (error, vampires) => {
//   error ? console.log(error) : console.log(vampires);
// });

// // Have a victim count is not equal to 210234
// Vampire.find({ victims: { $ne: 210234 } }, (error, vampires) => {
//   error ? console.log(error) : console.log(vampires);
// });

// // Have greater than 150 AND fewer than 500 victims
// Vampire.find({ victims: { $gt: 150, $lt: 500 } }, (error, vampires) => {
//   error ? console.log(error) : console.log(vampires);
// });

// // // have a key of 'title'
// Vampire.find({ title: { $exists: true } }, (error, vampires) => {
//   error ? console.log(error) : console.log(vampires);
// });

// // do not have a key of 'victims'
// Vampire.find({ victims: { $exists: false } }, (error, vampires) => {
//   error ? console.log(error) : console.log(vampires);
// });

// // have a title AND no victims
// Vampire.find(
//   { $and: [{ title: { $exists: true } }, { victims: { $exists: false } }] },
//   (error, vampires) => {
//     error ? console.log(error) : console.log(vampires);
//   }
// );

// // have victims AND the victims they have are greater than 1000
// Vampire.find({ victims: { $exists: true, $gt: 1000 } }, (error, vampires) => {
//   error ? console.log(error) : console.log(vampires);
// });
