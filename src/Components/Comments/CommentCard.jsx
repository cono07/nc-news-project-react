import { useContext, useEffect, useRef, useState } from "react";
import { formatDate } from "../../utils/formatDate";
import { UserContext } from "../UserContext";
import * as api from "../../utils/api";

export const CommentCard = ({ author, body, votes, commentId, created_at, setCommentList, article_id }) => {
  const commentDate = formatDate(created_at);
  const { loggedInUser } = useContext(UserContext);
  const [deleteMsg, setDeleteMsg] = useState(null);
  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  const handleDelete = () => {
    if (isMounted.current) {
      setDeleteMsg("deleting message...");
      api
        .deleteComment(commentId)
        .then(() => {
          return api.fetchComments(article_id).then(setCommentList);
        })
        .then(() => {
          setDeleteMsg(null);
        });
    }
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
                <dt>{author}</dt>
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
            <p>{body}</p>
          </div>
          <div className="CommentCard_block-three">
            <dl>
              <dt>Votes: </dt>
              <dt>{votes}</dt>
            </dl>
            {/* only show delete button if comment has id and author is logged in user. Forces refresh to delete comment */}
            {loggedInUser.username === author && commentId && (
              <button
                className="CommentCard_deleteButton"
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
