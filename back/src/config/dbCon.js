const mongosee = require("mongoose");
require("dotenv").config();

const dbCon = async () => {
  try {
    await mongosee.connect(process.env.MONGO_URI);
  } catch (error) {
    console.log("Hiciste todo mal wachin");
  }
};

module.exports = dbCon;
