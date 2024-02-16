const UsersList = (props) => {
  const { usersData } = props;

  return (
    <ul className="p-4 border border-blue-800">
      {usersData.map((user, index) => {
        const { name, age } = user;
        return (
          <li key={index}>
            Nombre:{name} Edad:{age}
          </li>
        );
      })}
    </ul>
  );
};

export default UsersList;
