import { useEffect, useState } from "react";
import * as api from "../../utils/api";
import { CommentCard } from "./CommentCard";
import { PostComment } from "./PostComment";

export const CommentsList = ({ article_id }) => {
  const [commentList, setCommentList] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [commentPosted, setCommentPosted] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    api.fetchComments(article_id).then((comments) => {
      setCommentList(comments);
      setIsLoading(false);
    });
  }, [commentPosted]);

  return (
    <>
      {isLoading ? (
        <h3>Loading comments...</h3>
      ) : (
        <>
          <h3>Comments</h3>
          <PostComment
            article_id={article_id}
            setCommentList={setCommentList}
            setCommentPosted={setCommentPosted}
          />
          {commentList.map((comment) => {
            return (
              <CommentCard
                setCommentList={setCommentList}
                key={comment.comment_id}
                commentId={comment.comment_id}
                created_at={comment.created_at}
                author={comment.author}
                body={comment.body}
                votes={comment.votes}
                article_id={article_id}
              />
            );
          })}
        </>
      )}
    </>
  );
};
