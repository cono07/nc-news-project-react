import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as api from "../../utils/api";
import { SingleArticleItem } from "./SingleArticleItem";
import { css } from "@emotion/react";
import PulseLoader from "react-spinners/PulseLoader";

export const SingleArticle = () => {
  const [currentArticle, setCurrentArticle] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();

  const override = css`
    display: inline;
    margin-left: 70px;
    margin-top: 5px;
  `;

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
        <h2 className="loading">
          Loading single article...
          <PulseLoader color={"#751046"} loading={isLoading} size={15} css={override} />
        </h2>
      ) : (
        <>
          <SingleArticleItem article={currentArticle} key={currentArticle.article_id} />
        </>
      )}
    </>
  );
};
