import ProjectImage from "@/public/construction.svg";

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="flex flex-col justify-center items-center mt-10 md:mt-20 gap-6 xl:max-w-[1300px] 2xl:max-w-[1400px] px-3 py-2 mx-auto"
    >
      <div className="flex flex-col gap-y-3">
        <h1 className="text-3xl sm:text-5xl font-semibold text-wrap text-center">
          Proyectos Destacados
        </h1>
        <p className="text-base md:text-lg text-gray-400 text-wrap text-center">
          Nuestros servicios y proyectos destacados
        </p>
      </div>
      <div className="px-3">
        <div className="grid grid-cols-3 gap-2 p-2 sm:p-0">
          <picture className="shadow-sm rounded-lg overflow-hidden block">
            <img
              className="h-auto max-w-full rounded-lg hover:scale-125 transition duration-500 cursor-pointer"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
              alt=""
            />
          </picture>
          <picture className="shadow-sm rounded-lg overflow-hidden block">
            <img
              className="h-auto max-w-full rounded-lg hover:scale-125 transition duration-500 cursor-pointer"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
              alt=""
            />
          </picture>
          <picture className="shadow-sm rounded-lg overflow-hidden block">
            <img
              className="h-auto max-w-full rounded-lg hover:scale-125 transition duration-500 cursor-pointer"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
              alt=""
            />
          </picture>
          <picture className="shadow-sm rounded-lg overflow-hidden block">
            <img
              className="h-auto max-w-full rounded-lg hover:scale-125 transition duration-500 cursor-pointer"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
              alt=""
            />
          </picture>
          <picture className="shadow-sm rounded-lg overflow-hidden block">
            <img
              className="h-auto max-w-full rounded-lg hover:scale-125 transition duration-500 cursor-pointer"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
              alt=""
            />
          </picture>
          <picture className="shadow-sm rounded-lg overflow-hidden block">
            <img
              className="h-auto max-w-full rounded-lg hover:scale-125 transition duration-500 cursor-pointer"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
              alt=""
            />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
