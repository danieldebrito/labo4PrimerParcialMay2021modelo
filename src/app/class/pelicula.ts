enum tipo {
    Terror,
    Comedia,
    Amor,
    Triller,
    Otros
  }

export class Pelicula {
    constructor(
        public id?: string,
        public nombre?: string,
        public tipo?: tipo,
        public fechaEstreno?: string,
        public cantPublico?: number,
        public fotoPelicula?: string
    ) { }
}