import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import * as api from "../../utils/api";
import { ArticleItem } from "./ArticleItem";
import { UserContext } from "../UserContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { css } from "@emotion/react";
import PulseLoader from "react-spinners/PulseLoader";

export const ArticleList = () => {
  const { loggedInUser } = useContext(UserContext);
  const { topic_name } = useParams();
  const [articlesList, setArticlesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [sortByQuery, setSortByQuery] = useState("created_at");
  const [orderBy, setOrderBy] = useState("desc");

  const handleSortChange = (event) => {
    setSortByQuery(event.target.value);
  };
  const handleOrderChange = (event) => {
    setOrderBy(event.target.value);
  };

  const override = css`
    display: inline;
    margin-left: 70px;
    margin-top: 5px;
  `;

  useEffect(() => {
    setIsLoading(true);
    api.fetchArticles(topic_name, sortByQuery, orderBy).then((articles) => {
      setArticlesList(articles);
      setIsLoading(false);
    });
  }, [topic_name, sortByQuery, orderBy]);

  useEffect(() => {
    toast(
      `👋 Hi ${loggedInUser.username}! 
    Check out the latest news...`,
      {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
  }, [loggedInUser]);

  return (
    <>
      {isLoading ? (
        <h2 id="ArticleList_loading">
          Loading Articles.... <PulseLoader color={"#751046"} loading={isLoading} size={15} css={override} />
        </h2>
      ) : (
        <>
          <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <main className="ArticleList_main">
            <h1 id="ArticleList_title">{topic_name} Articles</h1>
            <div className="ArticleList_sortOrder_container">
              <div className="ArticleList_sortBy_container">
                <p>Sort By</p>
                <select className="ArticleList_sortOrder_dropdown" value={sortByQuery} onChange={handleSortChange}>
                  <option value={"created_at"}>Created At</option>
                  <option value={"votes"}>Votes</option>
                  <option value={"author"}>Author</option>
                  <option value={"title"}>Title</option>
                  <option value={"comment_count"}>Comment Count</option>
                </select>
              </div>
              <div className="ArticleList_orderBy_container">
                <p>Order By</p>
                <select className="ArticleList_sortOrder_dropdown" value={orderBy} onChange={handleOrderChange}>
                  <option value={"asc"}>Ascending</option>
                  <option value={"desc"}>Descending</option>
                </select>
              </div>
            </div>
            <section className="ArticlesGrid">
              {articlesList.map((article) => {
                return <ArticleItem article={article} key={article.article_id} />;
              })}
            </section>
          </main>
        </>
      )}
    </>
  );
};
