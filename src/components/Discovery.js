import React from "react";
import { useDispatch, useSelector } from "react-redux";
import images from "../images/images";

const Discovery = () => {
  const dispatch = useDispatch()
  const potion = useSelector((state) => state.potions[state.active?.potion]);

  const onContinue = (e) => {
    // TODO Refresh new NPC, wipe selections and discovered potion
    // dispatch()
  }

if (!potion) return (
  <div className="discoveryContainer">
    <p>Conceiving a concoction...</p>
    <div className="discoveryBox"/>
  </div>
)

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
