const { response } = require("express");
const postService = require("./post.service");

const findAllPost = async (req, res) => {
  try {
    const posts = await postService.getBlogs();
    if (posts.length === 0) {
      return res.status(404).send({
        statusCode: 404,
        message: "no blog inside your db",
      });
    }
    res.status(200).send({
      statusCode: 200,
      posts,
    });
  } catch (error) {
    res.status(500).send({
      statusCode: 500,
      message: "an erro during the request findAllblog",
    });
  }
};

const createPost = async (req, res) => {
  try {
    const body = req.body;
    const post = await postService.createPost(body);
    res.status(201).send({
      statusCode: 201,
      post,
    });
  } catch (error) {
    res.status(500).send({
      statusCode: 500,
      message: "an error during the request createBlog",
    });
  }
};

const findPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await postService.getPostById(id);

    res.status(200).send({
      statusCode: 200,
      post,
    });
  } catch (error) {
    res.status(500).send({
      statusCode: 500,
      message: "an error during the request find by id blog",
    });
  }
};

const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await postService.deletePost(id);
    res.status(200).send({
      statusCode: 200,
      post,
    });
  } catch (error) {
    res.status(500).send({
      statusCode: 500,
      message: "an error during the request delete by id blog",
    });
  }
};

const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const post = await postService.updatePost(id, body);
    res.status(500).send({
      statusCode: 200,
      post,
    });
  } catch (error) {
    response.status(500).send({
      statusCode: 500,
      message: "an error during the request update id blog",
    });
  }
};

module.exports = {
  findAllPost,
  findPostById,
  updatePost,
  deletePost,
  createPost,
};
