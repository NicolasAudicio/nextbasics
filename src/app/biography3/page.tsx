import Image from "next/image"
import Borges from "../assets/Borges.jpg"
import Link from "next/link"


export default function Bio3(){
    return(
        <div className="w-full h-full flex flex-col items-center ">
            <Image className="flex"
            src={Borges}
            width={200}
            height={200}
            alt="Jorge Luis Borges"
            />
            <div className="w-6/12 h-full">
            <p>
            Jorge Francisco Isidoro Luis Borges (Buenos Aires, 24 de agosto de 1899-Ginebra, 14 de junio de 1986) fue un escritor, poeta, ensayista y traductor argentino, extensamente considerado una figura clave tanto para la literatura en español como para la literatura universal.Sus dos libros más conocidos, Ficciones y El Aleph, publicados en la década de 1940, son recopilaciones de cuentos conectados por temas comunes como los sueños, los laberintos, las bibliotecas, los espejos, los autores ficticios y las mitologías europeas; sus argumentos exploran ideas filosóficas relacionadas, por ejemplo, con la memoria, la eternidad, la posmodernidad y la metaficción.La obra de Borges ha contribuido ampliamente a la literatura filosófica, al género fantástico y al posestructuralismo, e influyó profundamente en el realismo mágico de la literatura latinoamericana durante el siglo XX.
            </p>
            </div>
            <Link href="/">
            <button className='text-lg bg-gray-600 hover:bg-green-400 rounded p-2'>
        Volver
      </button>
      </Link>

      <Link href="/biography3/friend">
            <button className='text-lg bg-gray-600 hover:bg-green-400 rounded p-2'>
        Amigo
      </button>
      </Link>
        </div>
    )
}