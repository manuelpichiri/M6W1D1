const { response } = require("express");
const authorService = require("./author.service");

const findAll = async (request, response) => {
  try {
    const authors = await authorService.getAuthors();
    if (authors.length === 0) {
      return response.status(404).send({
        statusCode: 404,
        message: "No user inside your database",
      });
    }
    response.status(200).send({
      statusCode: 200,
      authors,
    });
  } catch (error) {
    response.status(500).send({
      statusCode: 500,
      message: "an error during the request find",
    });
  }
};

const create = async (request, response) => {
  try {
    const { body } = request;
    const author = await authorService.createAuthor(body);
    response.status(201).send({ statusCode: 201, author });
  } catch (error) {
    response.status(500).send({
      statusCode: 500,
      message: "an error during the request post",
    });
  }
};

const findById = async (request, response) => {
  try {
    const { id } = request.params;
    const author = await authorService.getAuthorById(id);

    response.status(200).send({
      statusCode: 200,
      author,
    });
  } catch (error) {
    response.status(500).send({
      statusCode: 500,
      message: "an error during the request find by id",
    });
  }
};

const deleteAuthor = async (request, response) => {
  try {
    const { id } = request.params;
    const author = await authorService.deleteAuthor(id);
    response.status(200).send({
      statusCode: 200,
      author,
    });
  } catch (error) {
    response.status(500).send({
      statusCode: 500,
      message: "an error during the request delete by id",
    });
  }
};

const updateAuthor = async (request, response) => {
  try {
    const { id } = request.params;
    const body = request.body;
    const author = await authorService.updateAuthor(id, body);
    response.status(200).send({
      statusCode: 200,
      author,
    });
  } catch (error) {
    response.status(500).send({
      statusCode: 500,
      message: "an error during the request update by id",
    });
  }
};

module.exports = {
  findAll,
  create,
  findById,
  deleteAuthor,
  updateAuthor,
};
