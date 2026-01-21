const commentSchema = require("./comment.schema");
const authorSchema = require("../author/author.schema");
const postSchema = require("../post/post.schema");

console.log("LOADING comment.schema");
console.log("LOADING author.schema");
console.log("LOADING post.schema");

const getComments = async () => {
  const comments = await commentSchema.find().populate("post", "_id title");

  return {
    statusCode: 200,
    comments,
  };
};

const getCommentById = async () => {
  const comment = await commentSchema.findById();

  return {
    statusCode: 200,
    comment,
  };
};

const createComment = async (body) => {
  const author = await authorSchema.findById(body.author);
  if (!author) {
    throw new Error("autore non trovato");
  }
  const post = await postSchema.findById(body.post);
  if (!post) {
    throw new Error("post non trovato");
  }
  console.log(body.post);
  console.log(body.author);
  const newComment = new commentSchema({
    content: body.content,
    rating: body.rating,
    post: body.post,
    author: body.author,
  });
  const saveComment = await newComment.save();
  return saveComment;
};

const deleteComment = async (id) => {
  const comment = await commentSchema.findByIdAndDelete(id);
  return {
    statusCode: 200,
    comment,
  };
};

const updateComment = async (id) => {
  const comment = await commentSchema.findByIdAndUpdate(id);
  return {
    statusCode: 200,
    comment,
  };
};
console.log("createComment:", createComment);
module.exports = {
  getComments,
  getCommentById,
  createComment,
  deleteComment,
  updateComment,
};
