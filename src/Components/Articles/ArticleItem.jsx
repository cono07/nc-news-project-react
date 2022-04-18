import { Link } from "react-router-dom";
import { formatDate } from "../../utils/formatDate";
import commentImg from "../../images/comments-icon.png";

export const ArticleItem = ({ article }) => {
  const date = article.created_at;
  const articleDate = formatDate(date);
  const voteIcon = article.votes >= 0 ? "👍" : "👎";

  return (
    <article>
      <Link to={`/article/${article.article_id}`} className="ArticleCard">
        <h2 id="ArticleCard_article-title">{article.title}</h2>
        <dl>
          <dt className="ArticleCard_author">{article.author}</dt>
          <dt className="ArticleCard_date">{articleDate}</dt>
          <dt className="ArticleCard_detail">{article.topic}</dt>
          <dt className="ArticleCard_detail">
            {voteIcon} {article.votes}
          </dt>
          <div className="ArticleCard_comments">
            <img src={commentImg} className="comments-icon" alt="comments"></img>
            <dt className="ArticleCard_detail">{article.comment_count}</dt>
          </div>
        </dl>
      </Link>
    </article>
  );
};
