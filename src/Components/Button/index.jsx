import classNames from "classnames";

export const Button = ({
  handler = () => {
    console.log("default");
  },
  variant = "default",
  className,
  children,
  reversed,
}) => {
  const buttonClassNames = classNames(
    "text-white border rounded-lg py-2 px-4 flex justify-center gap-4 items-center",
    {
      "bg-gray-300 border-gray-400 disabled:bg-gray-30": variant === "default",
      "bg-cyan-600 border-cyan-700 disabled:bg-cyan-30": variant === "primary",
      "bg-neutral-500 border-neutral-600 disabled:bg-neutral-30":
        variant === "secondary",
      "bg-green-600 border-green-700 disabled:bg-green-30":
        variant === "success",
      "flex-row-reverse": reversed,
    },
    className
  );

  return (
    <button onClick={handler} className={buttonClassNames}>
      {children}
    </button>
  );
};
