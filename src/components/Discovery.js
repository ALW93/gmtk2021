import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Item from "./shared/Item";

const Discovery = () => {
  const dispatch = useDispatch();
  const potion = useSelector((state) => state.potions[state.active?.potion]);

  const onContinue = (e) => {
    // TODO Refresh new NPC, wipe selections and discovered potion
    // dispatch()
  };

  if (!potion)
    return (
      <div className="discoveryContainer">
        <p>Conceiving a concoction...</p>
        <div className="discoveryBox" />
      </div>
    );

  return (
    <div className="discoveryContainer">
      <p>You've concocted a...</p>
      <button className="discoveryBox">
        <Item
          id={potion.id}
          type="potion"
          name={potion.name}
          onClick={onContinue}
        />
      </button>
      <p>{potion.name}!</p>
      <p>Congrats!</p>
    </div>
  );
};

export default Discovery;
