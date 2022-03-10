import { formatDate } from "../utils/formatDate";
import { CommentsList } from "./CommentsList";

export const SingleArticleItem = ({ article }) => {
  const articleDate = formatDate(article.created_at);

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
      <div className="SingleArticleItem_votes">
        <>Votes: {article.votes}</>
      </div>
      <div className="SingleArticleItem_body">
        <p>{article.body}</p>
      </div>
      <div className="Comments-container">
        <CommentsList article_id={article.article_id} />
      </div>
    </main>
  );
};
