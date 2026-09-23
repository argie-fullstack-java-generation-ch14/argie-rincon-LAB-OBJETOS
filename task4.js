function Journey(inicio, fin) {
  this.inicio = inicio;
  this.fin = fin;
}

const desde = process.argv[3];
const hasta = process.argv[4];

const viaje = new Journey(desde, hasta)

console.log("Reservando un taxi desde " + viaje.inicio + " hasta " + viaje.fin + ".")