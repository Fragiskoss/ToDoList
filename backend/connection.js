const mongoose = require("mongoose");
const URI =
  "mongodb+srv://Username:Password.mongodb.net/?retryWrites=true&w=majority";

async function main() {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB connected successfully");
  } catch (err) {
    console.error("Failed to connect to the database", err);
  }
}

main();

module.exports = mongoose; 
