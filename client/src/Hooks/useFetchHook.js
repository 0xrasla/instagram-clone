import { useContext } from "react";
import useLoggedin from "./useLoggedin";
import userContext from "../Context/User.context";

import { FetchApi } from "../API/blogapi";
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const { setUser, user } = useContext(userContext);
  useLoggedin(setUser);

  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  const [isMounted, setisMounted] = useState(true);

  useEffect(() => {
    if (user.user)
      FetchApi(url, { userID: user.user._id }).then((res) => {
        if (!res.data.ok) {
          setMessage(res.data.message);
          setLoading(true);
        }
        if (isMounted) {
          setData(res.data);
          setMessage(res.data.message);
          setLoading(false);
        }
      });

    return () => {
      setisMounted(false);
    };
  }, [url, isMounted, user]);

  return [message, loading, data];
};

export default useFetch;
