import { useState } from "react";
import { saveUser } from "../../api/userApi";

export const UserForm = ({ saveHandler }) => {
  const [fullname, setFullname] = useState("Israel Salinas Martínez");
  const [abstract, setAbstract] = useState("Front-end Developer");
  const [picture, setPicture] = useState(
    "https://scontent.fmex36-1.fna.fbcdn.net/v/t39.30808-6/422316559_10162128550877994_1355457506344239244_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeHn4Y8hG55T8GlWZDnzVIgZfzOkSx5rdLZ_M6RLHmt0tl1zAYf071Jv3KAEXXKjOmA&_nc_ohc=VzKseijcxYoAX8asokC&_nc_ht=scontent.fmex36-1.fna&oh=00_AfBChHGgHhLMgop0IvJlwviCIRwp2BkDZOMiGYpJkkhd0g&oe=65DAB2F3"
  );
  const fullnameHandler = (event) => {
    setFullname(event.target.value);
  };

  const abstractHandler = (event) => {
    setAbstract(event.target.value);
  };

  const pictureHandler = (event) => {
    setPicture(event.target.value);
  };

  const saveUserHandler = async (event) => {
    event.preventDefault();
    const userObject = { fullname, picture, abstract };
    const response = await saveUser(userObject);
    saveHandler();
  };
  return (
    <form
      action=""
      className="border border-blue-500 p-4 rounded-lg flex flex-col gap-4 bg-dark"
    >
      <div className="flex flex-col">
        <label htmlFor="">Nombre</label>
        <input
          value={fullname}
          type="text"
          className="bg-white border border-gray-500 rounded-lg py-2 px-4"
          onChange={fullnameHandler}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="">Abstract</label>
        <input
          value={abstract}
          type="text"
          className="bg-white border border-gray-500 rounded-lg py-2 px-4"
          onChange={abstractHandler}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="">Foto</label>
        <input
          value={picture}
          type="text"
          className="bg-white border border-gray-500 rounded-lg py-2 px-4"
          onChange={pictureHandler}
        />
      </div>
      <button
        onClick={saveUserHandler}
        className="bg-green-600 text-white border border-green-600 rounded-lg py-2 px-4"
      >
        Guardar Usuario
      </button>
    </form>
  );
};
