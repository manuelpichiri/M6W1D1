const authorSchema = require("./author.schema");
const bcrypt = require("bcrypt");

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
  const saltRounds = 10;
  const newAuthor = new authorSchema({
    ...body,
    password: await bcrypt.hash(body.password, saltRounds),
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
