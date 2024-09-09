function restrict(req, res, next) {
  if (req.session.user) {
    next();
  } else {
    req.session.error = "Access denied!";
    console.error(req.session.error)
    res.redirect("/login");
  }
}

module.exports = restrict;
