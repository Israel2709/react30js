import { useEffect, useState } from "react";
import "./App.css";
import { UserCard } from "./Components/UserCard";

function App() {
  const [usersList, setUsersList] = useState(null);

  const linkHandler = (event) => {
    const newPage = event.target.value; /*page1 || page2*/
    console.log(newPage);
    setCurrentPage(newPage);
  };

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch(
        "https://javascript30js-default-rtdb.firebaseio.com/simpleUsers/.json"
      );
      const data = await response.json();
      console.log(data);
      /* ["user1","user2"]*/ /*data[key] se convierte en {name:"...", picture:"..."}*/
      const formattedData = Object.keys(data).map((key) => ({
        key,
        ...data[key],
      }));
      console.log(formattedData);
      setUsersList(formattedData);
    };
    getUsers();
  }, []);

  return (
    <>{usersList && usersList.map((user) => <UserCard userData={user} />)}</>
  );
}

export default App;
