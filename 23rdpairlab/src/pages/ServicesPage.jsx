import ServicesCard from "../components/ServicesCard";
import { FaBiohazard } from "react-icons/fa";
import { BsSearch, BsDatabaseCheck } from "react-icons/bs";
import { TbWriting, TbReportAnalytics } from "react-icons/tb";
import { MdModelTraining } from "react-icons/md";

const data = [
  {
    id: "1",
    title: "Bioinformatics Data Analysis",
    child: (
      <>
        <FaBiohazard size={50} />
      </>
    ),
  },
  {
    id: "2",
    title: "Complete Research Project Services",
    child: (
      <>
        <BsSearch size={50} />
      </>
    ),
  },
  {
    id: "3",
    title: "Complete Writing / Editing Services",
    child: (
      <>
        <TbWriting size={50} />
      </>
    ),
  },
  {
    id: "4",
    title: "Complete Training Services",
    child: (
      <>
        <MdModelTraining size={50} />
      </>
    ),
  },
  {
    id: "5",
    title: "Data Analysis and Interpretation",
    child: (
      <>
        <BsDatabaseCheck size={50} />
      </>
    ),
  },
  {
    id: "6",
    title: "Complete Report Writing Services",
    child: (
      <>
        <TbReportAnalytics size={50} />
      </>
    ),
  },
];

const Services = () => {
  return (
    <section className=" radial w-full  h-full z-10  ">
      <div className="container mx-auto px-4 max-w-6xl flex  justify-center ">
        <div className="mt-10">
          <p className="text-5xl font-semibold md:text-6xl underline ">
            Our Services
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 max-w-6xl mt-10   ">
        <div className="flex flex-wrap gap-7 cursor-pointer shadow-lg justify-center md:justify-between items-center  ">
          {data.map(({ id, title, child }) => (
            <ServicesCard key={id} title={title} id={id} child={child} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
