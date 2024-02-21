"use client";

import Image from "next/image";
import Button from "@/components/Button";
import HeroImage from "@/public/construction.svg";
import RowIcon from "@/components/icons/RowIcon";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="mt-16 md:mt-20 lg:mt-0 flex flex-col gap-4 w-full xl:max-w-[1300px] 2xl:max-w-[1400px] px-3 py-2 mx-auto"
    >
      <div className="flex justify-between items-center h-fit">
        <div className="flex flex-col gap-y-5 w-full lg:w-1/2">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-wrap w-full text-center lg:text-left">
            Multiservicios{" "}
            <span className="text-blue-500 inline w-fit">Junier</span>
          </h1>
          <p className="text-base 2xl:text-lg text-gray-400 w-full lg:max-w-[610px] xl:max-w-[660px] text-wrap text-center lg:text-left overflow-hidden">
            Como profesional multifacético en construcción, plomería y
            electricidad, mi enfoque se centra en convertir visiones en
            realidad. Lidero proyectos integrales, desde la construcción y
            renovación de espacios hasta la resolución de problemas específicos
            en fontanería y la instalación de sistemas eléctricos eficientes.
            <br /> <br />
            Con un equipo altamente capacitado, nos comprometemos a ofrecer
            resultados excepcionales en cada proyecto, fusionando habilidades
            técnicas con una estética cuidadosa para cumplir con las
            expectativas de nuestros clientes.
          </p>
          <div className="mt-3 md:mt-5 w-full flex justify-center items-center">
            <Link
              href="/#contact"
              className="w-full flex justify-center items-center lg:justify-start"
            >
              <Button text="Más información" icon={<RowIcon />} />
            </Link>
          </div>
        </div>
        <Image
          alt="Hero"
          src={HeroImage}
          className="hidden lg:block lg:w-[530px] lg:h-[600px]"
        />
      </div>
    </section>
  );
};

export default HeroSection;
