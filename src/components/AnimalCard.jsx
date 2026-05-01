import { Button, Card } from "@heroui/react"
import Image from "next/image"
import Link from "next/link"
import { MdLocationPin } from "react-icons/md"
import { PiCurrencyDollarBold } from "react-icons/pi"


const AnimalCard = ({ animal }) => {
  return (
    <Card className="w-96 shadow-xl border rounded-xl">
      <div className="relative w-full aspect-square">
        <Image 
        src={animal.image}
        alt={animal.name}
        fill 
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover rounded-xl"
        />
      </div>
      <h3 className="text-xl font-semibold ">{animal.name}</h3>
      <div className="flex justify-between">
        <p className="font-semibold text-[#121212bc]" >{animal.type}</p>
        <p className="flex justify-center items-center gap-1 font-medium text-[#121212e1]"><PiCurrencyDollarBold />{animal.price}</p>
      </div>
      <div className="flex justify-between">
        <p className="font-semibold text-[#121212bc]">{animal.category}</p>
        <p className="flex justify-center items-center gap-1 font-medium text-[#121212e1]"><MdLocationPin />{animal.location}</p>
      </div>
      <Link href="/animals"><Button variant="outline" className={'w-full font-semibold'} >View Details</Button></Link>
    </Card>
  )
}

export default AnimalCard