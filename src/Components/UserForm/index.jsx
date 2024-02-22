import { useState } from "react";
import { saveUser } from "../../api/userApi";
import { FormAlert } from "../FormAlert";
import { useForm } from "react-hook-form";
import { Button } from "../Button";
import { CiSaveUp2 } from "react-icons/ci";

export const UserForm = ({ saveHandler }) => {
  //   const saveUserHandler = async (event) => {
  //     event.preventDefault();
  //     const userObject = { fullname, picture, abstract };
  //     const response = await saveUser(userObject);

  //
  //   };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const reponse = await saveUser(data);
    saveHandler();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      action=""
      className="border border-blue-500 p-4 rounded-lg flex flex-col gap-4 bg-dark flex-1"
    >
      <div className="flex flex-col">
        <label htmlFor="">Nombre</label>
        <input
          type="text"
          className="bg-white border border-gray-500 rounded-lg py-2 px-4"
          defaultValue=""
          {...register("fullname", { required: true })}
        />
        {errors.fullname?.type === "required" && (
          <FormAlert fieldName="Nombre" />
        )}
      </div>
      <div className="flex flex-col">
        <label htmlFor="">Abstract</label>
        <input
          type="text"
          className="bg-white border border-gray-500 rounded-lg py-2 px-4"
          {...register("abstract", { required: true })}
        />
        {errors.abstract?.type === "required" && (
          <FormAlert fieldName="abstract" />
        )}
      </div>
      <div className="flex flex-col">
        <label htmlFor="">Foto</label>
        <input
          type="text"
          className="bg-white border border-gray-500 rounded-lg py-2 px-4"
          {...register("picture", { required: true })}
        />
        {errors.picture?.type === "required" && (
          <FormAlert fieldName="picture" />
        )}
      </div>
      <div className="flex flex-col">
        <div className="flex gap-4">
          <input type="checkbox" {...register("fb")} />
          <label htmlFor="">Facebook</label>
        </div>
        <div className="flex gap-4">
          <input type="checkbox" {...register("gh")} />
          <label htmlFor="">Github</label>
        </div>
        <div className="flex gap-4">
          <input type="checkbox" {...register("x")} />
          <label htmlFor="">X</label>
        </div>
        <div className="flex gap-4">
          <input type="checkbox" {...register("ig")} />
          <label htmlFor="">Instagram</label>
        </div>
      </div>
      <Button variant="success">Guardar Usuario</Button>
    </form>
  );
};
