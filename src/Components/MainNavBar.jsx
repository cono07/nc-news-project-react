import { Link } from "react-router-dom";

export const MainNavBar = () => {
  return (
    <>
      <Link to={"/users"} className="MainNav__link">
        Users
      </Link>
      <Link to={"/profile"} className="MainNav__link">
        Profile
      </Link>
    </>
  );
};
