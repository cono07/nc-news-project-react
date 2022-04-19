import React from "react";
import { Link } from "react-router-dom";

const ErrorsPage = ({ errorStatus, errorMsg }) => {
  return (
    <>
      {errorStatus ? (
        <>
          <main className="ErrorsPage_main">
            <h1>{errorStatus}</h1>
            <h2>OOPS! PAGE NOT FOUND...</h2>
            <h3>{errorMsg}</h3>
            <div className="ErrorsPage_home_container">
              <Link to={"/articles"} className="ErrorsPage_homeLink">
                Take me home
              </Link>
            </div>
          </main>
        </>
      ) : (
        <main className="ErrorsPage_main">
          <h1>404</h1>
          <h2>OOPS! PAGE NOT FOUND...</h2>
          <p>Can't find the page you are looking for?</p>
          <div className="ErrorsPage_home_container">
            <Link to={"/articles"} className="ErrorsPage_homeLink">
              Take me home
            </Link>
          </div>
        </main>
      )}
    </>
  );
};

export default ErrorsPage;
