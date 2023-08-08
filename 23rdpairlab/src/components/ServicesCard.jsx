

const ServicesCard = ({props}) => {
    const data = props
    console.log(data)
  return (
   <div className="bg-gradient-to-br from-teal-400 to-blue-500 h-[250px] w-[250px]  drop-shadow-lg rounded-lg" >
    <div className="text-7xl text-end " >
        <p className="opacity-10 font-extrabold p-4 " >01</p>
    </div>
   <div className=" p-5 h-full text-start" >
        <p className="text-3xl font-bold" >{data}</p>
   </div>
   </div>
  )
}

export default ServicesCard