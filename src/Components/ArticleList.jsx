import { useEffect, useState } from "react";
import { useParams, useSearchParams, Link } from "react-router-dom";
import * as api from "../utils/api";
import { ArticleItem } from "./ArticleItem";

export const ArticleList = () => {
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

  useEffect(() => {
    setIsLoading(true);
    api.fetchArticles(topic_name, sortByQuery, orderBy).then((articles) => {
      setArticlesList(articles);
      setIsLoading(false);
    });
  }, [topic_name, sortByQuery, orderBy]);

  return (
    <>
      {isLoading ? (
        <h2 id="ArticleList_loading">Loading Articles....</h2>
      ) : (
        <>
          <main className="ArticleList_main">
            <h1 id="ArticleList_title">{topic_name} Articles</h1>
            <div className="ArticleList_sortOrder_container">
              <div className="ArticleList_sortBy_container">
                <p>Sort By</p>
                <select
                  className="ArticleList_sortOrder_dropdown"
                  value={sortByQuery}
                  onChange={handleSortChange}
                >
                  <option value={"created_at"}>Created At</option>
                  <option value={"votes"}>Votes</option>
                  <option value={"author"}>Author</option>
                  <option value={"title"}>Title</option>
                  <option value={"comment_count"}>Comment Count</option>
                </select>
              </div>
              <div className="ArticleList_orderBy_container">
                <p>Order By</p>
                <select
                  className="ArticleList_sortOrder_dropdown"
                  value={orderBy}
                  onChange={handleOrderChange}
                >
                  <option value={"asc"}>Ascending</option>
                  <option value={"desc"}>Descending</option>
                </select>
              </div>
            </div>
            <section className="ArticlesGrid">
              {articlesList.map((article) => {
                return (
                  <ArticleItem article={article} key={article.article_id} />
                );
              })}
            </section>
          </main>
        </>
      )}
    </>
  );
};
