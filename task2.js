function Mail(asunto, mensaje) {
  this.asunto = asunto
  this.mensaje = mensaje
}

const nuevoCorreo = new Mail(process.argv[3], process.argv[4]);

console.log(nuevoCorreo.asunto + ": " + nuevoCorreo.mensaje)