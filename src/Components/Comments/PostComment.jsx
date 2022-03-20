import { useContext, useState } from "react";
import * as api from "../../utils/api";
import { UserContext } from "../UserContext";

export const PostComment = ({
  article_id,
  setCommentList,
  setCommentPosted,
}) => {
  const [body, setBody] = useState("");
  const { loggedInUser } = useContext(UserContext);
  const [error, setError] = useState(null);
  const [userMsg, setUserMsg] = useState(null);

  const date = new Date(Date("UTC"));

  const handleSubmit = (event) => {
    event.preventDefault();
    let tempPost = {};
    api
      .postComment(article_id, loggedInUser.username, body)
      .then(() => {
        tempPost = {
          author: loggedInUser.username,
          created_at: date,
          votes: 0,
          body: body,
        };
        setCommentList((currentList) => {
          return [tempPost, ...currentList];
        });
        setUserMsg("Thanks for your comment!");
        setCommentPosted(true);
      })
      .catch(() => {
        setError("Oops something went wrong. Try and post a comment later.");
        tempPost = {};
        setCommentList((currentList) => {
          return [...currentList];
        });
      });
    setBody("");
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
