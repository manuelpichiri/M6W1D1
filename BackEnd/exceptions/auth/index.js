class HttpException extends Error {
  // classe custom server per errori controllati
  constructor(message, statusCode, error) {
    super(message);

    this.statusCode = statusCode;
    this.error = error;
  }
}

module.exports = HttpException;
