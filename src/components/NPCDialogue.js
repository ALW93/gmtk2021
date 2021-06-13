import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Typist from "react-typist";

import { clearAllActive, updateNpc } from "../store/reducers/activeReducer";
import { getRandomNpc } from "../utility/utility";


const NPCDialogue = ({ body, name, updateDialogue, isFinished, setIsFinished }) => {
  const dispatch = useDispatch()
  const [end, setEnd] = useState(false);
  const [speech, setSpeech] = useState("");
  const npcs = useSelector(state => state.npcs)

  const endBody = () => {
    setEnd(true);
    if (isFinished) {
      dispatch(clearAllActive())
      dispatch(updateNpc(getRandomNpc(npcs)))
      setIsFinished(false)
    }
  };

  const forceEnd = () => {
    setEnd(true);
  };

  useEffect(() => {
    if (body !== speech) {
      setEnd(false);
    }
    setSpeech(body);
  }, [body, speech]);

  return (
    <section className="dialogue-box" id="dialogue" onClick={forceEnd}>
      <h3 className="name">{name}</h3>
      {body && !end ? (
        <Typist onTypingDone={endBody} avgTypingDelay={30}>
          <p>{body}</p>
        </Typist>
      ) : (
        <p>{speech}</p>
      )}
      <button onClick={updateDialogue}>Continue</button>
    </section>
  );
};

export default NPCDialogue;
