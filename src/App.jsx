import { Route, Routes, NavLink } from "react-router-dom";
import "./App.css";
import { Contact } from "./Pages/Contact";
import { Home } from "./Pages/Home";
import { Users } from "./Pages/Users";
import { UsersDetail } from "./Pages/UsersDetail";
import { useState } from "react";

function App() {
  const [usersList, setUsersList] = useState([
    {
      name: "Isra",
      id: 1,
    },
    {
      name: "Nao",
      id: 2,
    },
    {
      name: "Charles",
      id: 3,
    },
  ]);
  return (
    <>
      <div>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Contacto
        </NavLink>
        <NavLink
          to="/users/detail/45"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Usuario 45
        </NavLink>
      </div>
      <ul>
        {usersList.map(({ name, id }) => (
          <li>
            <NavLink
              to={`/users/detail/${id}`}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/detail/:userKey" element={<UsersDetail />} />
      </Routes>
    </>
  );
}

export default App;
