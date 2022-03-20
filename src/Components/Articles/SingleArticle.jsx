import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as api from "../../utils/api";
import { SingleArticleItem } from "./SingleArticleItem";

export const SingleArticle = () => {
  const [currentArticle, setCurrentArticle] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    api.fetchSingleArticle(article_id).then((article) => {
      setCurrentArticle(article);
      setIsLoading(false);
    });
  }, [article_id]);

  return (
    <>
      {isLoading ? (
        <h2>Loading single article...</h2>
      ) : (
        <>
          <SingleArticleItem
            article={currentArticle}
            key={currentArticle.article_id}
          />
        </>
      )}
    </>
  );
};
