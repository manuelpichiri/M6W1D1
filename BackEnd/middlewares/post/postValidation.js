const validatePostBody = (req, res, next) => {
  const errors = [];

  const { category, title, author, content, readTime } = req.body;

  if (
    typeof category !== "string" ||
    category.length < 1 ||
    category.length > 200
  ) {
    errors.push(
      "category must be a string and must contain  between 1  and 200 characters ",
    );
  }
  if (
    typeof title !== "string" ||
    category.length < 1 ||
    category.length > 200
  ) {
    errors.push(
      "title must be a string and must contain  between 1  and 200 characters",
    );
  }
  if (typeof content !== "string") {
    errors.push("content must be a string ");
  }
  if (author && !/^[0-9a-fA-F]{24}$/.test(author)) {
    // controllo se l'autore ha un id composto da 24 caratteri esadecimali
    errors.push("author must be a valid mongodb objectId string");
  }
  if (!readTime || typeof readTime !== "object") {
    errors.push("readTime must be an object ");
  } else {
    if (!readTime.value || typeof readTime.value !== "string") {
      errors.push("readTime.value must be a string");
    }
    if (!readTime.content || typeof readTime.content !== "string") {
      errors.push("readTime.content must be a string");
    }
  }
  if (errors.length > 0) {
    res.status(400).send({ errors });
  } else {
    next();
  }
};

module.exports = validatePostBody;
