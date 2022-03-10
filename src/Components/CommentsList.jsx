import { useEffect, useState } from "react";
import * as api from "../utils/api";
import { CommentCard } from "./CommentCard";

export const CommentsList = ({ article_id }) => {
  const [commentList, setCommentList] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    api.fetchComments(article_id).then((comments) => {
      setCommentList(comments);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      {isLoading ? (
        <h3>Loading comments...</h3>
      ) : (
        <>
          <h3>Comments</h3>
          {commentList.map((comment) => {
            return <CommentCard key={comment.comment_id} comment={comment} />;
          })}
        </>
      )}
    </>
  );
};
