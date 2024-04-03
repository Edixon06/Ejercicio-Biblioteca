class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next ?? null;
    }
}

class libros {
    constructor(titulo, autor, disponibilidad, codigo) {
        this.titulo = titulo;
        this.autor = autor;
        this.disponibilidad = false;
        this.codigo = codigo;

    }
}

class LinkedList {
    head = null;
    size = 0;
    disponibilidadLibro = false;
    add(value) {
        if (!this.size) {

            this.head = new Node(value);
        } else {
            this.head = new Node(value, this.head)
        }
        this.size++;
    }
    obtenerLibro(titulo) {
        let current = this.head;
        while (current) {
            if (current.value.titulo.startsWith(titulo)) {
                return {
                    libros: current.value,
                    disponible: current.disponibilidad, 
                };
            }
            current = current.next;
        }

        return null;
    }

    change(titulo) {
        let current = this.head;
        while (current) {
            if (current.value.titulo.startsWith(titulo)) {
                current.value.disponibilidad = !current.value.disponibilidad;
            }
            current = current.next;
        }

    }
    getValue() {
        if (this.disponibilidadLibro === false) {
            this.disponibilidadLibro = true;
        } else {
            this.disponibilidadLibro = false;
        }
        return this.disponibilidadLibro;
    }
    prestarLibro(titulo) {

        let libros = this.obtenerLibro(titulo);
        if (!this.getValue() === true) {
            libros.disponible = false;
            console.log(`Libro "${titulo}" prestado correctamente.`);
        } else {
            console.log(`No se encontró el libro "${titulo}".`);
        }
        libros.disponible = this.getValue();
    }

    devolverLibro(titulo) {
        let libros = this.obtenerLibro(titulo);
        libros.disponible = this.getValue();
        if (this.getValue() === false) {

            console.log(`Libro "${titulo}" devuelto correctamente.`);
        } else {
            console.log(`No se encontró el libro "${titulo}".`);
        }

    }

}

let librerias = new LinkedList();
librerias.add(new libros("El principito", "Antoine de Saint-Exupéry", true, 8578));
librerias.add(new libros("El juego de Ender", "Orson Scott Card", true, 12745));
librerias.add(new libros("La isla del tesoro", " Robert Louis", true, 2094));
librerias.add(new libros("Viaje al centro de la Tierra", "Julio Verne", true, 655));
librerias.add(new libros("El tesoro del pirata", " Robert Louis", true, 7894));
librerias.add(new libros("La Bestia interna", " Julio Verne", true, 4594));

console.log(librerias.obtenerLibro("El principito"));
console.log(librerias.obtenerLibro("El juego de Ender"));
console.log(librerias.obtenerLibro("La isla del tesoro"));
console.log(librerias.obtenerLibro("Viaje al centro de la Tierra"));
console.log(librerias.obtenerLibro("El tesoro del pirata"));
console.log(librerias.obtenerLibro("La Bestia interna"));
console.log(librerias);

librerias.add(new libros("El principito", "Antoine de Saint-Exupéry", true, 8578, false));

let libro = librerias.obtenerLibro("El principito");
console.log(`Título: ${libro.libros.titulo}, Disponible: ${librerias.getValue()}`);
librerias.prestarLibro("El principito");
libro = librerias.obtenerLibro("El principito");
console.log(`Título: ${libro.libros.titulo}, Disponible: ${librerias.getValue()}`);
librerias.devolverLibro("El principito");
libro = librerias.obtenerLibro("El principito");
console.log(`Título: ${libro.libros.titulo}, Disponible: ${librerias.getValue()}`);