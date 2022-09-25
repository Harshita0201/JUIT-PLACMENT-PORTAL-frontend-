import React, { useState, useCallback } from "react";
import { HttpAction } from "../Store/use-Http";
import { useDispatch, useSelector } from "react-redux";
const useHttp = () => {
  const dispatch = useDispatch();
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    dispatch(HttpAction.loding());
    // setIsLoading(true);
    dispatch(HttpAction.noerror());
    // setError(null);
    // console.log(requestConfig.body);
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();
      applyData(data);
    } catch (err) {
      dispatch(HttpAction.error("Something went wrong!"));
      // setError(err.message || "Something went wrong!");
    }
    dispatch(HttpAction.notLoding());
    // setIsLoading(false);
  }, []);
  const isLoading = useSelector((state) => state.http.isLoading);
  const error = useSelector((state) => state.http.error);
  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
