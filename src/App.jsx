import { useState, useEffect } from "react";
import "./App.css";
import { Card } from "./Components/Card";
import { UserForm } from "./Components/UserForm";
import { getAllUsers } from "./api/userApi";
import { Button } from "./Components/Button";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function App() {
  const [usersData, setUsersData] = useState(null);
  const [currentPageUsers, setCurrentPageUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const getUsers = async () => {
      const data = await getAllUsers();
      console.log(data);
      setUsersData(data);
      setCurrentPageUsers([...data].slice(0, 2));
    };

    getUsers();
  }, []);

  const updateUsers = async () => {
    const updatedUsers = await getAllUsers();
    setUsersData(updatedUsers);
  };

  const nextPageHandler = () => {
    setCurrentPageUsers(
      [...usersData].slice(currentPage * 2, (currentPage + 1) * 2)
    );
    setCurrentPage(currentPage + 1);
  };

  const prevPageHandler = () => {
    setCurrentPageUsers(
      [...usersData].slice((currentPage - 2) * 2, (currentPage - 1) * 2)
    );
    setCurrentPage(currentPage - 1);
  };

  return (
    <>
      <div className="container w-7/8 mx-auto border rounded-lg border-gray-500 p-4 flex gap-4">
        <UserForm saveHandler={updateUsers} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 border border-gray-500 flex-1 rounded-lg">
          {currentPageUsers &&
            currentPageUsers.map(({ fullname, abstract, picture, key }) => (
              <Card
                key={key}
                picture={picture}
                abstract={abstract}
                fullname={fullname}
              />
            ))}
        </div>
        <div className="flex justify-between">
          <Button variant="primary" handler={prevPageHandler}>
            Regresar a página a página {currentPage - 1}
            <FaArrowLeft />
          </Button>
          <Button variant="primary" handler={nextPageHandler}>
            Ir a página {currentPage + 1}
            <FaArrowRight />
          </Button>
        </div>
      </div>
    </>
  );
}

export default App;
