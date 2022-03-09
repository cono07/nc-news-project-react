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

//Get Articles (inc topic queries params)
export const fetchArticles = (topic_name) => {
  let str = "/articles";
  if (topic_name && topic_name !== "all") {
    str += `?topic=${topic_name}`;
  }
  return api.get(str).then(({ data: { articles } }) => {
    return articles;
  });
};
