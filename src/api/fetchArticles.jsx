import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-news-app-project.herokuapp.com/api",
});

export const fetchArticles = (topic_name) => {
  let str = "/articles";
  if (topic_name && topic_name !== "all") {
    str += `?topic=${topic_name}`;
  }

  return api.get(str).then(({ data: { articles } }) => {
    // console.log("in fetch: ", topic_name, articles);
    return articles;
  });
};
