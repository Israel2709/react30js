export const UserCard = (props) => {
  const { userData } = props;
  return (
    <div>
      <img src={userData.picture} alt="" />
      <h2>{userData.name}</h2>
    </div>
  );
};
