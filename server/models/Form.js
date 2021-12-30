const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
  name: String,
  phone: String,
  address: String,
  city: String,
  state: String,
  zipCode: String,
  email: String,
  sessionInfo: String,
  date: String,
  startTime: String,
  endTime: String,
  numberOfPeople: String,
  theme: String,
  packageType: String,
  addOns: String,
  specialWishes: String
});

const Form = mongoose.model("Form", formSchema);

module.exports = {
  schema: formSchema,
  model: Form
};
