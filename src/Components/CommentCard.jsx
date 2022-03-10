import { formatDate } from "../utils/formatDate";

export const CommentCard = ({ comment }) => {
  const commentDate = formatDate(comment.created_at);

  return (
    <article className="CommentCard_container">
      <div className="CommentCard_block-one">
        <div className="comment-author-block">
          <dl>
            <dt>Author: </dt>
            <dt>{comment.author}</dt>
          </dl>
        </div>
        <div className="comment-date-block">
          <dl>
            <dt>Date: </dt>
            <dt>{commentDate}</dt>
          </dl>
        </div>
      </div>
      <div className="CommentCard_block-two">
        <p>{comment.body}</p>
      </div>
      <div className="CommentCard_block-three">
        <dl>
          <dt>Votes: </dt>
          <dt>{comment.votes}</dt>
        </dl>
      </div>
    </article>
  );
};
