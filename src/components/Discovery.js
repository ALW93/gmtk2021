import React from "react";
import { useSelector } from "react-redux";
import images from "../images/images";

const Discovery = () => {
  const potion = useSelector((state) => state.result);

  const onContinue = (e) => {
    // TODO Refresh new NPC, wipe selections and discovered potion
  };

  if (!potion.id)
    return (
      <div className="discoveryContainer">
        <p>Conceiving a concoction...</p>
        <div className="discoveryBox" />
      </div>
    );

  return (
    <div className="discoveryContainer">
      <p>You've concocted a...</p>
      <button className="discoveryBox" onClick={onContinue}>
        <img
          src={images[potion.id]}
          alt={potion.name}
          className="absoluteCenter"
        />
      </button>
      <p>{potion.name}!</p>
      <p>Congrats!</p>
    </div>
  );
};

export default Discovery;
