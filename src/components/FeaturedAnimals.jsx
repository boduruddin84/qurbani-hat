
const FeaturedAnimals = async () => {

    const res = await fetch("https://qurbani-hat-delta.vercel.app/data.json");
    const animals = await res.json();
    console.log(animals);
    

  return (
    <div>FeaturedAnimals</div>
  )
}

export default FeaturedAnimals