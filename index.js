const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({
        message: "Welcome to the Zoo API!!",
        status: "success"
    });
});

app.get('/es/animales', (req, res) => {
    const animales = [
        {
            id: 1,
            nombre: "Tigre de Bengala",
            especie: "Panthera tigris tigris",
            habitat: "Selva tropical",
            dieta: "Carnívoro",
            imagen: "https://i.ibb.co/DpHB3Xg/zoo-tigre.jpg"
        },
        {
            id: 2,
            nombre: "Oso Polar",
            especie: "Ursus maritimus",
            habitat: "Ártico",
            dieta: "Carnívoro",
            imagen: "https://i.ibb.co/D5c4MRx/zoo-osopolar.jpg"
        },
        {
            id: 3,
            nombre: "Elefante Africano",
            especie: "Loxodonta africana",
            habitat: "Sabana",
            dieta: "Herbívoro",
            imagen: "https://i.ibb.co/FXCk61B/zoo-elefante.jpg"
        },
        {
            id: 4,
            nombre: "Pingüino Emperador",
            especie: "Aptenodytes forsteri",
            habitat: "Antártida",
            dieta: "Carnívoro",
            imagen: "https://i.ibb.co/1fJjqhj/zoo-pinguino.jpg"
        },
        {
            id: 5,
            nombre: "Gorila Occidental",
            especie: "Gorilla gorilla",
            habitat: "Selva tropical",
            dieta: "Herbívoro",
            imagen: "https://i.ibb.co/b64B6SY/zoo-gorila.jpg"
        },
        {
            id: 6,
            nombre: "Canguro Rojo",
            especie: "Macropus rufus",
            habitat: "Desierto",
            dieta: "Herbívoro",
            imagen: "https://i.ibb.co/tcv3zBQ/zoo-canguro.jpg"
        },
        {
            id: 7,
            nombre: "Águila Calva",
            especie: "Haliaeetus leucocephalus",
            habitat: "Bosques y montañas",
            dieta: "Carnívoro",
            imagen: "https://i.ibb.co/N3VzzVJ/zoo-aguila.jpg"
        },
        {
            id: 8,
            nombre: "León",
            especie: "Panthera leo",
            habitat: "Sabana y praderas",
            dieta: "Carnívoro",
            imagen: "https://i.ibb.co/NShHgMs/zoo-leon.jpg"
        },
        {
            id: 9,
            nombre: "Jirafa",
            especie: "Giraffa camelopardalis",
            habitat: "Sabana africana",
            dieta: "Herbívoro",
            imagen: "https://i.ibb.co/c3GwmnD/zoo-jirafa.jpg"
        },
        {
            id: 10,
            nombre: "Cocodrilo del Nilo",
            especie: "Crocodylus niloticus",
            habitat: "Ríos y lagos",
            dieta: "Carnívoro",
            imagen: "https://i.ibb.co/4t36SwP/zoo-cocodrilo.jpg"
        },
        {
            id: 11,
            nombre: "Rinoceronte Blanco",
            especie: "Ceratotherium simum",
            habitat: "Sabana y pastizales",
            dieta: "Herbívoro",
            imagen: "https://i.ibb.co/tDwcRsM/zoo-rinoceronte.jpg"
        },
        {
            id: 12,
            nombre: "Tortuga Lora",
            especie: "Lepidochelys kempii",
            habitat: "Playas y océanos",
            dieta: "Omnívoro",
            imagen: "https://i.ibb.co/HzfZFzq/zoo-tortuga.jpg"
        }
    ];
    res.json(animales);
});

app.get('/es/animales/:id', (req, res) => {
    const animalesID = [
        {
            id: 1,
            nombre: "Tigre de Bengala",
            especie: "Panthera tigris tigris",
            habitat: "Selva tropical",
            dieta: "Carnívoro",
            imagen: "https://i.ibb.co/ZMZDYhh/zoo-tigre-id.jpg",
            descripcion: "El tigre de Bengala es uno de los felinos más grandes y vive principalmente en India y Bangladés.",
            estadoDeConservacion: "En peligro de extinción",
            esperanzaDeVida: "10-15 años",
            pesoPromedio: "220-300 kg",
            alturaPromedio: "0.9-1.1 m",
            datosCuriosos: [
                "El rugido del tigre puede escucharse a más de 3 kilómetros.",
                "Los tigres son excelentes nadadores y disfrutan del agua."
            ],
            comidasFavoritas: ["Ciervos", "Jabalíes", "Búfalos"],
            predadoresNaturales: ["Humanos (caza furtiva)"]
        },
        {
            id: 2,
            nombre: "Oso Polar",
            especie: "Ursus maritimus",
            habitat: "Ártico",
            dieta: "Carnívoro",
            imagen: "https://i.ibb.co/Cbnm8Kr/zoo-osopolar-id.jpg",
            descripcion: "El oso polar es el mayor depredador terrestre y está adaptado para sobrevivir en el frío del Ártico.",
            estadoDeConservacion: "Vulnerable",
            esperanzaDeVida: "25-30 años",
            pesoPromedio: "350-700 kg",
            alturaPromedio: "2.4-3 m (de pie)",
            datosCuriosos: [
                "Su pelaje no es blanco, sino translúcido, y refleja la luz.",
                "Tienen una capa de grasa de hasta 10 cm para mantenerse calientes."
            ],
            comidasFavoritas: ["Focas", "Ballenas varadas"],
            predadoresNaturales: ["Humanos (cambio climático y caza)"]
        },
        {
            id: 3,
            nombre: "Elefante Africano",
            especie: "Loxodonta africana",
            habitat: "Sabana",
            dieta: "Herbívoro",
            imagen: "https://i.ibb.co/m69c1rs/zoo-elefante-id.jpg",
            descripcion: "El elefante africano es el mamífero terrestre más grande del mundo.",
            estadoDeConservacion: "Vulnerable",
            esperanzaDeVida: "60-70 años",
            pesoPromedio: "5000-6000 kg",
            alturaPromedio: "3-4 metros",
            datosCuriosos: [
                "Tienen orejas grandes que usan para regular su temperatura.",
                "Se comunican a través de vibraciones en el suelo"
            ],
            comidasFavoritas: ["Hojas", "Frutas", "Hierbas"],
            predadoresNaturales: ["Leones (crías)", "Humanos (caza furtiva)"]
        },
        {
            id: 4,
            nombre: "Pingüino Emperador",
            especie: "Aptenodytes forsteri",
            habitat: "Antártida",
            dieta: "Carnívoro",
            imagen: "https://i.ibb.co/TbpFwVp/zoo-pinguino-id.jpg",
            descripcion: "El pingüino emperador es el pingüino más grande del mundo y puede sobrevivir temperaturas extremas.",
            estadoDeConservacion: "Casi amenazado",
            esperanzaDeVida: "15-20 años",
            pesoPromedio: "22-40 kg",
            alturaPromedio: "1-1.3 metros",
            datosCuriosos: [
                "Son capaces de sumergirse a más de 500 metros en busca de alimento.",
                "Los machos incuban los huevos durante el invierno antártico."
            ],
            comidasFavoritas: ["Peces", "Krill", "Calamares"],
            predadoresNaturales: ["Foca leopardo", "Orcas"]
        },
        {
            id: 5,
            nombre: "Gorila Occidental",
            especie: "Gorilla gorilla",
            habitat: "Selva tropical",
            dieta: "Herbívoro",
            imagen: "https://i.ibb.co/fNtvz22/zoo-gorila-id.jpg",
            descripcion: "El gorila occidental es el más pequeño de las especies de gorilas, pero sigue siendo imponente.",
            estadoDeConservacion: "Críticamente amenazado",
            esperanzaDeVida: "35-50 años",
            pesoPromedio: "140-160 kg (machos)",
            alturaPromedio: "1.4-1.8 metros",
            datosCuriosos: [
                "Los gorilas son animales muy inteligentes y usan herramientas en la naturaleza.",
                "Comparten el 98% de su ADN con los humanos."
            ],
            comidasFavoritas: ["Frutas", "Hojas", "Cortezas"],
            predadoresNaturales: ["Leopardos (ocasionalmente)", "Humanos (deforestación y caza" ]
        },
        {
            id: 6,
            nombre: "Canguro Rojo",
            especie: "Macropus rufus",
            habitat: "Desierto",
            dieta: "Herbívoro",
            imagen: "https://i.ibb.co/SmhRLws/zoo-canguro-id.jpg",
            descripcion: "El canguro rojo es el marsupial más grande de Australia y puede dar grandes saltos.",
            estadoDeConservacion: "Preocupación menor",
            esperanzaDeVida: "8-12 años en la naturaleza",
            pesoPromedio: "65-90 kg (machos)",
            alturaPromedio: "1.5-1.8 metros",
            datosCuriosos: [
                "Pueden alcanzar velocidades de hasta 70 km/h.",
                "Usan su cola para equilibrarse mientras saltan"
            ],
            comidasFavoritas: ["Hierba seca", "Ramas"],
            predadoresNaturales: ["Dingoes", "Humanos"]
        },
        {
            id: 7,
            nombre: "Águila Calva",
            especie: "Haliaeetus leucocephalus",
            habitat: "Bosques y montañas",
            dieta: "Carnívoro",
            imagen: "https://i.ibb.co/8xykZPv/zoo-aguila-id.jpg",
            descripcion: "El águila calva es un símbolo nacional de los Estados Unidos, conocida por su potente vuelo.",
            estadoDeConservacion: "Preocupación menor",
            esperanzaDeVida: "20-30 años",
            pesoPromedio: "3-6 kg",
            alturaPromedio: "0.7-1 metro",
            datosCuriosos: [
                "Pueden alcanzar una velocidad de 160 km/h en picada.",
                "Construyen nidos de hasta 2 metros de ancho."
            ],
            comidasFavoritas: ["Peces", "Pequeños mamíferos"],
            predadoresNaturales: ["Humanos", "Águilas más grandes (ocasionalmente)"]
        },
        {
            id: 8,
            nombre: "León",
            especie: "Panthera leo",
            habitat: "Sabana y praderas",
            dieta: "Carnívoro",
            imagen: "https://i.ibb.co/b5HFYGd/zoo-leon-id.jpg",
            descripcion: "El león es conocido como el 'rey de la selva' debido a su poder y majestad.",
            estadoDeConservacion: "Vulnerable",
            esperanzaDeVida: "10-14 años",
            pesoPromedio: "150-250 kg",
            alturaPromedio: "1.2-1.5 metros",
            datosCuriosos: [
                "Los leones son los únicos felinos que viven en grupos sociales.",
                "Los machos tienen una melena característica que les protege el cuello."
            ],
            comidasFavoritas: ["Cebras", "Antílopes", "Jirafas jóvenes"],
            predadoresNaturales: ["Humanos", "Leones rivales"]
        },
        {
            id: 9,
            nombre: "Jirafa",
            especie: "Giraffa camelopardalis",
            habitat: "Sabana africana",
            dieta: "Herbívoro",
            imagen: "https://i.ibb.co/5k8RjRm/zoo-jirafa-id.jpg",
            descripcion: "La jirafa es el animal terrestre más alto, conocido por su largo cuello y patas.",
            estadoDeConservacion: "Preocupación menor",
            esperanzaDeVida: "25-30 años",
            pesoPromedio: "800-1200 kg",
            alturaPromedio: "4.5-5.5 metros",
            datosCuriosos: [
                "Las jirafas tienen una lengua que puede medir hasta 45 cm.",
                "Puede correr a 50 km/h en distancias cortas."
            ],
            comidasFavoritas: ["Hojas de acacia", "Frutos de árboles altos"],
            predadoresNaturales: ["Leones", "Hienas"]
        },
        {
            id: 10,
            nombre: "Cocodrilo del Nilo",
            especie: "Crocodylus niloticus",
            habitat: "Ríos y lagos",
            dieta: "Carnívoro",
            imagen: "https://i.ibb.co/8NMMjWT/zoo-cocodrilo-id.jpg",
            descripcion: "El cocodrilo del Nilo es uno de los reptiles más grandes y peligrosos del mundo.",
            estadoDeConservacion: "Preocupación menor",
            esperanzaDeVida: "70-100 años",
            pesoPromedio: "400-700 kg",
            alturaPromedio: "4-5 metros",
            datosCuriosos: [
                "Pueden permanecer sumergidos durante más de 2 horas.",
                "Su mordida es una de las más fuertes en el reino animal."
            ],
            comidasFavoritas: ["Antílopes", "Peces", "Aves acuáticas"],
            predadoresNaturales: ["Humanos", "Otros cocodrilos más grandes"]
        },
        {
            id: 11,
            nombre: "Rinoceronte Blanco",
            especie: "Ceratotherium simum",
            habitat: "Sabana y pastizales",
            dieta: "Herbívoro",
            imagen: "https://i.ibb.co/mHJpsS1/zoo-rinoceronte-id.jpg",
            descripcion: "El rinoceronte blanco es uno de los mamíferos más grandes y está en peligro debido a la caza furtiva.",
            estadoDeConservacion: "En peligro crítico",
            esperanzaDeVida: "40-50 años",
            pesoPromedio: "3000-4000 kg",
            alturaPromedio: "1.5-1.8 metros",
            datosCuriosos: [
                "Tiene un cuerno que puede medir hasta 1.5 metros de largo.",
                "Puede correr a una velocidad de 40 km/h a pesar de su tamaño."
            ],
            comidasFavoritas: ["Hierba", "Plantas de pastizales"],
            predadoresNaturales: ["Humanos (caza furtiva)"]
        },
        {
            id: 12,
            nombre: "Tortuga Lora",
            especie: "Lepidochelys kempii",
            habitat: "Playas y océanos",
            dieta: "Omnívoro",
            imagen: "https://i.ibb.co/3cHfwyv/zoo-tortuga-id.jpg",
            descripcion: "La tortuga lora es una de las tortugas marinas más pequeñas y está en peligro de extinción.",
            estadoDeConservacion: "En peligro de extinción",
            esperanzaDeVida: "50-70 años",
            pesoPromedio: "40-50 kg",
            alturaPromedio: "40-50 cm de longitud",
            datosCuriosos: [
                "Es una de las tortugas más migratorias, recorriendo grandes distancias.",
                "Pone cientos de huevos en sus nidos durante la temporada de anidación."
            ],
            comidasFavoritas: ["Medusas", "Crustáceos", "Plantas marinas"],
            predadoresNaturales: ["Tiburones", "Humanos (caza y tráfico ilegal)"]
        }
    ];

    const element = parseInt(req.params.id);
    const zoo = animalesID.find(e => e.id === element);

    if (zoo) {
        res.json(zoo);
    } else {
        res.status(404).json({message: "Zoo not found 404"});
    }
});


const port = 3000;
app.listen(port, () => {
    console.log(`Servidor corriendo en http:localhost:${port}`);
})