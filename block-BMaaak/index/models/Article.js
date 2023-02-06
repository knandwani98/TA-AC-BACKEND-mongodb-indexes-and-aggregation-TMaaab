var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var articleSchema = new Schema({
  title: String,
  description: String,
  tags: [String],
});

articleSchema.index({ title: "text" });
articleSchema.index({ description: "text" });

module.exports = mongoose.model("Article", articleSchema);
