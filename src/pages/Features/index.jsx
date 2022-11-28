import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";

// ACTIONS
import { getAllPosts } from "../../store/Actions/TestActions";

const Features = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.Test);
  useEffect(() => {
    dispatch(getAllPosts());
  }, []);
  return (
    <div className="featurePage">
      <Helmet>
        <title>CrypBook | Features</title>
      </Helmet>
      <h3>Features Page</h3>
      <br />
      <h5>Showing Random Names from jsonPlaceholderAPI:</h5>
      <br />
      <ul>
        {users?.map((item, index) => (
          <li key={`${item.name}${index}`}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Features;
