import { useState, useEffect } from "react";
import "./App.css";
import { Card } from "./Components/Card";
import { UserForm } from "./Components/UserForm";
import { getAllUsers } from "./api/userApi";

function App() {
  const [usersData, setUsersData] = useState(null);

  useEffect(() => {
    const getUsers = async () => {
      const data = await getAllUsers();
      setUsersData(data);
    };

    getUsers();
  }, []);

  const updateUsers = async () => {
    const updatedUsers = await getAllUsers();
    setUsersData(updatedUsers);
  };

  return (
    <>
      <div className="container w-7/8 mx-auto border rounded-lg border-gray-500 p-4 flex gap-4">
        <UserForm saveHandler={updateUsers} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 border border-gray-500 flex-1 rounded-lg">
          {usersData &&
            usersData.map(({ fullname, abstract, picture, key }) => (
              <Card
                key={key}
                picture={picture}
                abstract={abstract}
                fullname={fullname}
              />
            ))}
        </div>
      </div>
    </>
  );
}

export default App;
