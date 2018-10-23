const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs')

const userSchema = new Schema({
  avatar: {
    type: String
  },
  fname: {
    type: String,
    required: [true, 'fname required']
  },
  lname: {
    type: String
  },
  verified: {
    type: Number,
    default: 0
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'email required']
  },
  password: {
    type: String,
    required: [true, 'password required']
  },
  followers: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  following: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  reputation: {
    type: Number,
    default: 0
  },
  role: {
    type: String,
    default: 'user'
  },
  loginWeb: {
    type: Number,
    default: 1
  },
  loginGoogle: {
    type: Number,
    default: 0
  }
});

userSchema.post('validate', doc => {
  let hash = bcrypt.hashSync(doc.password, Number(process.env.HASH_PASSWORD));
  doc.password = hash
  let num = Math.floor(Math.random() * 500)
  doc.avatar = `https://rickandmortyapi.com/api/character/avatar/${num}.jpeg`
})

const User = mongoose.model('User', userSchema);

module.exports = User
