const wines = [
    {
        id: 1,
        name: "Durigutti",
        varietal: "Cabernet Franc",
        origin: "Agrelo, Luján de Cuyo",
        detail: "Expresa frescura con una nariz que conjuga arándanos, grosellas negras, yodoy especias. El paladar es sedoso, con capas para descrubir. Fruta azul fresca, acidez brilante y un acabado medio con buena forma y tensión.",
        oenologist: "Héctor y Pablo Durigutti",
        price: 14035,
        stock: 11,
        image: "/img/wines/wine_durigutti_3.jpg",
        logo: "/img/wines/logo_durigutti.jpg"
    },
    {
        id: 2,
        name: "Punto Final",
        varietal: "Malbec",
        price: 10177,
        origin: "Valle de Uco, Luján de Cuyo",
        detail: "Rojo violáceo con tintes granate. Aromáticamente es expresivo y despliega notas de ciruelas, moras y arándanos con trazos terrosos y florales. En boca es amable con frescura justa y buen equilibrio. Cuerpo medio, taninos jugosos y final de cuerdo floral.",
        oenologist: "Pablo Sánchez",
        stock: 5,
        image: "/img/wines/wine_punto_final_3.jpg",
        logo: "/img/wines/logo_renacer.jpg"
    },
    {
        id: 3,
        name: "El Enemigo",
        varietal: "Chardonnay",
        origin: "Gualtallary, Mendoza",
        detail: "Impacto fresco y excelente estructura en boca. Vino que tiene un excelente equilibrio y elegancia con un final persistente bien estructurado.",
        oenologist: "Alejandro Vigil",
        price: 10366,
        stock: 2,
        image: "/img/wines/wine_enemigo.jpg",
        logo: "/img/wines/logo_casa_vigil.jpg"
    },
    {
        id: 4,
        name: "Dedicado",
        varietal: "Cabernet Sauvignon",
        origin: "Tupungato, Valle de Uco",
        detail: "Intenso color rojo rubí con matices granate. En nariz ciruela especiada, cereza negra, clavo y lavanda con hierbas secas. En boca complejo de cuerpo medio y taninos sedosos.",
        oenologist: "Luis cabral de Almeida",
        price: 19120,
        stock: 6,
        image: "/img/wines/wine_dedicado_2.jpg",
        logo: "/img/wines/logo_flichman.jpg"
    },
    {
        id: 5,
        name: "Riglos",
        varietal: "Cabernet Sauvignon",
        origin: "Alto Valle de Uco, Mendoza",
        detail: "Intensos rojos terracota con bordes color azafrán. En nariz es fragante con vapores calientes de guiso, luego algunas frutas, galleta con manteca  miel. Boca elegante, no estridente, con presencia de especias como la pimienta, romero y la punta de azafrán.",
        oenologist: "Pulqui Rodríguez Villa",
        price: 14692,
        stock: 9,
        image: "/img/wines/wine_riglos.jpg",
        logo: "/img/wines/logo_riglos.jpg"
    },
    {
        id: 6,
        name: "El Enemigo",
        varietal: "Malbec",
        origin: "Gualtallary, Mendoza",
        detail: "En vista un rojo rubí de alta intensidad y destellos violáceos. En nariz mucha madera. En boca, un ataque brutal al paladar. Algo dulce y carnoso de muy buen equilibrio y acidez con taninos muy marcados.",
        oenologist: "Alejandro Vigil",
        price: 15024,
        stock: 3,
        image: "/img/wines/wine_enemigo.jpg",
        logo: "/img/wines/logo_casa_vigil.jpg"
    },
    {
        id: 7,
        name: "Durigutti",
        varietal: "Cabernet Sauvignon",
        origin: "La Consulta, Valle de Uco",
        detail: "Combina grosella y moras con matices de albahaca y laurel. Con mucho cuerpo, fruta azul intensa y grosellas negras bellamente enmarcadas por finos taninos, resulta un vino muy intenso y enfocado",
        oenologist: "Héctor y Pablo Durigutti",
        price: 17866,
        stock: 8,
        image: "/img/wines/wine_durigutti_2.jpg",
        logo: "/img/wines/logo_durigutti.jpg"
    },
    {
        id: 8,
        name: "El Enemigo",
        varietal: "Cabernet Franc",
        origin: "Gualtallary, Mendoza",
        detail: "Rojo rubí con tonos violetas suaves. Aromas intensos y notas concentradas de cassis, grosellas maduras y especias dulces. Paso por roble que ofrece notas de cedro y vainilla. Impacto fresco y excelente estructura en boca.",
        oenologist: "Alejandro Vigil",
        price: 13556,
        stock: 2,
        image: "/img/wines/wine_enemigo.jpg",
        logo: "/img/wines/logo_casa_vigil.jpg"
    },
    {
        id: 9,
        name: "Punto Final",
        varietal: "Cabernet Sauvignon",
        origin: "Valle de Uco, Luján de Cuyo",
        detail: "Intenso colo rojo ubí con reflejos violáceos y negros. Aromas de cereza, grosellas y ciruelas maduras complementados con pimiento asado y especias dulces (pimentón y pimienta). Notables los sabores frescos de ciruela y cereza. Entrada dulce con taninos maduros, equilibrada con buena acidez, elegante, persistente en boca y largo final.",
        oenologist: "Pablo Sánchez",
        price: 19549,
        stock: 4,
        image: "/img/wines/wine_punto_final_2.jpg",
        logo: "/img/wines/logo_renacer.jpg"
    },
    {
        id: 10,
        name: "Punto Final",
        varietal: "Cabernet Franc",
        origin: "Valle de Uco, Luján de Cuyo",
        detail: "Vino de carácter frutado, resaltand la ciruela y guinda junto con las notas espaciadas que aporta el Cabernet Suavignon. Elegante, persistente en boca, algo tánico, la madera se percibe elegante y suave. Buena acidez y largo en boca.",
        oenologist: "Pablo Sánchez",
        price: 12027,
        stock: 4,
        image: "/img/wines/wine_punto_final.jpg",
        logo: "/img/wines/logo_renacer.jpg"
    },
    {
        id: 11,
        name: "Riglos",
        varietal: "Malbec",
        origin: "Valle de Uco, Mendoza",
        detail: "Aromas intensos que recuerdan a frutos rojos, flores de violetas, algunas frutas frescas ahumadas con manteca. En boca hay un ingreso potente, voluminoso, con acidez suave y dejos minerales, luego frutilla, ciruela, framubuesas en un ambiente de chocolate blanco.",
        oenologist: "Pulqui Rodríguez Villa",
        price: 16195,
        stock: 6,
        image: "/img/wines/wine_riglos.jpg",
        logo: "/img/wines/logo_riglos.jpg"
    },
    {
        id: 12,
        name: "Dedicado",
        varietal: "Malbec",
        origin: "Tupungato, Valle de Uco",
        detail: "Es un vino de color rojo rubí profudo, con aromas intensamente frutados donde la crianza en barricas de roble está bien integrada preservando la frescura y la acidez que aporta la vitivinicultura de altura. De perfil moderno y jugoso.",
        oenologist: "Luis cabral de Almeida",
        price: 16679,
        stock: 2,
        image: "/img/wines/wine_dedicado.jpg",
        logo: "/img/wines/logo_flichman.jpg"
    },
    {
        id: 13,
        name: "Riglos",
        varietal: "Cabernet Franc",
        origin: "Alto Valle de Uco, Mendoza",
        detail: "Rojo rubí brillante. Aromática compleja de perfil balsámico y especiado con buen caudal frutal de fondo. En boca es vivaz y jugoso, fluye franco, equilibrado y con buen carácter. En centro es sabroso y recuerda a bayas y frutos rojos.",
        oenologist: "Pulqui Rodríguez Villa",
        price: 14800,
        stock: 3,
        image: "/img/wines/wine_riglos.jpg",
        logo: "/img/wines/logo_riglos.jpg"
    },
    {
        id: 14,
        name: "Durigutti",
        varietal: "Malbec",
        origin: "Las Compuertas, Luján de Cuyo, Medrano",
        detail: "Un Malbec que logra una expresión típica como varietal representativo de Mendoza. Fragante, con notas de ciruelas rojas maduras que impregnan la nariz y el paladar, manteniendoun carácter fresco y jugoso, buen balance, con taninos redondos, final medio, muy amigable en boca.",
        oenologist: "Héctor y Pablo Durigutti",
        price: 18647,
        stock: 13,
        image: "/img/wines/wine_durigutti.jpg",
        logo: "/img/wines/logo_durigutti.jpg"
    },
    {
        id: 15,
        name: "Piedra Negra",
        varietal: "Chardonnay",
        origin: "Valle de Uco, Mendoza.",
        detail: "Amarillo brillante con reflejos dorados. En nariz es un blanco expresivo que recuerda a frutos blancos, flores y miel con dejos tropicales y de especias. Aborda el paladar con buen carácter varietal. Es graso y franco con sabor frutal y meloso con acidez.",
        oenologist: "Francois Lurton",
        price: 15426,
        stock: 5,
        image: "/img/wines/wine_piedra_negra.jpg",
        logo: "/img/wines/logo_piedra_negra.jpg"
    }
]

const getWines = (idVarietal) => {
    if (idVarietal) {
        return new Promise((res, rej) => {
            res(wines)

        })
    } else {
        return new Promise((res, rej) => {
            setTimeout(() => {
                res(wines)
            }, 2000);
        })
    }
}

const getWine = (idWine) => {
    return new Promise((res) => {
        setTimeout(() => {
            const product = wines.find((product) => product.id === parseInt(idWine))
            res(product)
        }, 1500);
    })
}

export { getWines, getWine }