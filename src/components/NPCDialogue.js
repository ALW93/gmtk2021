import React, { useEffect, useState } from "react";
import Typist from "react-typist";

const NPCDialogue = ({ body, name }) => {
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
  }, [body]);

  return (
    <section className="dialogue-box" id="dialogue" onClick={forceEnd}>
        <h3 className="name">{name}</h3>
      {body && !end ? (
        <Typist onTypingDone={endBody}>
          <p>{body}</p>
        </Typist>
      ) : (
        <p>{speech}</p>
      )}
    </section>
  );
};

export default NPCDialogue;
