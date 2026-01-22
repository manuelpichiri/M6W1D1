const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Author = require("../author/author.schema");
const passwordNotFound = require("../../exceptions/auth/passwordException");
const authorNotFoundException = require("../../exceptions/auth/authorNotFoundException");

const login = async (body) => {
  const { email, password } = body;
  const authorData = await Author.findOne({ email }); //cerco l'utente per email

  if (!authorData) {
    throw new authorNotFoundException();
  }

  const isPasswordValid = await bcrypt.compare(password, authorData.password); //primo parametro la password che riceviamo dal body. Il secondo parametro è quello dell'autore trovato nel db

  if (!isPasswordValid) {
    throw new passwordNotFound();
  }
  const token = jwt.sign(
    {
      nome: authorData.nome,
      cognome: authorData.cognome,
      email: authorData.email,
    },
    process.env.JWT_SECRET,
    { expiresIn: "50s" },
  );

  return { token };
};

module.exports = {
  login,
};
