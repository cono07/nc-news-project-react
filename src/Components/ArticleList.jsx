import { useEffect, useState } from "react";
import { useParams, useSearchParams, Link } from "react-router-dom";
import * as api from "../utils/api";
import { ArticleItem } from "./ArticleItem";

export const ArticleList = () => {
  const { topic_name } = useParams();
  const [articlesList, setArticlesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams.get("sort-by"));
  const sortBy = searchParams.get("sort-by");

  useEffect(() => {
    setIsLoading(true);
    api.fetchArticles(topic_name, sortBy).then((articles) => {
      setArticlesList(articles);
      setIsLoading(false);
    });
  }, [topic_name, searchParams]);

  return (
    <>
      {isLoading ? (
        <h2 id="ArticleList_loading">Loading Articles....</h2>
      ) : (
        <>
          <main className="ArticleList_main cooking">
            <h1 id="ArticleList_title">{topic_name} Articles</h1>
            <Link
              to={`/articles/${
                topic_name ? topic_name : "all"
              }?sort-by=created_at`}
            >
              Date
            </Link>
            <Link
              to={`/articles/${topic_name ? topic_name : "all"}?sort-by=votes`}
            >
              Votes
            </Link>
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
