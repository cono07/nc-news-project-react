import { Routes, Route } from "react-router-dom";
import "./App.css";
import { ArticleList } from "./Components/ArticleList";
import Heading from "./Components/Heading";

function App() {
  return (
    <>
      <Heading />
      <Routes>
        <Route path="*" />
        <Route path="/" element={<ArticleList />} />
        <Route path="/articles" element={<ArticleList />} />
        <Route path="/articles/:topic_name" element={<ArticleList />} />
      </Routes>
    </>
  );
}

export default App;
