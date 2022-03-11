import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";

export const MainNavBar = () => {
  const { loggedInUser } = useContext(UserContext);

  return (
    <>
      <Link to={"/users"} className="MainNav__link">
        Users
      </Link>
      <Link to={"/profile"} className="MainNav__link">
        Profile | <strong>{loggedInUser.username}</strong>
      </Link>
    </>
  );
};
