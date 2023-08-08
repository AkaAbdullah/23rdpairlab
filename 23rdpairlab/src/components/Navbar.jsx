import logo from "../assets/logo2.png";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const links = [
  {
    id: 1,
    link: "Home",
    path: "/",
  },
  {
    id: 2,
    link: "Services",
    path: "/services",
  },
  {
    id: 3,
    link: "Contact Us",
    path: "/contact",
  },
  {
    id: 4,
    link: "About Us",
    path: "/about",
  },
];

const Navbar = () => {
  const [navicon, setNavicon] = useState(false);
  const handleIcon = () => {
    setNavicon(!navicon);
  };

  return (
    <>
      <section className="bg-gradient-to-br fixed from-teal-400 to-blue-500 w-full h-[90px] flex items-center text-white  ">
        <div className="container max-w-6xl  mx-auto p-4 flex justify-between items-center ">
          <div className="flex  items-center gap-2">
            <img src={logo} width={40} height={40} />
            <p className="text-xl font-bold md:text-2xl  ">
              23<sup>rd </sup>Pair Lab{" "}
            </p>
          </div>
          <div className="md:flex gap-7 hidden ">
            {links.map(({ id, link, path }) => (
              <Link
                key={id}
                to={path}
                className="text-xl font-semibold hover:scale-105 duration-100 "
              >
                {link}
              </Link>
            ))}
          </div>
          <div onClick={handleIcon} className="md:hidden lg:hidden">
            {navicon ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
        </div>
      </section>
      <div
        className={`${
          navicon ? "" : "hidden"
        }  absolute   bg-gradient-to-br from-teal-400 to-blue-600 md:hidden lg:hidden w-4/5 drop-shadow-lg h-full`}
      >
        <div className="flex flex-col items-center justify-center h-full text-white gap-10 ">
          {links.map(({ id, link, path }) => (
            <Link
              onClick={() => setNavicon(!navicon)}
              key={id}
              to={path}
              className="text-3xl font-semibold hover:scale-105 duration-100"
            >
              {link}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
