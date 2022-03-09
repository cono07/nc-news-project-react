import { Routes, Route } from "react-router-dom";
import "./App.css";
import { ArticleList } from "./Components/ArticleList";
import Heading from "./Components/Heading";
import { SingleArticle } from "./Components/SingleArticle";

function App() {
  return (
    <>
      <Heading />
      <Routes>
        <Route path="*" />
        <Route path="/" element={<ArticleList />} />
        <Route path="/articles" element={<ArticleList />} />
        <Route path="/articles/:topic_name" element={<ArticleList />} />
        <Route path="/article/:article_id" element={<SingleArticle />} />
      </Routes>
    </>
  );
}

export default App;
