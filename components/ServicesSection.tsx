import CardsProjects from "@/components/Cards";
import HammerIcon from "@/components/icons/HammerIcon";
import WrenchIcon from "@/components/icons/WrenchIcon";
import LightbulbIcon from "@/components/icons/LightbulbIcon";

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="mt-10 md:m-0 flex flex-col justify-center items-center gap-6 bg-slate-50 py-7 md:py-14"
    >
      <div className="w-full mb-6 max-w-[900px]">
        <h1 className="text-3xl sm:text-5xl font-semibold text-balance text-center mb-3">
          Nuestros servicios
        </h1>
        <p className="text-base 2xl:text-lg text-gray-400 w-full mx-auto lg:max-w-[800px] 2xl:w-[900px] text-balance text-center overflow-hidden">
          Conoce los servicios que ofrecemos para ti. Desde construcción, hasta
          plomería y electricidad. Nos encargamos de cada detalle, asegurando
          que tu proyecto sea un éxito.
        </p>
      </div>
      <div className="w-full flex flex-wrap justify-center gap-5 items-center xl:max-w-[1300px] 2xl:max-w-[1400px] mx-auto">
        <CardsProjects
          icon={<HammerIcon />}
          title="Construcción"
          description="Transformamos tus sueños en realidad. Ya sea construyendo una nueva casa, ampliando tu espacio existente o renovando completamente, nos dedicamos a lograrlo. Nuestro equipo altamente calificado garantiza resultados excepcionales. Nos encargamos de cada detalle, desde el diseño inicial hasta la última capa de pintura, asegurando que tu proyecto de construcción sea un éxito."
        />
        <CardsProjects
          icon={<WrenchIcon />}
          title="Plomería"
          description="Nos especializamos en servicios que van desde la instalación y reparación de tuberías hasta la resolución de problemas de fontanería. Ya sea una nueva instalación, una reparación urgente o mejorar la eficiencia, nuestro equipo brinda soluciones confiables y duraderas. Nuestros plomeros altamente capacitados garantizan que tu sistema de plomería funcione sin problemas y de manera eficiente."
        />
        <CardsProjects
          icon={<LightbulbIcon />}
          title="Electricidad"
          description="La iluminación y electricidad son esenciales. Ofrecemos servicios eléctricos desde la instalación de sistemas hasta reparaciones. Nuestros electricistas altamente capacitados aseguran que tu propiedad tenga un sistema eléctrico seguro y eficiente. Ya sea actualizar tu sistema, instalar iluminación moderna o solucionar problemas eléctricos, brindamos soluciones precisas y de calidad."
        />
      </div>
    </section>
  );
};

export default ServicesSection;
