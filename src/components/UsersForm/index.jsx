import { useState } from "react";
const UsersForm = (props) => {
  const { saveHandler } = props;
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const nameInputHandler = (event) => {
    const value = event.target.value;
    setName(value);
  };

  const ageInputHandler = (event) => {
    const value = event.target.value;
    setAge(value);
  };

  const saveUserHandler = (event) => {
    event.preventDefault();
    const userObject = { name, age };
    saveHandler(userObject);
  };

  return (
    <form
      action=""
      className="border border-gray-800 rounded-lg p-4 flex flex-col gap-4"
    >
      <label htmlFor="">Nombre:</label>
      <input
        onChange={nameInputHandler}
        type="text"
        className="border border-gray-800 rounded-lg"
      />
      <label htmlFor="">Edad:</label>
      <input
        onChange={ageInputHandler}
        type="text"
        className="border border-gray-800 rounded-lg"
      />
      <button
        onClick={saveUserHandler}
        className="bg-blue-800 text-white px-2 py-4"
      >
        Guardar
      </button>
    </form>
  );
};

export default UsersForm;
