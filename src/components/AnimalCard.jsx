import { Card } from "@heroui/react"
import Image from "next/image"
import { MdLocationPin } from "react-icons/md"
import { PiCurrencyDollarBold } from "react-icons/pi"


const AnimalCard = ({ topAnimal }) => {
  return (
    <Card className="w-96 shadow-xl border rounded-xl">
      <div className="relative w-full aspect-square">
        <Image 
        src={topAnimal.image}
        alt={topAnimal.name}
        fill 
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover rounded-xl"
        />
      </div>
      <h3 className="text-xl font-semibold ">{topAnimal.name}</h3>
      <div className="flex justify-between">
        <p className="font-semibold text-[#121212bc]" >{topAnimal.type}</p>
        <p className="flex justify-center items-center gap-1 font-medium text-[#121212e1]"><PiCurrencyDollarBold />{topAnimal.price}</p>
      </div>
      <div className="flex justify-between">
        <p className="font-semibold text-[#121212bc]">{topAnimal.category}</p>
        <p className="flex justify-center items-center gap-1 font-medium text-[#121212e1]"><MdLocationPin />{topAnimal.location}</p>
      </div>
    </Card>
  )
}

export default AnimalCard