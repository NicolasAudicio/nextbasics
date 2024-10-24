import Image from "next/image"
import Roberto from "../assets/RobertoArlt.jpg"
import Link from "next/link"

export default function Bio1(){
    return(
        <div className="w-full h-full flex flex-col items-center ">
            <Image className="flex"
            src={Roberto}
            width={200}
            height={200}
            alt="Roberto Arlt"
            />
            <div className="w-6/12 h-full">
            <p className="flex">
                Roberto Emilio Godofredo Arlt (Buenos Aires, 26 de abril de 1900-Buenos Aires, 26 de julio de 1942), más conocido como Roberto Arlt, fue un novelista, cuentista, dramaturgo, periodista e inventor argentino.Considerado como uno de los escritores argentinos más importantes del siglo XX, en especial por El juguete rabioso (1926), Los siete locos (1929), Los Lanzallamas (1931), El Amor Brujo (1932) en el ámbito novelístico, junto con importantes estelas en el teatro, con obras como Trescientos millones (1932), La isla desierta (1937), y en la prensa argentina, con sus variopintas aguafuertes que se publicaban semanalmente en el diario El Mundo. Su figura se mantuvo principalmente a la sombra, o a la vanguardia literaria durante gran parte de los años 40, 50, y principios de los 60, cuando su obra experimentó un resurgimiento progresivo gracias a la tarea de críticos como Ricardo Piglia. La literatura arltiana posee matices fundamentalmente lúgubres, sus personajes suelen ser idealistas afines con el filomarxismo a veces explícitamente, como en el caso del personaje del Astrólogo, en Los siete locos y otras no tanto, como por ejemplo, los empleados de la empresa naviera en La isla desierta. Abunda en su obra la miseria humana y los paisajes sombríos y descuidados, como los que retrata permanentemente en la contrastante Buenos Aires de principios de siglo. 
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