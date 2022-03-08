import { Link } from "react-router-dom";
import logo from "../images/NC-News-White-Logo.jpg";
import { MainNavBar } from "./MainNavBar";
import TopicsNav from "./TopicsNav";

const Heading = () => {
  return (
    <>
      <header className="HeaderContainer">
        <div className="LogoContainer">
          <Link to={"/"}>
            <img id="MainHeader_logo" src={logo} alt="nc news logo"></img>
          </Link>
        </div>
        <nav className="MainNavContainer">
          <MainNavBar />
        </nav>
      </header>
      <nav className="TopicsNavContainer">
        <TopicsNav />
      </nav>
    </>
  );
};

export default Heading;
