import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
//It basically serves as a signal to that parent component that it will
//  render various different components as its children, depending on what route a user visits
import { Outlet } from "react-router-dom";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/users")
      .then((r) => r.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <Outlet context={users} />
    </>
  );
}
export default App;
