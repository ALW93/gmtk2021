import React, { useEffect, useState } from "react";
import Typist from "react-typist";

const NPCDialogue = ({ body, name, updateDialogue }) => {
  const [end, setEnd] = useState(false);
  const [speech, setSpeech] = useState("");

  const endBody = () => {
    setEnd(true);
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
      <button className="continue" onClick={updateDialogue}>Continue</button>
    </section>
  );
};

export default NPCDialogue;
