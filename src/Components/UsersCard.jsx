import { useContext, useEffect, useState } from "react";
import userPlaceholder from "../images/user-placeholder.png";
import { UserContext } from "./UserContext";
import * as api from "../utils/api";

export const UsersCard = ({ user }) => {
  const { setLoggedInUser } = useContext(UserContext);

  const [userCard, setUserCard] = useState({});

  const handleLogIn = () => {
    setLoggedInUser(userCard);
    // setLoggedInUser();
  };

  //tried to set loggedInUser as the object properties when fetching user by username
  //was going to then try and set a state to pass into the handleLogIn with setLoggedInUser(currentLoggedIn)
  //Error about using objects as a react child or something

  //loading needed

  useEffect(() => {
    api.fetchSingleUser(user.username).then((user) => {
      setUserCard(user);
    });
  });

  return (
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
  );
};
