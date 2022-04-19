import { useContext, useState } from "react";
import * as api from "../../utils/api";
import { UserContext } from "../../Contexts/UserContext";

export const PostComment = ({ article_id, setCommentList, setCommentPosted }) => {
  const [body, setBody] = useState("");
  const { loggedInUser } = useContext(UserContext);
  const [error, setError] = useState(null);
  const [userMsg, setUserMsg] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setUserMsg("Posting...");
    api
      .postComment(article_id, loggedInUser.username, body)
      .then((newComment) => {
        setCommentList((currComments) => {
          return [newComment, ...currComments];
        });
        setUserMsg("Thanks for your comment!");
        setCommentPosted(true);
      })
      .catch(() => {
        setError("Oops something went wong. Try and post a comment later.");
      });

    setBody("");
    setCommentPosted(false);
  };

  return (
    <div className="PostComment_container">
      <form onSubmit={handleSubmit} className="PostComment_form">
        <label id="PostComment_label">Tell us your thoughts: </label>
        <textarea
          required
          id="PostComment_text-box"
          rows="6"
          placeholder="Type your comment here..."
          value={body}
          onChange={(event) => {
            setBody(event.target.value);
          }}
        ></textarea>
        <div className="PostComment_button-container">
          <button type="submit">Post comment</button>
        </div>
      </form>
      {error ? <h3>{error}</h3> : userMsg && <h3>Thanks for your comment!</h3>}
    </div>
  );
};
