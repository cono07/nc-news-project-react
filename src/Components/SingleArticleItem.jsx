import { useState } from "react";

import { formatDate } from "../utils/formatDate";
import { CommentsList } from "./CommentsList";
import * as api from "../utils/api";

export const SingleArticleItem = ({ article }) => {
  const articleDate = formatDate(article.created_at);
  const [voteChange, setVoteChange] = useState(0);
  const [error, setError] = useState(null);

  const handleVote = (vote) => {
    setVoteChange(vote);
    api.updateArticleVote(article.article_id, vote).catch(() => {
      setError("Oops something went wrong. Please try again later.");
      setVoteChange(0);
    });
  };

  return (
    <main className="SingleArticleItem_container">
      <h1 className="SingleArticleItem_title">{article.title}</h1>
      <dl className="SingleArticleItem_details_container">
        <div>
          <dt className="SingleArticleItem_details" id="author">
            {article.author}
          </dt>
          <dt className="SingleArticleItem_details" id="date">
            {articleDate}
          </dt>
        </div>
      </dl>

      <section className="SingleArticleItem_votes">
        <div id="SingleArticleItem_vote-number">
          Votes: {article.votes + voteChange}
        </div>
        <button
          disabled={voteChange === 1}
          className="SingleArticleItem_thumb"
          onClick={() => {
            handleVote(1);
          }}
        >
          👍
        </button>
        <button
          disabled={voteChange === -1}
          className="SingleArticleItem_thumb"
          onClick={() => {
            handleVote(-1);
          }}
        >
          👎
        </button>
        {error && <p>{error}</p>}
      </section>

      <div className="SingleArticleItem_body">
        <p>{article.body}</p>
      </div>
      <div className="Comments-container">
        <CommentsList article_id={article.article_id} />
      </div>
    </main>
  );
};
