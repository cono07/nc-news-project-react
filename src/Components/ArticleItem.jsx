import { formatDate } from "../utils/formatDate";

export const ArticleItem = ({ article }) => {
  const date = article.created_at;
  const articleDate = formatDate(date);

  return (
    <article className="ArticleCard">
      <h2 id="ArticleCard_article-title">{article.title}</h2>
      <dl>
        <dt className="ArticleCard_author">Author: {article.author}</dt>
        <dt className="ArticleCard_date">{articleDate}</dt>
        <dt className="ArticleCard_topic">{article.topic}</dt>
        <div></div>
      </dl>
    </article>
  );
};
