import Feature from "@/components/Feature";

const FeatureSection = () => {
  return (
    <section
      id="contact"
      className="flex flex-col justify-center items-center w-full py-7 md:py-14 bg-slate-50 mt-10 md:mt-20"
    >
      <div className="flex flex-col gap-y-3">
        <h1 className="text-5xl font-semibold text-balance text-center">
          Features
        </h1>
        <p className="text-base md:text-lg text-gray-400 text-balance text-center">
          ¿Tienes alguna duda o pregunta? ¡No dudes en contactarnos!
        </p>
      </div>
      <Feature />
    </section>
  );
};

export default FeatureSection;
