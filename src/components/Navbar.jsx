import { useState } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "blogs",
    title: "Blogs",
  },
  {
    id: "certificates",
    title: "Certificates",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const Navbar = ({ scrolled }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`fixed w-full flex items-center py-5 top-0 z-20 ${
        scrolled ? "bg-primary shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto px-6">
        <Link to="home" smooth={true} duration={500}>
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-white text-[24px] font-bold cursor-pointer flex"
          >
            <span className="blue-text-gradient">SA</span>
          </motion.h1>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className="nav-link"
            >
              <Link
                to={nav.id}
                smooth={true}
                duration={500}
                spy={true}
                activeClass="active-nav-link"
              >
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <div
            className="w-[28px] h-[28px] cursor-pointer z-20"
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? <FaTimes className="text-white text-[28px]" /> : <FaBars className="text-white text-[28px]" />}
          </div>

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className="font-poppins font-medium cursor-pointer text-[16px] text-white"
                  onClick={() => setToggle(!toggle)}
                >
                  <Link
                    to={nav.id}
                    smooth={true}
                    duration={500}
                    spy={true}
                    activeClass="text-blue-100"
                  >
                    {nav.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;