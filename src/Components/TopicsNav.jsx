import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchTopics } from "../api/fetchTopics";

const TopicsNav = () => {
  const [topicsList, setTopicsList] = useState([]);

  useEffect(() => {
    fetchTopics().then((topics) => {
      setTopicsList(topics);
    });
  }, []);
  console.log(topicsList);

  return (
    <>
      <Link to={"/articles/all"} className="TopicsNavBar__link">
        All
      </Link>
      {topicsList.map((topic) => {
        return (
          <Link
            to={`articles/${topic.slug}`}
            key={topic.slug}
            className="TopicsNavBar__link"
          >
            {topic.slug}
          </Link>
        );
      })}
    </>
  );
};

export default TopicsNav;
