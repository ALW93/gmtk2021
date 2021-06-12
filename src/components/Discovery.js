import React from "react";
import { useSelector } from "react-redux";

const Discovery = () => {
  const result = useSelector((state) => state.result);

  return <div className="discoveryContainer">{JSON.stringify(result)}</div>;
};

export default Discovery;
