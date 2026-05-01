import AnimalDetails from "@/components/AnimalDetails";


const AnimalDetailsPage = async ({ params }) => {

    const {id} = await params;
    const res = await fetch("https://qurbani-hat-delta.vercel.app/data.json");
    const animals = await res.json();
    const animal = animals.find(a => a.id == id)
    

  return (
    <div>
        <h1 className="my-10 ml-5 text-3xl font-bold">Animals Details</h1>
        <AnimalDetails animal={animal} />
    </div>
  )
}

export default AnimalDetailsPage