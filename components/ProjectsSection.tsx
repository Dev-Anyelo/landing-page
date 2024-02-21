import ProjectImage from "@/public/construction.svg";

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="flex flex-col justify-center items-center mt-10 md:mt-20 gap-6"
    >
      <div className="flex flex-col gap-y-3">
        <h1 className="text-3xl sm:text-5xl font-semibold text-wrap text-center">
          Proyectos Destacados
        </h1>
        <p className="text-base md:text-lg text-gray-400 text-wrap text-center">
          Nuestros servicios y proyectos destacados.
        </p>
      </div>
      <div className="px-3">
        <div className="grid grid-cols-2 gap-2 p-2 sm:p-0">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
