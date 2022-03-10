import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as api from "../utils/api";
import { ArticleItem } from "./ArticleItem";

export const ArticleList = () => {
  const { topic_name } = useParams();
  const [articlesList, setArticlesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    api.fetchArticles(topic_name).then((articles) => {
      setArticlesList(articles);
      setIsLoading(false);
    });
  }, [topic_name]);

  return (
    <>
      {isLoading ? (
        <h2 id="ArticleList_loading">Loading Articles....</h2>
      ) : (
        <>
          <main className="ArticleList_main cooking">
            <h1 id="ArticleList_title">{topic_name} Articles</h1>
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
