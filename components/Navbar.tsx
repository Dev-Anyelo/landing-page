"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import AboutIcon from "@/components/icons/About";
import HomeIcon from "@/components/icons/HomeIcon";
import ContactIcon from "@/components/icons/Contact";
import PencilRuler from "@/components/icons/PencilRuler";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <header className="w-full fixed z-10">
      <nav className="w-full md:max-w-[500px] mx-auto flex justify-center items-center bg-slate-50 border border-gray-200 p-3 rounded-full shadow-md">
        <ul className="w-full flex justify-center items-center">
          <li
            className={`${
              pathname === "/#home" ? "bg-gray-blue-100" : ""
            } text-blue-500 font-semibold hover:bg-blue-100  p-2 md:p-3 rounded-full transition duration-500`}
          >
            <Link
              href="#home"
              className="text-xs md:text-base flex gap-1 justify-center items-center"
            >
              <HomeIcon /> Home
            </Link>
          </li>
          <li
            className={`${
              pathname === "/#services" ? "bg-blue-100" : ""
            } text-blue-500 font-semibold hover:bg-blue-100  p-2 md:p-3 rounded-full transition duration-500`}
          >
            <Link
              href="#services"
              className="text-xs md:text-base flex gap-1 justify-center items-center"
            >
              <PencilRuler /> Servicios
            </Link>
          </li>
          <li
            className={`${
              pathname === "/#projects" ? "bg-blue-100" : ""
            } text-blue-500 font-semibold hover:bg-blue-100  p-2 md:p-3 rounded-full transition duration-500`}
          >
            <Link
              href="#projects"
              className="text-xs md:text-base flex gap-1 justify-center items-center"
            >
              <AboutIcon /> Proyectos
            </Link>
          </li>
          <li
            className={`${
              pathname === "/#contact" ? "bg-blue-100" : ""
            } text-blue-500 font-semibold hover:bg-blue-100 p-2 md:p-3 rounded-full transition duration-500`}
          >
            <Link
              href="#contact"
              className="text-xs flex gap-1 justify-center items-center"
            >
              <ContactIcon /> Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
