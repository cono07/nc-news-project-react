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
          <dt>
            <strong>Username:</strong> {loggedInUser.username}
          </dt>
          <dt>
            <strong>Name:</strong> {loggedInUser.name}
          </dt>
          <dt>
            <strong>Articles Posted:</strong> 12
          </dt>
          <dt>
            <strong>Comments:</strong> 24
          </dt>
        </dl>
      </div>
    </main>
  );
};
