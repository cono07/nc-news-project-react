import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as api from "../../utils/api";
import { SingleArticleItem } from "./SingleArticleItem";
import { css } from "@emotion/react";
import PulseLoader from "react-spinners/PulseLoader";
import ErrorsPage from "../ErrorsPage";

export const SingleArticle = () => {
  const [currentArticle, setCurrentArticle] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [errorStatus, setErrorStatus] = useState(null);

  const override = css`
    display: inline;
    margin-left: 70px;
    margin-top: 5px;
  `;

  useEffect(() => {
    setIsLoading(true);
    api
      .fetchSingleArticle(article_id)
      .then(({ data: { article } }) => {
        setError(false);
        setCurrentArticle(article);
        setIsLoading(false);
      })
      .catch((err) => {
        let msg = err.response.data.message;
        let status = err.response.status;
        setError(true);
        setErrorMsg(msg);
        setErrorStatus(status);
        setIsLoading(false);
      });
  }, [article_id]);

  return (
    <>
      {isLoading && (
        <h2 className="loading">
          Loading single article...
          <PulseLoader color={"#751046"} loading={isLoading} size={15} css={override} />
        </h2>
      )}
      {/* if currentArticle is not undefined & error is false render SingleArticleItem 
      else render ErrorsPage*/}
      {!error && currentArticle ? (
        <>
          <SingleArticleItem article={currentArticle} key={currentArticle.article_id} />
        </>
      ) : (
        <>{error && <ErrorsPage errorStatus={errorStatus} errorMsg={errorMsg} />}</>
      )}
    </>
  );
};
