const products = [
    // Guitarras eléctricas
    {
        id: 1,
        nombre: "Fender Stratocaster",
        category: "Guitarra Eléctrica",
        price: 1200,
        marca: "Fender",
        stock: 8,
        description: "La Fender Stratocaster es una guitarra icónica, famosa por su versatilidad y comodidad.",
        imgURL: "https://placehold.co/300x200/blue/white?text=Stratocaster"
    },
    {
        id: 2,
        nombre: "Gibson Les Paul Standard",
        category: "Guitarra Eléctrica",
        price: 1800,
        marca: "Gibson",
        stock: 5,
        description: "La Les Paul Standard ofrece un tono cálido y sustain legendario, ideal para rock y blues.",
        imgURL: "https://placehold.co/300x200/black/white?text=Les+Paul"
    },
    {
        id: 3,
        nombre: "Ibanez RG550",
        category: "Guitarra Eléctrica",
        price: 950,
        marca: "Ibanez",
        stock: 10,
        description: "Perfecta para solos rápidos y metal, con mástil delgado y pastillas potentes.",
        imgURL: "https://placehold.co/300x200/red/white?text=RG550"
    },
    {
        id: 4,
        nombre: "Fender Telecaster",
        category: "Guitarra Eléctrica",
        price: 1100,
        marca: "Fender",
        stock: 7,
        description: "La Telecaster es conocida por su sonido brillante y ataque definido.",
        imgURL: "https://placehold.co/300x200/yellow/black?text=Telecaster"
    },
    {
        id: 5,
        nombre: "PRS SE Custom 24",
        category: "Guitarra Eléctrica",
        price: 900,
        marca: "PRS",
        stock: 6,
        description: "Versatilidad y elegancia en una guitarra cómoda y de gran calidad.",
        imgURL: "https://placehold.co/300x200/purple/white?text=PRS+SE+Custom+24"
    },
    {
        id: 6,
        nombre: "Epiphone SG Standard",
        category: "Guitarra Eléctrica",
        price: 650,
        marca: "Epiphone",
        stock: 12,
        description: "Diseño ligero y sonido potente, ideal para rock clásico.",
        imgURL: "https://placehold.co/300x200/darkred/white?text=SG+Standard"
    },
    {
        id: 7,
        nombre: "Jackson Dinky JS22",
        category: "Guitarra Eléctrica",
        price: 400,
        marca: "Jackson",
        stock: 9,
        description: "Guitarra moderna y agresiva, perfecta para metal y hard rock.",
        imgURL: "https://placehold.co/300x200/black/white?text=Dinky+JS22"
    },
    {
        id: 8,
        title: "Gretsch G2622 Streamliner",
        category: "Guitarra Eléctrica",
        price: 750,
        marca: "Gretsch",
        stock: 4,
        description: "Cuerpo semi-hueco con sonido vintage y gran resonancia.",
        imgURL: "https://placehold.co/300x200/orange/white?text=G2622"
    },
    {
        id: 9,
        title: "Yamaha Pacifica 112V",
        category: "Guitarra Eléctrica",
        price: 350,
        marca: "Yamaha",
        stock: 15,
        description: "Excelente relación calidad-price, ideal para principiantes y avanzados.",
        imgURL: "https://placehold.co/300x200/white/black?text=Pacifica+112V"
    },
    {
        id: 10,
        title: "Squier Classic Vibe 60s",
        category: "Guitarra Eléctrica",
        price: 450,
        marca: "Squier",
        stock: 11,
        description: "Inspirada en los años 60, con gran sonido y estética vintage.",
        imgURL: "https://placehold.co/300x200/green/white?text=Classic+Vibe+60s"
    },
    {
        id: 11,
        title: "Fender Jazzmaster",
        category: "Guitarra Eléctrica",
        price: 1300,
        marca: "Fender",
        stock: 3,
        description: "Sonido suave y cálido, muy usada en jazz y surf.",
        imgURL: "https://placehold.co/300x200/pink/black?text=Jazzmaster"
    },
    {
        id: 12,
        title: "Ibanez S521",
        category: "Guitarra Eléctrica",
        price: 700,
        marca: "Ibanez",
        stock: 8,
        description: "Cuerpo delgado y cómodo, ideal para largas sesiones de práctica.",
        imgURL: "https://placehold.co/300x200/teal/white?text=S521"
    },
    {
        id: 13,
        title: "Gibson Explorer",
        category: "Guitarra Eléctrica",
        price: 1700,
        marca: "Gibson",
        stock: 2,
        description: "Diseño futurista y potente, ideal para rock pesado.",
        imgURL: "https://placehold.co/300x200/brown/white?text=Explorer"
    },
    {
        id: 14,
        title: "Fender Mustang",
        category: "Guitarra Eléctrica",
        price: 950,
        marca: "Fender",
        stock: 6,
        description: "Compacta y ligera, popular en el indie y alternativo.",
        imgURL: "https://placehold.co/300x200/gray/black?text=Mustang"
    },
    {
        id: 15,
        title: "Jackson Soloist SLX",
        category: "Guitarra Eléctrica",
        price: 1000,
        marca: "Jackson",
        stock: 5,
        description: "Pensada para solos, con gran acceso a los trastes altos.",
        imgURL: "https://placehold.co/300x200/black/yellow?text=Soloist+SLX"
    },
    {
        id: 16,
        title: "Epiphone Firebird",
        category: "Guitarra Eléctrica",
        price: 800,
        marca: "Epiphone",
        stock: 7,
        description: "Diseño único y sonido potente, ideal para rock clásico.",
        imgURL: "https://placehold.co/300x200/orange/black?text=Firebird"
    },
    {
        id: 17,
        title: "Ibanez Artcore AS73",
        category: "Guitarra Eléctrica",
        price: 600,
        marca: "Ibanez",
        stock: 10,
        description: "Cuerpo semi-hueco, sonido cálido y resonante.",
        imgURL: "https://placehold.co/300x200/beige/black?text=AS73"
    },
    {
        id: 18,
        title: "PRS SE Hollowbody II",
        category: "Guitarra Eléctrica",
        price: 1200,
        marca: "PRS",
        stock: 4,
        description: "Cuerpo semi-hueco, gran sustain y tono versátil.",
        imgURL: "https://placehold.co/300x200/blue/black?text=Hollowbody+II"
    },
    {
        id: 19,
        title: "Gretsch G5220 Electromatic",
        category: "Guitarra Eléctrica",
        price: 850,
        marca: "Gretsch",
        stock: 6,
        description: "Sonido vintage y elegante, muy usada en rockabilly.",
        imgURL: "https://placehold.co/300x200/gold/black?text=G5220"
    },
    {
        id: 20,
        title: "Squier Contemporary Strat",
        category: "Guitarra Eléctrica",
        price: 500,
        marca: "Squier",
        stock: 13,
        description: "Estilo moderno y sonido potente, ideal para principiantes.",
        imgURL: "https://placehold.co/300x200/silver/black?text=Contemporary+Strat"
    },

    {
        id: 21,
        title: "Fender Jazz Bass",
        category: "Bajo Eléctrico",
        price: 1100,
        marca: "Fender",
        stock: 7,
        description: "Bajo versátil con gran definición y ataque.",
        imgURL: "https://placehold.co/300x200/blue/white?text=Jazz+Bass"
    },
    {
        id: 22,
        title: "Fender Precision Bass",
        category: "Bajo Eléctrico",
        price: 1150,
        marca: "Fender",
        stock: 6,
        description: "Sonido clásico y potente, ideal para cualquier estilo.",
        imgURL: "https://placehold.co/300x200/black/white?text=Precision+Bass"
    },
    {
        id: 23,
        title: "Music Man StingRay",
        category: "Bajo Eléctrico",
        price: 1700,
        marca: "Music Man",
        stock: 4,
        description: "Bajo activo con gran pegada y presencia.",
        imgURL: "https://placehold.co/300x200/yellow/black?text=StingRay"
    },
    {
        id: 24,
        nombre: "Gibson Thunderbird",
        category: "Bajo Eléctrico",
        price: 1400,
        marca: "Gibson",
        stock: 3,
        description: "Diseño llamativo y sonido profundo.",
        imgURL: "https://placehold.co/300x200/red/white?text=Thunderbird"
    },
    {
        id: 25,
        nombre: "Ibanez SR300E",
        category: "Bajo Eléctrico",
        price: 500,
        marca: "Ibanez",
        stock: 12,
        description: "Cuerpo delgado y mástil rápido, ideal para funk y rock.",
        imgURL: "https://placehold.co/300x200/green/white?text=SR300E"
    },
    {
        id: 26,
        nombre: "Yamaha BB434",
        category: "Bajo Eléctrico",
        price: 600,
        marca: "Yamaha",
        stock: 8,
        description: "Bajo robusto y confiable, excelente para estudio y escenario.",
        imgURL: "https://placehold.co/300x200/purple/white?text=BB434"
    },
    {
        id: 27,
        nombre: "Yamaha TRBX304",
        category: "Bajo Eléctrico",
        price: 550,
        marca: "Yamaha",
        stock: 10,
        description: "Versatilidad y comodidad en un solo bajo.",
        imgURL: "https://placehold.co/300x200/gray/black?text=TRBX304"
    },
    {
        id: 28,
        nombre: "Fender Dimension Bass",
        category: "Bajo Eléctrico",
        price: 1200,
        marca: "Fender",
        stock: 5,
        description: "Bajo moderno con gran rango tonal.",
        imgURL: "https://placehold.co/300x200/orange/white?text=Dimension+Bass"
    },
    {
        id: 29,
        nombre: "Ibanez Talman TMB100",
        category: "Bajo Eléctrico",
        price: 400,
        marca: "Ibanez",
        stock: 14,
        description: "Diseño retro y sonido versátil.",
        imgURL: "https://placehold.co/300x200/teal/white?text=TMB100"
    },
    {
        id: 30,
        nombre: "Ibanez GSR200",
        category: "Bajo Eléctrico",
        price: 350,
        marca: "Ibanez",
        stock: 16,
        description: "Bajo asequible y cómodo para principiantes.",
        imgURL: "https://placehold.co/300x200/olive/white?text=GSR200"
    },
    {
        id: 31,
        nombre: "Fender Aerodyne Jazz Bass",
        category: "Bajo Eléctrico",
        price: 1300,
        marca: "Fender",
        stock: 3,
        description: "Diseño elegante y sonido definido.",
        imgURL: "https://placehold.co/300x200/gold/black?text=Aerodyne"
    },
    {
        id: 32,
        nombre: "Squier Affinity Jazz Bass",
        category: "Bajo Eléctrico",
        price: 300,
        marca: "Squier",
        stock: 18,
        description: "Gran relación calidad-price, ideal para principiantes.",
        imgURL: "https://placehold.co/300x200/silver/black?text=Affinity+Jazz"
    },
    {
        id: 33,
        nombre: "Squier Affinity Precision Bass",
        category: "Bajo Eléctrico",
        price: 320,
        marca: "Squier",
        stock: 17,
        description: "Sonido clásico a un price accesible.",
        imgURL: "https://placehold.co/300x200/white/black?text=Affinity+Precision"
    },
    {
        id: 34,
        nombre: "Warwick RockBass Corvette",
        category: "Bajo Eléctrico",
        price: 900,
        marca: "Warwick",
        stock: 4,
        description: "Bajo de alta gama con gran sustain.",
        imgURL: "https://placehold.co/300x200/black/yellow?text=Corvette"
    },
    {
        id: 35,
        nombre: "Cort Action Bass",
        category: "Bajo Eléctrico",
        price: 350,
        marca: "Cort",
        stock: 13,
        description: "Ligero y cómodo, ideal para tocar en vivo.",
        imgURL: "https://placehold.co/300x200/blue/black?text=Action+Bass"
    },
    {
        id: 36,
        nombre: "ESP LTD B-10",
        category: "Bajo Eléctrico",
        price: 400,
        marca: "ESP",
        stock: 9,
        description: "Bajo potente y moderno, perfecto para metal.",
        imgURL: "https://placehold.co/300x200/blue/white?text=LTD+B-10"
    },
    {
        id: 37,
        nombre: "Ibanez SR500E",
        category: "Bajo Eléctrico",
        price: 800,
        marca: "Ibanez",
        stock: 7,
        description: "Comodidad y versatilidad en un solo instrumento.",
        imgURL: "https://placehold.co/300x200/green/black?text=SR500E"
    },
    {
        id: 38,
        nombre: "Yamaha TRB1005J",
        category: "Bajo Eléctrico",
        price: 1500,
        marca: "Yamaha",
        stock: 2,
        description: "Bajo profesional con gran rango tonal.",
        imgURL: "https://placehold.co/300x200/beige/black?text=TRB1005J"
    },
    {
        id: 39,
        nombre: "Epiphone EB-0",
        category: "Bajo Eléctrico",
        price: 350,
        marca: "Epiphone",
        stock: 11,
        description: "Sonido cálido y vintage, ideal para rock clásico.",
        imgURL: "https://placehold.co/300x200/orange/white?text=EB-0"
    },
    {
        id: 40,
        nombre: "Gretsch G2220 Junior Jet",
        category: "Bajo Eléctrico",
        price: 450,
        marca: "Gretsch",
        stock: 8,
        description: "Bajo compacto con gran pegada y definición.",
        imgURL: "https://placehold.co/300x200/green/white?text=G2220"
    }
];

export default products;