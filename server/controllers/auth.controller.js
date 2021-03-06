const UserModel = require('../models/user.model');
const jwt = require('jsonwebtoken');

module.exports.signUp = async (req, res) => {
  const { firstName, lastName, password, email } = req.body;

  try {
    const user = await UserModel.create({
      firstName,
      lastName,
      email,
      password,
    });
    res.status(201).json({ user: user._id });
  } catch (err) {
    res.status(200).send(err);
  }
};

module.exports.signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.login(email, password);
    const token = createToken(user._id);
    res.cookie('jwt', token, { httpOnly: true });
    res.status(200).json({ user: user._id });
  } catch (err) {
    res.status(200).json(err);
  }
};

module.exports.logout = (req, res) => {
  res.cookie('jwt');
  res.redirect('/');
};
