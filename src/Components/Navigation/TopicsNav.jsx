import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as api from "../../utils/api";

const TopicsNav = () => {
  const [topicsList, setTopicsList] = useState([]);

  useEffect(() => {
    api.fetchTopics().then((topics) => {
      setTopicsList(topics);
    });
  }, []);

  return (
    <>
      <Link to={"/articles"} className="TopicsNavBar__link">
        All
      </Link>
      {topicsList.map((topic) => {
        return (
          <Link to={`articles/${topic.slug}`} key={topic.slug} className="TopicsNavBar__link">
            {topic.slug}
          </Link>
        );
      })}
    </>
  );
};

export default TopicsNav;
