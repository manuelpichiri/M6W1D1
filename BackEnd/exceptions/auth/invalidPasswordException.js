class InvalidPasswordException extends Error {
  constructor(message = "Password non valida") {
    super(message); //imposta error.message
    this.statusCode = 401; //errore 401 accesso negato, causa password o nome errati
  }
}
module.exports = InvalidPasswordException;
