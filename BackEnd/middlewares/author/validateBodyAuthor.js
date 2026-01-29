const validateAuthorBody = (req, res, next) => {
  const errors = [];

  const { nome, cognome, password, email, dataDiNascita } = req.body;
  if (typeof nome !== "string") {
    errors.push("Nome must be a string");
  }
  if (typeof cognome !== "string") {
    errors.push("cognome must be a string");
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.push("email must be valid");
  }
  if (typeof password !== "string" || password.length < 10) {
    errors.push("Password must be a string and must contain 10 characters");
  }
  if (typeof dataDiNascita !== "string") {
    errors.push("dataDiNascita must be a string");
  }
  if (errors.length > 0) {
    res.status(400).send({ errors });
  } else {
    next();
  }
};

module.exports = validateAuthorBody;
