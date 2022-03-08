import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-news-app-project.herokuapp.com/api",
});

export const fetchTopics = () => {
  return api.get("/topics").then(({ data: { topics } }) => {
    return topics;
  });
};
