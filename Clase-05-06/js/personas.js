let dataPersonas=[
    {id:1,nombre:"Oscar",edad:20},
    {id:2,nombre:"Pedro",edad:30},
    {id:3,nombre:"Juan",edad:15}
]
let dataPersonasJSON=[

    {
        "id":1,
        "nombre":"Oscar",
        "edad":20,
        "deportes":[
            {
                "deporte":"tennis",
                "dias":["lunes","Miercoles"],
                "tiempo":60
            },
            {
                "deporte":"futbol",
                "dias":["Martes","Jueves","Sabado"],
                "tiempo":90
            }
        ]

    },
    {
        "id":1,
        "nombre":"Carlos",
        "edad":20,
        "fecha":'15-20-2024',
        "deportes":[
            {
                "deporte":"tennis",
                "dias":["lunes","Miercoles"],
                "tiempo":60
            },
            {
                "deporte":"futbol",
                "dias":["Martes","Jueves","Sabado"],
                "tiempo":90
            }
        ]

    }
]


let dataPlatos=[
  {  
    "nombrePlato":"Arroz con Pollo",
    "precio":15000,
    "chef":"Oscar",
    "ingredientes":[
        {"nombre":"Arroz","cantidad":400,"precio":2000},
        {"nombre":"Pollo","cantidad":300,"precio":18000}
    ],
    "acompanantes":[{
        "bebidas":[{"frias":[],"calientes":[]} ],
        "otros":[ ],

    }

    ]
  }
]

console.log(dataPlatos);