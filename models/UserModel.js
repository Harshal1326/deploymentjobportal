// models/userModel.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  avatarPublicId: String,
  email: String,
  password: String,
  lastName: {
    type: String,
    default: 'lastName',
  },
  location: {
    type: String,
    default: 'my city',
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
});

/* ───────────── Hide password in JSON output ───────────── */
userSchema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.password;         // remove sensitive field
  return obj;
};

/* ───────────── Prevent OverwriteModelError ───────────── */
const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;







// import mongoose from 'mongoose';

// const UserSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   password: String,
//   lastName: {
//     type: String,
//     default: 'lastName',
//   },
//   location: {
//     type: String,
//     default: 'my city',
//   },
//   role: {
//     type: String,
//     enum: ['user', 'admin'],
//     default: 'user',
//   },
// });

// UserSchema.methods.toJSON = function () {
//   var obj = this.toObject();
//   delete obj.password;
//   return obj;
// };

// export default mongoose.model('User', UserSchema);
