import { useState, useEffect } from "react";
import axios from "axios";

const useFetchResources = () => {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://media-content.ccbp.in/website/react-assignment/resources.json"
      )
      .then((response) => {
        setResources(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return { resources, loading, error };
};

export default useFetchResources;
