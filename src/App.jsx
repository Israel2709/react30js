import { useState } from "react";
import "./App.css";
import UsersList from "./components/UsersList";
import UsersForm from "./components/UsersForm";

function App() {
  const [users, setUsers] = useState([]);

  const storeUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  return (
    <>
      <div className="container mx-auto">
        <div className="flex gap-4">
          <UsersForm saveHandler={storeUser} />
        </div>
        <div className="flex">
          <UsersList usersData={users /*[]*/} />
        </div>
      </div>
    </>
  );
}

export default App;
