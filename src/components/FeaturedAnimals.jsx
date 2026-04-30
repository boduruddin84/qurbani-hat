import AnimalCard from "./AnimalCard";


const FeaturedAnimals = async () => {

    const res = await fetch("https://qurbani-hat-delta.vercel.app/data.json");
    const animals = await res.json();
    
    const topAnimals = animals.slice(0, 4);

    console.log(topAnimals);
    
    

  return (
    <div>
        <h1>Top Animals</h1>
        <div>
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