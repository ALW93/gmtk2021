import React from "react";
import { useSelector } from "react-redux";

const Discovery = () => {
  const result = useSelector((state) => state.result);

  return (
    <div className="discoveryContainer">
      <img src={result.url} alt={result.name}></img>
    </div>
  );
};

export default Discovery;
