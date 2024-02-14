import Button from "../Button";

const Card = () => {
  return (
    <div className="bg-zinc-800 p-4 flex flex-col rounded-lg text-white items-center">
      <img src="" alt="" />
      <h3>nombre</h3>
      <h4>locacion</h4>
      <p>abstract</p>
      <div className="flex flex-col gap-4 my-4">
        <Button variant="primary" label="Primary Button" />
        <Button variant="secondary" label="Secondary Button" />
        <Button variant="danger" label="Danger Button" />
        <Button variant="warning" label="Warning Button" />
      </div>
    </div>
  );
};

export default Card;
