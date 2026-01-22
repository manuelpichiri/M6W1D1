class authorNotFoundException extends Error {
  constructor(message = "utente non trovato") {
    super(message);
    this.statusCode = 401;
  }
}
module.exports = authorNotFoundException;
