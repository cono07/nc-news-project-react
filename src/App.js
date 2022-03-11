import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { ArticleList } from "./Components/ArticleList";
import Heading from "./Components/Heading";
import { SingleArticle } from "./Components/SingleArticle";
import { Users } from "./Components/Users";
import { UserContext } from "./Components/UserContext";
import { Profile } from "./Components/Profile";

function App() {
  //tried to set as an object with username. avatar, name
  //eg: useState({username: 'grumpy19', avatar_url: 'url...', name: 'dave'})
  const [loggedInUser, setLoggedInUser] = useState({
    username: "grumpy19",
    avatar_url:
      "https://vignette.wikia.nocookie.net/mrmen/images/7/78/Mr-Grumpy-3A.PNG/revision/latest?cb=20170707233013",
    name: "Paul Grump",
  });

  return (
    <>
      <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
        <Heading />
        <Routes>
          <Route path="*" />
          <Route path="/" element={<ArticleList />} />
          <Route path="/articles" element={<ArticleList />} />
          <Route path="/articles/:topic_name" element={<ArticleList />} />
          <Route path="/article/:article_id" element={<SingleArticle />} />
          <Route path="/users" element={<Users />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;
