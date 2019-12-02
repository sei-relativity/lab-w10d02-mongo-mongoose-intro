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
mongoose.connect(mongoURI);

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

// // Build the db using the seed file
// Vampire.insertMany(seedData, (err, vampires) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("added provided vampire data", vampires);
//   mongoose.connection.close();
// });

const fourVampires = [
  {
    name: "Sager's Evil Twin",
    hair_color: "caramel",
    eye_color: "icey",
    dob: new Date(1993, 10, 13, 3, 0),
    loves: ["crack", "angel dust"],
    location: "Minneapolis, Minnesota, US",
    gender: "m",
    victims: 333
  },
  {
    name: "Ms. Nightmare",
    hair_color: "green",
    eye_color: "blonde",
    dob: new Date(1888, 11, 1),
    loves: ["eggs", "shrooms"],
    location: "Macaroni, US",
    gender: "f",
    victims: 1312
  },
  {
    name: "Hungry Cat",
    hair_color: "blue",
    eye_color: "purple",
    dob: new Date(2007, 9, 13, 7, 7),
    loves: ["milk", "cat food"],
    location: "pyongyang, DPRK",
    gender: "f",
    victims: 999
  },
  {
    name: "Ol' Gipper",
    hair_color: "White",
    eye_color: "Black",
    dob: new Date(1895, 2, 18),
    loves: ["Football", "Quarter Back", "Notre Dame"],
    location: "Laurium, Calumet Township, Michigan, US",
    gender: "m",
    victims: 341
  }
];

// Vampire.insertMany(fourVampires, (error, vampires) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(vampires);
//   }
//   db.close();
// });

Vampire.find((err, vampires) => {
  console.log("Find All Vampires");
  if (err) {
    console.log(err);
  } else {
    console.log(vampires);
  }
  db.close();
});

Vampire.find({ gender: "f" }, (err, vampire) => {
  console.log("Female Vampires Find");
  if (err) {
    console.log(err);
  } else {
    console.log(vampire);
  }
  db.close();
});

Vampire.find({ victims: { $gt: 500 } }, (err, vampires) => {
  console.log("Find All vampres over 500 victims");
  if (err) {
    console.log(err);
  } else {
    console.log(vampires);
  }
  db.close();
});

Vampire.find({ victims: { $ne: 210234 } }, (err, vampires) => {
  console.log("victim count is not equal to 210234");
  if (err) {
    console.log(err);
  } else {
    console.log(vampires);
  }
  db.close();
});

Vampire.find(
  { $and: [{ victims: { $gt: 150 } }, { victims: { $lt: 500 } }] },
  (err, vampires) => {
    console.log("victim count is less than 500 and greater than 150");
    if (err) {
      console.log(err);
    } else {
      console.log(vampires);
    }
    db.close();
  }
);

Vampire.find({ title: { $exists: true } }, (err, vampires) => {
  console.log("have a key of 'title'");
  if (err) {
    console.log(err);
  } else {
    console.log(vampires);
  }
  db.close();
});

Vampire.find({ victims: { $exists: false } }, (err, vampires) => {
  console.log("doesn't have victims");
  if (err) {
    console.log(err);
  } else {
    console.log(vampires);
  }
  db.close();
});

Vampire.find(
  { $and: [{ victims: { $exists: false } }, { title: { $exists: true } }] },
  (err, vampires) => {
    console.log("have a title AND no victims");
    if (err) {
      console.log(err);
    } else {
      console.log(vampires);
    }
    db.close();
  }
);

Vampire.find(
  { $and: [{ victims: { $gt: 1000 } }, { title: { $exists: true } }] },
  (err, vampires) => {
    console.log("have a title AND more than a 1000 victims");
    if (err) {
      console.log(err);
    } else {
      console.log(vampires);
    }
    db.close();
  }
);
