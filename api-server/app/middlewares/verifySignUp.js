const db = require("../models");
const ROLES = db.ROLES;
const User = db.user;

checkDuplicateEmail = (req, res, next) => {
  User.findOne({
    email: req.body.email,
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (user) {
      res.status(400).send({ message: "Failed! Email is already in use!" });
      return;
    }

    next();
  });
};

checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        res.status(400).send({
          message: `Failed! Role '${req.body.roles[i]}' does not exist!`,
        });
        return;
      }
    }
  }

  next();
};

checkPasswordLength = (req, res, next) => {
  if (req.body.password) {
    if (req.body.password.length < 8) {
      res.status(400).send({
        message: "Failed! Password should be at least 8 characters long!",
      });
      return;
    }
  }
  next();
};

const verifySignUp = {
  checkDuplicateEmail,
  checkRolesExisted,
  checkPasswordLength,
};

module.exports = verifySignUp;
