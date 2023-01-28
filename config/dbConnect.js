const { default: mongoose } = require("mongoose");

const databaseUrl = "mongodb+srv://dinesh103:dinesh103DINESH103@cluster0.3pvw9hk.mongodb.net/bmi_calculator?retryWrites=true&w=majority";

const dbConnect = () => {
  return mongoose.connect(databaseUrl);
}

module.exports = dbConnect;