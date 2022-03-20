import { Link } from "react-router-dom";
import { formatDate } from "../../utils/formatDate";

export const ArticleItem = ({ article }) => {
  const date = article.created_at;
  const articleDate = formatDate(date);

  return (
    <article>
      <Link to={`/article/${article.article_id}`} className="ArticleCard">
        <h2 id="ArticleCard_article-title">{article.title}</h2>
        <dl>
          <dt className="ArticleCard_author">Author: {article.author}</dt>
          <dt className="ArticleCard_date">{articleDate}</dt>
          <dt className="ArticleCard_detail">{article.topic}</dt>
          <dt className="ArticleCard_detail">Votes: {article.votes}</dt>
          <dt className="ArticleCard_detail">
            Comments: {article.comment_count}
          </dt>
        </dl>
      </Link>
    </article>
  );
};
