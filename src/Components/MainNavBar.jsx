import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";

export const MainNavBar = () => {
  const { loggedInUser } = useContext(UserContext);

  return (
    <>
      <Link to={"/users"} className="MainNav__link navLinkUsers">
        Users
      </Link>
      <Link to={"/profile"} className="MainNav__link navLinkProfile">
        Profile | {loggedInUser.username}
      </Link>
    </>
  );
};
