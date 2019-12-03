const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vampireSchema = new Schema({

  name: {type: String, required:true},
  hair_color: {type: String, default:'bblonde'},
  eye_color:String,
  dob:DataCue,
  love: [String],
  location: String,
  gender: String,
  title: String,
  victims: {typr: Number, min: 0, $gte: 0},
});

const Vampire = mongoose.model('Vampire', vampireSchema);

//make this exportable to be accessed in `app.js`
module.exports = Vampire;
