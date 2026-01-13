const { options } = require("./author.routes");
const authorSchema = require("./author.schema");

const getAuthors = async () => {
  const authors = await authorSchema.find();

  return {
    statusCode: 200,
    authors,
  };
};

const getAuthorById = async (id) => {
  const author = await authorSchema.findById(id);

  return {
    statusCode: 200,
    author,
  };
};

const createAuthor = async (body) => {
  const newAuthor = new authorSchema({
    nome: body.nome,
    cognome: body.cognome,
    email: body.email,
    dataDiNascita: body.dataDiNascita,
    avatar: body.avatar,
  });

  const savedAuthor = await newAuthor.save();
  return savedAuthor;
};

const deleteAuthor = async (id) => {
  const author = await authorSchema.findByIdAndDelete(id);

  return {
    statusCode: 200,
    author,
  };
};

const updateAuthor = async (id, body) => {
  const author = await authorSchema.findByIdAndUpdate(id, body, { new: true });
  return {
    statusCode: 200,
    author,
  };
};

module.exports = {
  getAuthors,
  createAuthor,
  getAuthorById,
  deleteAuthor,
  updateAuthor,
};
