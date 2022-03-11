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
export const fetchArticles = (topic_name, sortBy) => {
  console.log("in api:", sortBy);
  // console.log(typeof topic_name);
  let str = "/articles";
  if (topic_name && topic_name !== "all") {
    str += `?topic=${topic_name}`;
  }
  return api.get(str).then(({ data: { articles } }) => {
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
  return api
    .get(`/articles/${article_id}/comments`)
    .then(({ data: { comments } }) => {
      console.log(comments);
      return comments;
    });
};

//Update vote of article
export const updateArticleVote = (article_id, vote) => {
  return api
    .patch(`articles/${article_id}`, { inc_votes: vote })
    .then(({ data: { article } }) => {
      return article.vote;
    });
};
