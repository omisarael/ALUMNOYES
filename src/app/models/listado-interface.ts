export class ListadoInterface {
    constructor(
        public id: number,
        public tipoevento: string,
        public nombre: string,
        public horario: string,
        public horario2: string,
        public horario3: string,
        public horario4: string,
        public horario5: string,

        public lugar: string,
        public lugar2: string,
        public lugar3: string,
        public lugar4: string,
        public lugar5: string,
        public fechahome: string,
        public fecha: string,
        public fecha2: string,
        public fecha3: string,
        public fecha4: string,
        public fecha5: string,

        public descripcion: string,

        public latitud: number,
        public latitud2: number,
        public latitud3: number,
        public latitud4: number,
        public latitud5: number,
        public longitud: number,
        public longitud2: number,
        public longitud3: number,
        public longitud4: number,
        public longitud5: number,

        public imagen: string,
        public organiza: string
    ) { }
}
