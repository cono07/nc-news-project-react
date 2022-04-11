import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-news-app-project.herokuapp.com/api",
});

// Get Topics
export const fetchTopics = () => {
  return api.get("/topics").then(({ data: { topics } }) => {
    return topics;
  });
};

//Get All Articles (inc topic queries params)
export const fetchArticles = (topic_name, sortByQuery, orderBy) => {
  return api
    .get("/articles", {
      params: { sort_by: sortByQuery, order: orderBy, topic: topic_name },
    })
    .then(({ data: { articles } }) => {
      return articles;
    });
};

//Get Single Article
export const fetchSingleArticle = (article_id) => {
  return api.get(`/articles/${article_id}`).then(({ data: { article } }) => {
    return article;
  });
};

//Get Comments for Article
export const fetchComments = (article_id) => {
  return api.get(`/articles/${article_id}/comments`).then(({ data: { comments } }) => {
    return comments;
  });
};

//Update vote of article
export const updateArticleVote = (article_id, vote) => {
  return api.patch(`articles/${article_id}`, { inc_votes: vote }).then(({ data: { article } }) => {
    return article.vote;
  });
};

//Get all users
export const fetchUsers = () => {
  return api.get("/users").then(({ data: { users } }) => {
    return users;
  });
};

//Get user by username
export const fetchSingleUser = (username) => {
  return api.get(`/users/${username}`).then(({ data: { user } }) => {
    return user;
  });
};

//Post a comment
export const postComment = (article_id, username, comment) => {
  return api
    .post(`/articles/${article_id}/comments`, {
      username: username,
      body: comment,
    })
    .then(({ data: { comment } }) => {
      return comment;
    });
};

//Delete comment
export const deleteComment = (commentId) => {
  return api.delete(`/comments/${commentId}`).then(({ data }) => {
    return data;
  });
};
