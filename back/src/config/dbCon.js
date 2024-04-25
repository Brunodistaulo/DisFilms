const mongosee = require("mongoose");
require("dotenv").config();

const dbCon = async () => {
  try {
    await mongosee.connect("mongodb+srv://brunodistaulo03:kVOBhMDCODmhb8vI@cluster0.9uurtaq.mongodb.net/DBMovies?retryWrites=true&w=majority&appName=Cluster0");
  } catch (error) {
    console.log("Hiciste todo mal wachin");
  }
};

module.exports = dbCon;
