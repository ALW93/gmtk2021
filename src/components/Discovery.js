import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearAllActive, updateNpc } from "../store/reducers/activeReducer";
import { getRandomNpc } from "../utility/utility";

import LightBox from './shared/LightBox'
import Item from "./shared/Item";

const Discovery = ({open, setOpen}) => {
  const dispatch = useDispatch();
  const potion = useSelector((state) => state.potions[state.active?.potion]);
  const npcs = useSelector(state => state.npcs)

  const onContinue = (e) => {
    setOpen(false)
    dispatch(clearAllActive())
    dispatch(updateNpc(getRandomNpc(npcs)))
  }

  if (!open || !potion) return null;
  return (
    <LightBox onExit={onContinue}>
      <article className="discoveryContainer">
        {/* <Button text="x" onClick={handleClose}></Button> */}
        <p>You've concocted a...</p>
        <button className="discoveryBox absoluteCenter">
          <Item
            id={potion.id}
            type="potion"
            name={potion.name}
            onClick={onContinue}
          />
        </button>
        <h3>{potion.name}!</h3>
      </article>
  
    </LightBox>
  )
};

export default Discovery;
