import AnimalCard from "./AnimalCard";


const FeaturedAnimals = async () => {

    const res = await fetch("https://qurbani-hat-delta.vercel.app/data.json");
    const animals = await res.json();
    
    const topAnimals = animals.slice(0, 4);
    
    

  return (
    <div className="my-10">
        <h1 className="my-10 ml-5 text-3xl font-bold">Top Animals</h1>
        <div className="ml-5 md:ml-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
            topAnimals.map(
                topAnimal => <AnimalCard key={topAnimal.id} topAnimal={topAnimal} />
            )
        }
        </div>
    </div>
  )
}

export default FeaturedAnimals