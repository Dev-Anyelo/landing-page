interface ButtonProps {
  text: string;
  width?: string;
  icon?: JSX.Element;
  onClick?: () => void;
}

const Button = ({ text, icon, width, onClick }: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        width
          ? `${width} text-sm 2xl:text-lg flex justify-center items-center gap-2 text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg px-5 py-3 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none`
          : "text-sm 2xl:text-lg w-fit flex items-center justify-center gap-2 text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg px-5 py-3 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none"
      }
    >
      {text}
      {icon}
    </button>
  );
};

export default Button;
