const mongoose = require('mongoose');
let Schema = mongoose.Schema;
const articleSchema = new Schema({
  title: String,
  author: String,
  duration: String,
  capture: String,
  createdAt: String,
  story: String,
  imgAuthor: String,
});
export const Article =
  mongoose.models.Article || mongoose.model('Article', articleSchema);
