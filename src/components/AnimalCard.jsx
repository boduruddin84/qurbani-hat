import { Card } from "@heroui/react"
import Image from "next/image"
import { PiCurrencyDollarBold } from "react-icons/pi"


const AnimalCard = ({ topAnimal }) => {
  return (
    <Card className="shadow-xl">
      <div>
        <Image 
        src={topAnimal.image}
        alt={topAnimal.name}
        height={200}
        width={200} 
        />
      </div>
      <h3 className="text-xl font-semibold ">{topAnimal.name}</h3>
      <div className="flex justify-between">
        <p>{topAnimal.type}</p>
        <p className="flex justify-center items-center gap-1"><PiCurrencyDollarBold />{topAnimal.price}</p>
      </div>
    </Card>
  )
}

export default AnimalCard