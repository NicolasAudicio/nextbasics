import Link from "next/link"
import Image from "next/image"
import Seleccion from "../app/assets/Seleccion.jpeg"

export default function Home(){
  return(
    <div className="w-full flex h-lvh max-h-svh">
      <div className="grid h-full bg-green-600 font-semibold place-content-center">
      <h1 className="text-center font-bold m-4">
          Lista 
          De 
          Escritores:
          </h1>
      <Link className="hover:bg-black rounded text-center" href="/biography1">Roberto Arlt</Link>
      <Link className="hover:bg-black rounded text-center" href="/biography2">Mario Vargas Llosa</Link>
      <Link className="hover:bg-black rounded text-center" href="/biography3">Jorge Luis Borges</Link>     
    </div>
    <div className="flex justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <p className="text-start mx-4">Selección de escritores de diferentes nacionalidades pero que influyeron a nivel latinoamericano, se irán agregando sus biografias.</p>
            <Image className="flex items-center mt-2"
            src={Seleccion}
            width={400}
            height={400}
            alt="Varios escritores"/>
        </div>
      
    </div>
    </div>
    
  )
}