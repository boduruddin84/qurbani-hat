import AnimalCard from "@/components/AnimalCard";

const AllAnimals = async () => {
  const res = await fetch("https://qurbani-hat-server-aysq.onrender.com/data");
  const animals = await res.json();

  return (
    <div className="my-10">
      <h1 className="my-10 ml-5 text-3xl font-bold">All Animals</h1>
      <div className="ml-5 md:ml-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {animals.map((animal) => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  );
};

export default AllAnimals;
