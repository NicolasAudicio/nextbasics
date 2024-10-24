import Image from "next/image"
import Sabato from "../../assets/Sabato.jpg"
import Link from "next/link"


export default function Friend(){
    return(
        <div className="w-full h-full flex flex-col items-center ">
            <Image className="flex"
            src={Sabato}
            width={200}
            height={200}
            alt="Ernesto Sabato"
            />
            <div className="w-6/12 h-full">
            <p>
            Ernesto Sabato (Rojas, 24 de junio de 1911-Santos Lugares, 30 de abril de 2011)fue un escritor, pintor y físico argentino. Su obra narrativa consiste en tres novelas: El túnel, Sobre héroes y tumbas y Abaddón el exterminador. También se destacó como ensayista en libros como Uno y el Universo, Hombres y engranajes, El escritor y sus fantasmas y Apologías y rechazos, en los que reflexiona sobre la condición humana, la vocación de la escritura o los problemas culturales del siglo XX. Fue el segundo argentino galardonado con el Premio Miguel de Cervantes (1984) luego de Jorge Luis Borges (1979).</p>
            </div>
            <Link href="/">
            <button className='text-lg bg-gray-600 hover:bg-green-400 rounded p-2'>
        Volver
      </button>
      </Link>
        </div>
    )
}