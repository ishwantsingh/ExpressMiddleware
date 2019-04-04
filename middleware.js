function uppercaseUser(req, res, next) {
  req.uppercaseName = req.body.name.toUpperCase();
  next();
}
module.exports = { uppercaseUser };
