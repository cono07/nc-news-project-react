import { useEffect, useState } from "react";
import * as api from "../../utils/api";
import { UsersCard } from "./UsersCard";
import { css } from "@emotion/react";
import PulseLoader from "react-spinners/PulseLoader";

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

  const override = css`
    display: inline;
    margin-left: 70px;
    margin-top: 15px;
  `;

  return (
    <>
      {isLoading ? (
        <h1 className="loading">
          Loading users...
          <PulseLoader color={"#751046"} loading={isLoading} size={15} css={override} />
        </h1>
      ) : (
        <h1 id="Users_title">Users</h1>
      )}
      <main className="Users_container">
        {usersList.map((user) => {
          return <UsersCard user={user} key={user.username} />;
        })}
      </main>
    </>
  );
};
