const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const  _ = require('lodash');

const creditScehma = new mongoose.Schema({
  title: { type: String, required: 'Please provide a title' },
  discipline: {
    type: String,
    enum: ['Film','Commercial','Musical','Stage','Pantomime','Short Film','Workshop','Further Credits']
  },
  character: String,
  company: String,
  date: Date,
  director: String
},{
  id: false
});

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  credits: [creditScehma]
},{
  id: false
});

userSchema.set('toJSON', {
  virtuals: true,
  transform(doc, json) {
    delete json.password;
    return json;
  }
});

userSchema.virtual('passwordConfirmation')
  .set(function setPasswordConfirmation(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation;
  });

userSchema.pre('validate', function checkPasswordsMatch(next) {
  if (this.isModified('password') && this._passwordConfirmation !== this.password) {
    this.invalidate('passwordConfirmation', 'does not match');
  }
  next();
});

userSchema.pre('save', function hashPassword(next) {
  if(this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
  }
  next();
});

userSchema.methods.validatePassword = function validatePassword(password) {
  return bcrypt.compareSync(password, this.password);
};

userSchema.virtual('creditTypes').get(function() {
  return _.uniq(this.credits.map(credit => {
    return credit.discipline;
  }))
    .map(discipline => {
      return {
        discipline: discipline,
        credits: this.credits.filter(credit => {
          if(credit.discipline === discipline) return credit;
        })
      };
    });
});

module.exports = mongoose.model('User', userSchema);
