import { useEffect, useState } from "react";
import * as api from "../utils/api";
import { UsersCard } from "./UsersCard";

export const Users = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    api.fetchUsers().then((users) => {
      setUsersList(users);
      setIsLoading(false);
    });
  }, []);

  // console.log(usersList);

  return (
    <>
      {isLoading ? <h1>Loading users...</h1> : <h1 id="Users_title">Users</h1>}
      <main className="Users_container">
        {usersList.map((user) => {
          return <UsersCard user={user} key={user.username} />;
        })}
      </main>
    </>
  );
};
