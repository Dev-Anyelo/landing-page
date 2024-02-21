"use client";

interface CardsProps {
  title: string;
  description: string;
  icon?: JSX.Element;
}

const CardsProjects = ({ title, description, icon }: CardsProps) => {
  return (
    <div className="w-[400px] hover:-translate-y-3 transform transition duration-700 ease-in-out max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-2 text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-balance flex items-center gap-x-2">
        {icon}
        {title}
      </h5>
      <p className="mb-4 sm:mb-8 text-sm sm:text-base text-gray-700 dark:text-gray-400 text-wrap">
        {description}
      </p>
    </div>
  );
};

export default CardsProjects;
