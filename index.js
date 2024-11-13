const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.json(
        {
            mesasge: "Welcome to the Heroes API!!",
            status: "success"
        }
    )
});

app.get('/es/marvel/heroes', (req, res) => {
    const heroes = [
        {
            id: 1,
            nombre: "Spider-Man",
            primeraAparicion: "Amazing Fantasy #15",
            imagen: "https://i.ibb.co/rfM6BTm/spiderman.jpg"
        },
        {
            id: 2,
            nombre: "Iron Man",
            primeraAparicion: "Tales of Suspense #39",
            imagen: "https://i.ibb.co/D77n08V/ironman.jpg"
        },
        {
            id: 3,
            nombre: "Capitán América",
            primeraAparicion: "Captain America Comics #1",
            imagen: "https://i.ibb.co/w0bk6qq/capitanamerica.jpg"
        },
        {
            id: 4,
            nombre: "Thor",
            primeraAparicion: "Journey into Mystery #83",
            imagen: "https://i.ibb.co/nfgWN6B/thor.jpg"
        },
        {
            id: 5,
            nombre: "Hulk",
            primeraAparicion: "The Incredible Hulk #1",
            imagen: "https://i.ibb.co/5Fc5s7F/hulk.jpg"
        },
        {
            id: 6,
            nombre: "Viuda Negra",
            primeraAparicion: "Tales of Suspense #52",
            imagen: "https://i.ibb.co/VCvHkYv/viudanegra.jpg"
        },
        {
            id: 7,
            nombre: "Doctor Strange",
            primeraAparicion: "Strange Tales #110",
            imagen: "https://i.ibb.co/86xnpsK/strange.jpg"
        },
        {
            id: 8,
            nombre: "Bruja Escarlata",
            primeraAparicion: "X-Men #4",
            imagen: "https://i.ibb.co/sJbTTJh/brujaescarlata.jpg"
        },
        {
            id: 9,
            nombre: "Wolverine",
            primeraAparicion: "The Incredible Hulk #180",
            imagen: "https://i.ibb.co/zbWS4bn/wolverine.jpg"
        },
        {
            id: 10,
            nombre: "Deadpool",
            primeraAparicion: "New Mutants #98",
            imagen: "https://i.ibb.co/Kr6J2Qz/deadpool.jpg"
        },
        {
            id: 11,
            nombre: "Pantera Negra",
            primeraAparicion: "Fantastic Four #52",
            imagen: "https://i.ibb.co/D5Y6hwB/panteranegra.jpg"
        },
        {
            id: 12,
            nombre: "Capitana Marvel",
            primeraAparicion: "Marvel Super-Heroes #13",
            imagen: "https://i.ibb.co/JHhtMNn/capitanamarvel.jpg"
        }
    ];
    res.json(heroes);
});

app.get('/es/marvel/heroes/:id', (req, res) => {
    const heroesId = [
        {
            id: 1,
            nombre: "Spider-Man",
            nombreReal: "Peter Parker",
            alias: [
                "Spidey",
                "El hombre Araña del Vecindario"
            ],
            poderes: [
                "Fuerza sobrehumana",
                "Sentid arácnido",
                "Adherencia a paredes",
                "Lanzamiento de telarañas"
            ],
            primeraAparicion: "Amazing Fantasy #15",
            historia: "Peter Parker, un joven de Queens, recibió sus poderes de una mordedura de araña radioactiva. Desde entonces, ha protegido Nueva York como Spider-Man mientras intenta equilibrar su vida como héroe y estudiante.",
            afiliaciones: [
                "Los Vengadores",
                "Los 4 Fantásticos",
                "Daily Bugle"
            ],
            imagen: "https://i.ibb.co/RHcnpcw/spiderman-comic.jpg"
        },
        {
            id: 2,
            nombre: "Iron Man",
            nombreReal: "Tony Stark",
            alias: [
                "Cabeza de Lata",
                "El Vengador Dorado"
            ],
            poderes: [
                "Intelecto de genio",
                "Armadura avanzada con armas",
                "Vuelos y fuerza aumentada"
            ],
            primeraAparicion: "Tales of Suspense #39",
            historia: "Tony Stark, multimillonario y genio inventario, diseño una poderosa armadura para salvar su vida y luego decidió usarla para proteger al mundo como Iron Man.",
            afiliaciones: [
                "Los Vengadores",
                "S.H.I.E.L.D."
            ],
            imagen: "https://i.ibb.co/nsFgnQ3/ironman-comic.jpg"
        },
        {
            id: 3,
            nombre: "Capitán América",
            nombreReal: "Steve Rogers",
            alias: [
                "Cap",
                "El Centinela de la Libertad"
            ],
            poderes: [
                "Fuerza y agilidad mejoradas",
                "Reflejos sobrehumanos",
                "Resistencia"
            ],
            primeraAparicion: "Captain America Comics #1",
            historia: "Steve Rogers, originalmente un joven débil, fue transformado en un súper soldado para luchar contra el mal. Con su icónico escudo, lidera a los Vengadores en la defensa de la justicia.",
            afiliaciones: [
                "Los Vengadores",
                "S.H.I.E.L.D."
            ],
            imagen: "https://i.ibb.co/VwPvBrR/capitanamerica-comic.jpg"
        },
        {
            id: 4,
            nombre: "Thor",
            nombreReal: "Thor Odinsson",
            alias: [
                "Dios del Trueno",
                "Príncipe de Asgard"
            ],
            poderes: [
                "Fuerza sobrehumana",
                "Control del clima",
                "Inmortalidad",
                "Mjolnir"
            ],
            primeraAparicion: "Journey into Mystery #83",
            historia: "Thor, como protector de Asgard y Midgard (la Tierra), enfrenta amenazas cósmicas y sobrenaturales para proteger ambos mundos.",
            afiliaciones: [
                "Los Vengadores",
                "Asgard"
            ],
            imagen: "https://i.ibb.co/rvyT8bj/thor-comic.jpg"
        },
        {
            id: 5,
            nombre: "Hulk",
            nombreReal: "Bruce Banner",
            alias: [
                "El Gigante Esmeralda",
                "El Increíble Hulk"
            ],
            poderes: [
                "Fuerza ilimitada",
                "Regeneración",
                "Invulnerabilidad"
            ],
            primeraAparicion: "The Incredible Hulk #1",
            historia: "Bruce Banner, un científico tranquilo, se transforma en Hulk, un coloso imparable, cuando pierde el control de sus emociones.",
            afiliaciones: [
                "Los Vengadores",
                "Los Defensores"
            ],
            imagen: "https://i.ibb.co/pZH2pMg/hulk-comic.jpg"
        },
        {
            id: 6,
            nombre: "Viuda Negra",
            nombreReal: "Natasha Romanoff",
            alias: [
                "Nat",
                "La Viuda Negra"
            ],
            poderes: [
                "Experta en combate cuerpo a cuerpo",
                "Resistencia mejorada",
                "Precisión con armas de fuego"
            ],
            primeraAparicion: "Tales of Suspense #52",
            historia: "Natasha Romanoff, ex-agente soviética y espía, utiliza sus habilidades de combate y espionaje para proteger el mundo.",
            afiliaciones: [
                "Los Vengadores",
                "S.H.I.E.L.D."
            ],
            imagen: "https://i.ibb.co/2gNy1KK/viudanegra-comic.jpg"
        },
        {
            id: 7,
            nombre: "Doctor Strange",
            nombreReal: "Stephen Strange",
            alias: [
                "Hechicero Supremo"
            ],
            poderes: [
                "Magia",
                "Proyección astral",
                "Teletransportación"
            ],
            primeraAparicion: "Strange Tales #110",
            historia: "Dr. Stephen Strange, un cirujano convertido en el Hechicero Supremo, protege a la Tierra de amenazas místicas y extradimensionales.",
            afiliaciones: [
                "Los Defensores",
                "Los Vengadores"
            ],
            imagen: "https://i.ibb.co/hDvtPyf/doctorstrange-comic.jpg"
        },
        {
            id: 8,
            nombre: "Bruja Escarlata",
            nombreReal: "Wanda Maximoff",
            alias: [
                "Wanda",
                "La Bruja Escarlata"
            ],
            poderes: [
                "Alteración de la realidad",
                "Magia del caos",
                "Telequinesis"
            ],
            primeraAparicion: "X-Men #4",
            historia: "Wanda, una mutante con el poder de alterar la realidad, enfrenta dilemas morales y emocionales debido a sus inmensos poderes.",
            afiliaciones: [
                "Los Vengadores",
                "Hermandad de los Mutantes"
            ],
            imagen: "https://i.ibb.co/FKmT6Q0/brujaescarlata-comic.jpg"
        },
        {
            id: 9,
            nombre: "Wolverine",
            nombreReal: "James Howlett",
            alias: [
                "Logan",
                "Arma X",
            ],
            poderes: [
                "Factor de curación",
                "Sentidos agudizados",
                "Garras de adamantium"
            ],
            primeraAparicion: "The Incredible Hulk #180",
            historia: "Logan, un guerrero inmortal con garras de adamantium, lucha contra su pasado y su naturaleza salvaje.",
            afiliaciones: [
                "X-Men",
                "Los Vengadores"
            ],
            imagen: "https://i.ibb.co/DkQVG1k/wolverine-comic.jpg"
        },
        {
            id: 10,
            nombre: "Deadpool",
            nombreReal: "Wade Wilson",
            alias: [
                "El Mercenario Bocazas"
            ],
            poderes: [
                "Factor de curación",
                "Experto en armas",
                "Esgrima"
            ],
            primeraAparicion: "New Mutants #98",
            historia: "Wade Wilson, un mercenario excéntrico y autoproclamado antihéroe, usa su factor de curación para realizar misiones peligrosas.",
            afiliaciones: [
                "X-Force",
                "Mercenarios"
            ],
            imagen: "https://i.ibb.co/jH80vrj/deadpool-comic.jpg"
        },
        {
            id: 11,
            nombre: "Pantera Negra",
            nombreReal: "T'Challa",
            alias: [
                "Rey de Wakanda"
            ],
            poderes: [
                "Fuerza mejorada",
                "Sentidos agudizados",
                "Velocidad aumentada"
            ],
            primeraAparicion: "Fantastic Four #52",
            historia: "T'Challa, líder de Wakanda, utiliza su poder y tecnología para proteger su reino y al mundo.",
            afiliaciones: [
                "Los Vengadores",
                "Wakanda"
            ],
            imagen: "https://i.ibb.co/qCh76q7/panteranegra-comic.jpg"
        },
        {
            id: 12,
            nombre: "Capitana Marvel",
            nombreReal: "Carol Danvers",
            alias: [
                "Binaria",
                "Warbird"
            ],
            poderes: [
                "Super fuerza",
                "Proyección de energía",
                "Vuelo"
            ],
            primeraAparicion: "Marvel Super-Heroes #13",
            historia: "Carol Danvers, ex-piloto militar, se convierte en Capitana Marvel después de obtener poderes cósmicos.",
            afiliaciones: [
                "Los Vengadores",
                "Alpha Flight"
            ],
            imagen: "https://i.ibb.co/b3mSv8D/capitanamarvel-comic.jpg"
        }
    ]

    const element = parseInt(req.params.id);
    const heroes = heroesId.find(e => e.id === element);

    if (heroes) {
        res.json(heroes);
    } else {
        res.status(404).json({message: "Heroes not found 404"});
    }
});

module.exports = app;