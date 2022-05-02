exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};

exports.clientBoard = (req, res) => {
  res.status(200).send("Client Content.");
};

exports.modelBoard = (req, res) => {
  res.status(200).send("Model Content.");
};
