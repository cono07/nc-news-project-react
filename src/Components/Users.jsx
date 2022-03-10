import { useEffect, useState } from "react";
import * as api from "../utils/api";

export const Users = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    api.fetchUsers().then((users) => {
      setUsersList(users);
      setIsLoading(false);
    });
  });

  console.log(usersList);

  return <h1></h1>;
};
