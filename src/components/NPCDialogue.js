import React, { useEffect, useState } from "react";
import Typist from "react-typist";

const NPCDialogue = ({ body }) => {
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
    <div className="dialogue-box" id="dialogue" onClick={forceEnd}>
      {body && !end ? (
        <Typist onTypingDone={endBody}>
          <p>{body}</p>
        </Typist>
      ) : (
        <p>{speech}</p>
      )}
    </div>
  );
};

export default NPCDialogue;
