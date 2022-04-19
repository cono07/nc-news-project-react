import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Contexts/UserContext";
import * as api from "../../utils/api";
import { useNavigate } from "react-router-dom";

export const UsersCard = ({ user }) => {
  const { setLoggedInUser } = useContext(UserContext);

  const [userCard, setUserCard] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  let navigate = useNavigate();
  const routeChange = () => {
    //added timer to pause on screen to show button change to 'logged in'
    setTimeout(() => {
      let path = `/articles`;
      navigate(path);
    }, 1200);
  };

  const handleLogIn = () => {
    Promise.all([setLoggedInUser(userCard), setIsLoggedIn(true)]).then(() => {
      routeChange();
    });
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
            <button disabled={isLoggedIn} onClick={handleLogIn}>
              {isLoggedIn ? <>Logged In</> : <>Login</>}
            </button>
          </div>
        </article>
      )}
    </>
  );
};
