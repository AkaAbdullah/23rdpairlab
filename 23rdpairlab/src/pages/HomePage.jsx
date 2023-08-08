import Services from "./ServicesPage"

const HomePage = () => {
  return (
  <>
    <section className="radial h-full  w-full   " >
      <div className="container mx-auto max-w-6xl p-4 z-10  " >
        <div className="w-full h-full flex items-center justify-center flex-col  mt-36 " >
          <p className="text-5xl md:text-7xl font-bold underline  " >23rd Pair Lab.</p>
          <p className="text-2xl p-4 text-center " >Partner with 23rd Pair Lab today and unlock the potential of your biological data. </p>
            <p className="text-3xl font-bold  " >What we do?</p>
            <p className="text-center text-2xl font-semibold py-3" >Empowering Scientific Exploration and Impactful Research</p>
            <p className="text-center text-xl md:text-start lg:text-start" >“At 23rd Pair Lab, we specialize in harnessing the power of data to illuminate the intricate tapestry of life sciences. As a leader in bioinformatics data analysis, , we unravel the intricate code of life to uncover patterns, connections, and insights that drive scientific progress. Our mission is to empower researchers, scientists, and innovators with precise insights that pave the way for groundbreaking discoveries. With each analysis, we contribute to the advancement of knowledge and the acceleration of scientific progress.
            Join us at the forefront of exploration, where data illuminates the path to new horizons in life sciences.”</p>
        </div>
      </div>
      <Services/>
    </section>
  </>
  )
}

export default HomePage