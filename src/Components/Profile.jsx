import { useContext } from "react";
import { UserContext } from "./UserContext";

export const Profile = () => {
  const { loggedInUser } = useContext(UserContext);

  return (
    <main>
      <h1 id="Profile_title">Welcome {loggedInUser.name}</h1>
      <div id="Profile_card-container">
        <img src={loggedInUser.avatar_url} alt={loggedInUser.name}></img>
        <dl>
          <dt>Username: {loggedInUser.username}</dt>
          <dt>Name: {loggedInUser.name}</dt>
          <dt>Articles: 12</dt>
          <dt>Comments: 24</dt>
        </dl>
      </div>
    </main>
  );
};
