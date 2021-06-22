const mongoose = require('mongoose');
let Schema = mongoose.Schema;
const userSchema = new Schema({
  userName: String,
  password: String,
  role: {
    type: Number,
    default: 0,
  },
  imgAuthor: String,
});
export const Users =
  mongoose.models.Users || mongoose.model('Users', userSchema);

// module.exports = mongoose.model.Users || mongoose.model('Users', userSchema);
