
const mongoose = require('mongoose');
const path = require('path');//allows to clearly define filepaths
const db = "mongodb+srv://swish:xCjo8H8cbamHr5CQ@gcm.odjguc7.mongodb.net/";
//literally the password to access the db 

const connectDB = async () => { //connects db
  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect(db, {
      useNewUrlParser: true,
    });

    console.log('MongoDB is Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB; //to use in other filess