import React, { useState } from "react";
import useSound from "use-sound";
import song from "../music/infados-by-kevin-macleod.mp3";
import mute from "../images/music/Mute_Icon.svg";
import playButton from "../images/music/Speaker_Icon.svg";

const Music = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { stop }] = useSound(song);

  const handleClick = () => {
    if (!isPlaying) {
      play();
      setIsPlaying(!isPlaying);
    } else {
      stop();
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="musicContainer">
      <img
        src={isPlaying ? mute : playButton}
        onClick={handleClick}
        className="music"
        alt="music player"
      />
    </div>
  );
};

export default Music;
