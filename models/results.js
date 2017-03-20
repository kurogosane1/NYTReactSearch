var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var resultsSchema = new Schema({
  title: {
    type: String
  },
  url: {
    type: String
  },
  date: {
    type: String
  }
});

var Results = mongoose.model("Results", resultsSchema);
module.exports = Results;
