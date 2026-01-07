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
    console.log(request.params);
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

module.exports = {
  findAll,
  create,
  findById,
};
