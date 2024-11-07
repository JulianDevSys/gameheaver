/* const lst = [1.2,3.3,4.3333333,3.4544,6.5555,7.5555]
lst.map((e,i,a)=>{
    console.log(e,i,a);
    a[i] = {
        name:"user",
        age:parseInt(String(e)),
        indice:i
    }
})
console.log(lst); */
// obtener una lsita de objetos de usuarios con username, fullname y transformarlo a 
//string 

import { useState } from "react"


const lst2 = [
    {username:"julian",fullname:"julian debora melano", edad: 17, estado: "soltero"},
    {username:"david",fullname:'profe lindo',edad: 17, estado: "soltero"}
]

const l =lst2.map((e)=>{ 
    const valorObjeto= Object.values(e)
    const keyObjeto= Object.keys(e)
    let output = ''
    for(let i = 0; i < keyObjeto.length; i++){
    output += `${keyObjeto[i]} : ${valorObjeto[i]}, `
    } 
    return output
})

console.log(l); 



//tengo una lista de putas, ejem: valentina, sara, camila, luisa, se desea darle una calificacion a aleatoria a 
// esto se debe reflejar como un objeto con el nombre de puta, y la calificacion
//input = [valentina, sara, camila, luisa]
//output = [{nombre:"Valentina",puntaje:4.2},{nombre:"camila",puntaje:2.2},{nombre:"luisa",puntaje:9.2}]


const listaPutas=["valentina", "sara", "camila", "luisa"]


const putas= listaPutas.map((e)=>{ 
    return  { nombre: e, puntaje: Math.random()*5  } 
    }
)
//console.log(putas)

/* 
const numeros= [2,5,8,10]

    const cuadrado= numeros.map((e)=>{
     return e*e
})

console.log(cuadrado) */



// convertir a mayusculas

/* const palabras = ['javascript', 'react', 'node', 'css'];
const mayuscula= palabras.map((p)=>{
    return p.toUpperCase()
})
console.log(mayuscula) */


//Ejercicio 3: Extraer nombres de objetos
const personas = [
    { nombre: 'Ana', edad: 28 },
    { nombre: 'Pedro', edad: 35 },
    { nombre: 'Juan', edad: 42 }
    ];
// forma de hacerlo 
/* const NomObject= personas.map((n)=>{
    const valoresObjetos= Object.values(n)
    return valoresObjetos[0]
})*/

const nombresObjeto= personas.map((n)=>{
        let nombres= n.nombre
    return nombres

})
console.log(nombresObjeto)


//Ejercicio 4: Agregar propiedades a objetos

const productos = [
    { id: 1, nombre: 'Camiseta', precio: 20 },
    { id: 2, nombre: 'Pantalón', precio: 40 },
    { id: 3, nombre: 'Zapatos', precio: 60 }
    ];

const agregarPropiedad= productos.map((a)=>{
    const valoresObjetos= Object.values(a)
    const keysObjetos= Object.keys(a)
    let numero= Math.random()*10
    return{
        ...a,
        enStock:numero
    }
})
console.log(agregarPropiedad)