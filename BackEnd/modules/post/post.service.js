const { options } = require("./post.routes");
const postSchema = require("./post.schema");

const getPosts = async () => {
  const blogs = await postSchema.find().populate("author", "nome email");

  return {
    statusCode: 200,
    blogs,
  };
};

const getPostById = async (id) => {
  const post = await postSchema.findById(id);
  return {
    statusCode: 200,
    post,
  };
};

const createPost = async (body) => {
  const newPost = new postSchema({
    category: body.category,
    title: body.title,
    cover: body.cover,
    readTime: body.readTime,
    author: body.author,
    content: body.content,
  });

  const savePost = await newPost.save();
  return savePost;
};

const deletePost = async (id) => {
  const post = await postSchema.findByIdAndDelete(id);
  return {
    statusCode: 200,
    post,
  };
};

const updatePost = async (id, body) => {
  const post = await postSchema.findByIdAndUpdate(id, body, { new: true });
  return {
    statusCode: 200,
    post,
  };
};

module.exports = {
  getPosts,
  getPostById,
  createPost,
  deletePost,
  updatePost,
};
