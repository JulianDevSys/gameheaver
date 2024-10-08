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


/* const l =lst2.map((e)=>{ 
    const valorObjeto= Object.values(e)
    const keyObjeto= Object.keys(e)
    let output = ''
    for(let i = 0; i < keyObjeto.length; i++){
    output += `${keyObjeto[i]} : ${valorObjeto[i]}, `
    } 
    return output
})

console.log(l); */



//tengo una lista de putas, ejem: valentina, sara, camila, luisa, se desea darle una calificacion a aleatoria a 
// esto se debe reflejar como un objeto con el nombre de puta, y la calificacion
//input = [valentina, sara, camila, luisa]
//output = [{nombre:"Valentina",puntaje:4.2},{nombre:"camila",puntaje:2.2},{nombre:"luisa",puntaje:9.2}]


const listaPutas=["valentina", "sara", "camila", "luisa"]


const putas= listaPutas.map((e)=>{ 
    return  { nombre: e, puntaje: Math.random()*5  } 
    }
)
console.log(putas)

const [cartas, setCartas]= useState([])

const level1 = [
    "https://img.freepik.com/foto-gratis/retrato-abstracto-ojo-elegancia-mujeres-jovenes-generado-ai_188544-9712.jpg",
    "https://www.educaciontrespuntocero.com/wp-content/uploads/2020/04/mejores-bancos-de-imagenes-gratis.jpg", 
    "https://i.blogs.es/0ca9a6/aa/1366_2000.jpeg",
    "https://media.es.wired.com/photos/650b2a2e72d73ca3bd5ef0cc/16:9/w_2560%2Cc_limit/Business-OpenAI-Dall-E-3-heart.jpg",
    "https://i.pinimg.com/1200x/50/07/ed/5007edd4af49dc476e6dc43b5863aac5.jpg",
    "https://imgv3.fotor.com/images/share/fotor-ai-generate-a-lifelike-dragon.jpg",
    "https://img.freepik.com/foto-gratis/pico-montana-nevada-majestuosidad-galaxia-estrellada-ia-generativa_188544-9650.jpg", 
    "https://png.pngtree.com/background/20230524/original/pngtree-sad-pictures-for-desktop-hd-backgrounds-picture-image_2705986.jpg",
    "https://png.pngtree.com/thumb_back/fh260/background/20230611/pngtree-wolf-animals-images-wallpaper-for-pc-384x480-image_2916211.jpg",
    "https://e.rpp-noticias.io/xlarge/2024/08/14/251925_1626775.webp"
  ];


