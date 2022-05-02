const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;
const Role = db.role;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  const isClient = req.body.roles.includes("client");
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    website: isClient ? req.body.website : "",
    password: bcrypt.hashSync(req.body.password, 8),
  });

  user.save((err, user) => {
    if (err) {
      const errors = err.errors;
      const message = Object.values(errors).map((error) => error.message);

      res.status(500).send({ message: message });
      return;
    }

    // if isClient, add client role. otherwise, add model role
    const role = isClient ? "client" : "model";
    Role.findOne({ name: role }, (err, foundRole) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      user.roles = [foundRole._id];
      user.save((err) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }

        res.send({ message: "User was registered successfully!" });
      });
    });
  });
};

exports.signin = (req, res) => {
  User.findOne({
    email: req.body.email,
  })
    .populate("roles", "-__v")
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!",
        });
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400, // 24 hours
      });

      var authorities = [];

      for (let i = 0; i < user.roles.length; i++) {
        authorities.push("ROLE_" + user.roles[i].name.toUpperCase());
      }
      res.status(200).send({
        id: user._id,
        name: user.name,
        email: user.email,
        website: user.website,
        roles: authorities,
        accessToken: token,
      });
    });
};
