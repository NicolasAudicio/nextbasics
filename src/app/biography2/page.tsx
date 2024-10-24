import Image from "next/image"
import Llosa from "../assets/Llosa.jpg"
import Link from "next/link"


export default function Bio2(){
    return(
        <div className="w-full h-full flex flex-col items-center ">
            <Image className="h-auto"
            src={Llosa}
            width={200}
            height={200}
            alt="Mario Vargas Llosa"
            />
            <div className="w-6/12 h-full">
            <p className="text-lg sm:text-sm">
            Jorge Mario Pedro Vargas Llosa (Arequipa, 28 de marzo de 1936), conocido como Mario Vargas Llosa, es un escritor peruano que cuenta también con la nacionalidad española desde 1993 y la nacionalidad dominicana desde junio de 2023.Considerado como uno de los más importantes novelistas y ensayistas contemporáneos, sus obras han obtenido numerosos premios, entre los que destacan el Premio Nobel de Literatura 2010, el Premio Cervantes 1994 —considerado como el más importante en la lengua española—, el Premio Príncipe de Asturias de las Letras 1986, el Premio Biblioteca Breve 1962, el Premio Rómulo Gallegos 1967 y el Premio Planeta 1993, entre otros. Junto a Gabriel García Márquez, Julio Cortázar y Carlos Fuentes, es uno de los exponentes centrales del boom latinoamericano.
            </p>
            </div>
            <Link href="/">
            <button className='text-lg bg-gray-600 hover:bg-green-400 rounded p-2'>
        Volver
      </button>
      </Link>
        </div>
    )
}