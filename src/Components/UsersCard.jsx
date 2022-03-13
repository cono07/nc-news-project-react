import { useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import * as api from "../utils/api";

export const UsersCard = ({ user }) => {
  const { setLoggedInUser } = useContext(UserContext);

  const [userCard, setUserCard] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const handleLogIn = () => {
    setLoggedInUser(userCard);
  };

  useEffect(() => {
    setIsLoading(true);
    api.fetchSingleUser(user.username).then((user) => {
      setUserCard(user);
      setIsLoading(false);
    });
  }, [user.username]);

  return (
    <>
      {isLoading ? (
        <h2>Loading user...</h2>
      ) : (
        <article className="UsersCard_container">
          <div className="UsersCard_user-image">
            <img src={userCard.avatar_url} alt="user"></img>
          </div>
          <div className="UsersCard_username">
            <h2>{userCard.username}</h2>
          </div>
          <div className="UsersCard_button">
            <button onClick={handleLogIn}>Log In</button>
          </div>
        </article>
      )}
    </>
  );
};
