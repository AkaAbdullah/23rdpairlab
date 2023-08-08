import ServicesCard from "../components/ServicesCard"


const data= [
  {
    id:"1",
    title:"Bioinformatics Data Analysis"
  }
]

const Services = () => {
  return (
    <section className=" w-full  h-full z-10  " >
    <div className="container mx-auto px-4 max-w-6xl flex  justify-center ">
        <div className="mt-10" >
            <p className="text-5xl font-semibold md:text-6xl underline ">Our Services</p>
        </div>
    </div>
    <div className="container mx-auto px-4 max-w-6xl mt-10   " >
    <div className="flex flex-wrap gap-12 justify-center md:justify-between items-center  " >
        <ServicesCard data={data} />
        <ServicesCard/>
        <ServicesCard/>
        <ServicesCard/>
        <ServicesCard/>
        <ServicesCard/>
    </div>
    </div>
  </section>
  )
}

export default Services