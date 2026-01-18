const { response } = require("express");
const postService = require("./post.service");
const EmailService = require("../mail/mail.service");

const email = new EmailService();

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
      message: "an error during the request findAllblog",
    });
  }
};

const createPost = async (req, res, next) => {
  try {
    const body = req.body;
    const post = await postService.createPost(body);
    await post.populate("author"); // mi popola la proprietà author del post, in questo modo posso portare tutti i parametri che mi servono.
    console.log(post.author);
    console.log(post.author.email);
    await email.send(
      post.author.email,
      "TEST NODEMAILER",
      "Congratulazioni hai creato un nuovo post",
    );

    res.status(201).send({
      statusCode: 201,
      post,
    });
  } catch (error) {
    next(error);
  }
};

const uploadFileOnCloudByID = async (req, res, next) => {
  try {
    const { id } = req.params;
    const img = req.file.path;
    const post = await postService.updatePost(id, { cover: img });

    res.status(200).send({
      statusCode: 200,
      post,
    });
  } catch (error) {
    next(error);
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
    res.status(200).send({
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
  uploadFileOnCloudByID,
};
