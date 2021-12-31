const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
  name: String,
  phone: String,
  address: String,
  city: String,
  state: String,
  zipcode: String,
  email: String,
  sessiontype: String,
  date: String,
  starttime: String,
  endtime: String,
  people: String,
  theme: String,
  package: String,
  addons: String,
  details: String
});

const Form = mongoose.model("Form", formSchema);

module.exports = {
  schema: formSchema,
  model: Form
};
