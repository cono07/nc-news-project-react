import { Link } from "react-router-dom";
import logo from "../../images/NC-Logo-Transparent.png";
import { MainNavBar } from "./MainNavBar";
import TopicsNav from "./TopicsNav";

const Heading = () => {
  return (
    <header>
      <div className="HeaderContainer">
        <div className="LogoContainer">
          <Link to={"/"}>
            <img id="MainHeader_logo" src={logo} alt="nc news logo"></img>
          </Link>
        </div>
        <nav className="MainNavContainer">
          <MainNavBar />
        </nav>
      </div>
      <nav className="TopicsNavContainer">
        <TopicsNav />
      </nav>
    </header>
  );
};

export default Heading;
