import { useContext, useState } from "react";
import { formatDate } from "../../utils/formatDate";
import { UserContext } from "../UserContext";
import * as api from "../../utils/api";

export const CommentCard = ({ comment, setCommentDeleted }) => {
  const commentDate = formatDate(comment.created_at);
  const { loggedInUser } = useContext(UserContext);
  const [deleteMsg, setDeleteMsg] = useState(null);

  const handleDelete = () => {
    setDeleteMsg("deleting message...");
    api.deleteComment(comment.comment_id).then(() => {
      setCommentDeleted(true);
      setDeleteMsg(null);
    });
  };

  return (
    <>
      {deleteMsg ? (
        <h3>Deleting comment...</h3>
      ) : (
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
            {/* only show delete button if comment has id and author is logged in user. Forces refresh to delete comment */}
            {loggedInUser.username === comment.author && comment.comment_id && (
              <button
                onClick={() => {
                  handleDelete();
                }}
              >
                Delete Comment
              </button>
            )}
          </div>
        </article>
      )}
    </>
  );
};
