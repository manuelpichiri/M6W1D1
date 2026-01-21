const { response } = require("express");
const commentService = require("./comment.service");

const findAll = async (req, res) => {
  try {
    const comments = await commentService.getComments();
    if (comments.length === 0) {
      return res.status(404).send({
        statusCode: 404,
        message: "no comments inside your data",
      });
    }
    res.status(200).send({
      statusCode: 200,
      comments,
    });
  } catch (error) {
    res.status(500).send({
      statusCode: 500,
      message: "an error during the request find",
    });
  }
};

const findById = async (req, res) => {
  try {
    const { id } = req.params;
    const comment = await commentService.getCommentById(id);

    res.status(200).send({
      statusCode: 200,
      comment,
    });
  } catch (error) {
    res.status(500).send({
      statusCode: 500,
      message: "an error during the request find",
    });
  }
};

const updateComment = async (req, res) => {
  try {
    const { id, body } = req.params;
    const comment = await commentService.updateComment(id, body);

    res.status(200).send({
      statusCode: 200,
      comment,
    });
  } catch (error) {
    res.status(500).send({
      statusCode: 500,
      message: "an error during the request update comment",
    });
  }
};

const deleteComment = async (req, res) => {
  try {
    const { id } = req.params;
    const comment = await commentService.deleteComment(id);
    res.status(200).send({
      statusCode: 200,
      comment,
    });
  } catch (error) {
    res.status(500).send({
      statusCode: 500,
      message: "an error during the request delete comment",
    });
  }
};

const create = async (req, res) => {
  try {
    const { body } = req;
    const comment = await commentService.createComment(body);
    console.log(comment);
    res.status(200).send({
      statusCode: 200,
      comment,
    });
  } catch (error) {
    res.status(500).send({
      statusCode: 500,
      message: "an error during the request create comment sono nel controller",
    });
  }
};

module.exports = {
  findAll,
  findById,
  updateComment,
  deleteComment,
  create,
};
