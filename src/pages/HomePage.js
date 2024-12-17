import React, { useContext, useEffect } from "react";
import { userContext } from "../context/MainContext";

const HomePage = () => {
  const { users, getUsers } = useContext(userContext);

  useEffect(() => {
    getUsers();
  }, []);
  console.log(users);
  return users.map((item, index) => (
    <ul key={index}>
      <li>{item.name}</li>
      <li>{item.email}</li>
    </ul>
  ));
};

export default HomePage;
