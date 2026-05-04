import Image from "next/image";
import { MdLocationPin } from "react-icons/md";
import { PiCurrencyDollarBold } from "react-icons/pi";

const AnimalDetails = ({ animal }) => {
  return (
    <div className="space-y-3 mb-20 w-80 md:w-96 mx-auto">
      <div className="relative w-full aspect-square">
        <Image
          src={animal.image}
          alt={animal.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover rounded-xl"
        />
      </div>
      <h3 className="text-2xl font-semibold my-5">{animal.name}</h3>
      <div className="flex justify-between">
        <p className="font-semibold text-[#121212bc]">Weight: {animal.weight} kg</p>
        <p className="flex justify-center items-center gap-1 font-medium text-[#121212e1]">Age: {animal.age} years</p>
      </div>
      <div className="flex justify-between">
        <p className="font-semibold text-[#121212bc]">{animal.type}</p>
        <p className="flex justify-center items-center gap-1 font-medium text-[#121212e1]">
          <PiCurrencyDollarBold />
          {animal.price}
        </p>
      </div>
      <div className="flex justify-between">
        <p className="font-semibold text-[#121212bc]">{animal.category}</p>
        <p className="flex justify-center items-center gap-1 font-medium text-[#121212e1]">
          <MdLocationPin />
          {animal.location}
        </p>
      </div>
      <p className="font-semibold text-[#121212bc]">{animal.description}</p>
    </div>
  );
};

export default AnimalDetails;
