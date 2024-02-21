import Image from "next/image";
import Form from "@/components/Form";
import ContactImage from "@/public/contact.svg";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="flex flex-col justify-center items-center w-full py-7 md:py-14"
    >
      <div className="flex flex-col gap-y-3">
        <h1 className="text-3xl sm:text-5xl font-semibold text-balance text-center">
          Contáctame
        </h1>
        <p className="text-base sm:text-lg text-gray-400 text-balance text-center">
          ¿Tienes alguna duda o pregunta? ¡No dudes en contactarme!
        </p>
      </div>

      <div className="flex justify-center md:justify-between items-center p-4 md:p-2 md:gap-x-10 lg:gap-x- xl:gap-x-40 mt-8 md:mt-0">
        <Form />
        <Image
          src={ContactImage}
          alt="Contact us"
          className="rounded-lg hidden md:block md:w-[320px] md:h-[320px] lg:w-[500px] lg:h-[500px]"
        />
      </div>
    </section>
  );
};

export default ContactSection;
