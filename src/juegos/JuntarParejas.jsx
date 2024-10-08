import { useState, useEffect,useRef } from "react";
import shuffle from "lodash.shuffle"; // libreria para hacerlo de forma aleatoria
import "./StyleJuntarParejas.css";

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


const level2 = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwNQuEjXJk78xNdAXVtV4vEuSqIc78KM82xA&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ_2oII-AssPFNOvcLQ6ecJ6ZWQlUbKU3j8w&s", 
  "https://img.freepik.com/foto-gratis/arco-iris-fotorrealista-paisaje-natural-campo_23-2151597635.jpg",
  "https://st5.depositphotos.com/64145070/64693/i/450/depositphotos_646930840-stock-photo-sunset-ocean-beach-beautiful-seascape.jpg",
  "https://plus.unsplash.com/premium_photo-1669867124806-f84dd1a9e87c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG5hdHVyYWxlemElMjBwYWlzYWplfGVufDB8fDB8fHww",
  "https://articles-img.sftcdn.net/t_articles/auto-mapping-folder/sites/2/2023/01/cinco-lagos.jpg",
  "https://crehana-blog.imgix.net/media/filer_public/17/03/1703ae8a-a2df-40f9-ad4d-cb4ee124381e/mejores_paisajes.jpg?auto=format&q=50", 
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5NmXfW2CYU7nQybs7t0abbhsjf7bYJlnV3A&s",
  "https://www.shutterstock.com/image-photo/mountain-trail-calm-lake-amazing-260nw-2382938023.jpg",
  "https://i.pinimg.com/564x/ae/82/96/ae82960888a27e4ed8c595590f881c6c.jpg",
  "https://www.shutterstock.com/image-photo/beautiful-landscape-sunrise-photo-taken-260nw-1686737464.jpg",
  "https://img.freepik.com/fotos-premium/paisaje-forestal-otono-pequeno-rio-suelo-calle-dia-soleado-imagen-generada-ia_548729-6955.jpg",
  "https://img.freepik.com/foto-gratis/paisaje-otono-carretera-forestal_23-2151843648.jpg",
  "https://i.pinimg.com/236x/06/24/0b/06240ba3eb20b18f45624bcffdaec5f3.jpg",
  "https://i.pinimg.com/236x/72/01/bf/7201bfa0fbc68f5c27f321fc096756f9.jpg"
];

export default function JuntarParejas() {
  const [cartas, setCartas] = useState([]);
  const [visible,setVisible] = useState([])
  const [selected,setSelected] =useState([])
  const [intentos,setIntentos] = useState(0)
  const isSelected = useRef(false)

  useEffect(() => {
    reiniciar()
  }, []);


  const reiniciar = ()=>{
    setVisible([])
    setCartas(shuffle([...level1,...level1]))
    setSelected([])
    setIntentos(0)
  }

  const selectCart =(i)=>{
    if(isSelected.current){
      return
    }
    const x = [...selected,i]
    setSelected(x)
    if(x.length==2){
      isSelected.current = true
      if(x[0]!=x[1] && cartas[x[0]] === cartas[x[1]]){      
        setVisible([...visible,x[0],x[1]])
        isSelected.current = false
      }
        setIntentos(intentos+1)  
        setTimeout(()=>{
          setSelected([])
          isSelected.current = false
        },1000)
       
    } 
  }

  return (
    <div className="first_container">
      {/* Header */}
      <div className="header_couples">
        <h2 className="title_couples play">ENCUENTRA LA PAREJA</h2>
        <h2 className="count play">Número de intentos: {intentos}</h2>
        <div className="btn_reiniciar" onClick={reiniciar} >
          Reiniciar el 
        </div>
      </div>
      <div className="find_pairs">
{/*           {
            cartas.map((c,i)=>{

                if(selected.includes(i) || visible.includes(i)){
                  return <div className="cartas" key={i}  onClick={(e)=>{
                    selectCart(i)
                  }}><img src={c} alt="" /></div>
                }

              return <div className="cartas visible" key={i}  onClick={(e)=>{
                selectCart(i)
              }}><img src={c} alt="" /></div>
            })
          } */}

{
  cartas.map((c, i) => {
    const isFlipped = selected.includes(i) || visible.includes(i); // Si la carta está seleccionada o visible

    return (
      <div
        className={`cartas ${isFlipped ? "rotada" : ""}`} // Aplica la clase rotada si la carta debe mostrarse
        key={i}
        onClick={() => selectCart(i)} // Al hacer clic, selecciona la carta
      >
        {/* Parte trasera */}
        <div className="back_card"></div>

        {/* Parte frontal (imagen) */}
        {isFlipped && <img src={c} alt="" />} {/* Muestra la imagen solo si la carta está volteada */}
      </div>
    );
  })
}


      </div>
    </div>
  );
}
