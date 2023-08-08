const ServicesCard = (props) => {
  const { title, id, child } = props;
  return (
    <div className="bg-gradient-to-br from-teal-400 to-blue-500 h-[300px] w-[350px] hover:scale-105  duration-200 drop-shadow-lg rounded-lg">
      <div className="text-7xl text-end ">
        <p className="opacity-10 font-extrabold px-2 ">{id}</p>
      </div>
      <div className=" p-5 h-full text-start text-white ">
        <>{child}</>
        <p className="text-3xl font-bold">{title}</p>
      </div>
    </div>
  );
};

export default ServicesCard;
