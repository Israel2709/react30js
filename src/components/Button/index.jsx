const Button = (props) => {
  console.log(props);
  //props.variant = primary | secondary | danger | warning,

  const variantsMap = {
    primary: "bg-blue-500",
    secondary: "bg-gray-300",
    danger: "bg-red-800",
    warning: "bg-yellow-800",
  };

  variantsMap[props.variant];
  return (
    <button className={`${variantsMap[props.variant]} rounded-lg py-1 px-8`}>
      {props.label}
    </button>
  );
};

export default Button;
