import { useEffect, useState } from "react";
import * as api from "../utils/api";
import { CommentCard } from "./CommentCard";
import { PostComment } from "./PostComment";

export const CommentsList = ({ article_id }) => {
  const [commentList, setCommentList] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    api.fetchComments(article_id).then((comments) => {
      setCommentList(comments);
      setIsLoading(false);
    });
  }, [article_id, setCommentList]);
  //[article_id] needed in useEffect?

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
          />
          {commentList.map((comment) => {
            return <CommentCard key={comment.comment_id} comment={comment} />;
          })}
        </>
      )}
    </>
  );
};
