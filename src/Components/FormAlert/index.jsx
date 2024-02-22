export const FormAlert = ({ fieldName }) => {
  return (
    <div className="py-2 px-4 mt-2 border-rose-500 bg-rose-300 text-black rounded-lg">
      El campo {fieldName} es obligatorio
    </div>
  );
};
