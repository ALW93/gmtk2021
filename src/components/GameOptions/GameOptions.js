import React from "react";
import MusicButton from './Music';
import RecipeBookButton from './RecipeBookButton';
import BackToMenuButton from './BackToMenuButton';

const GameOptions = ({musicPlaying, setMusicPlaying}) => {

  return (
    <aside className="GameOptions">
      <BackToMenuButton />
      <RecipeBookButton />
      <MusicButton musicPlaying={musicPlaying} setMusicPlaying={setMusicPlaying} />
    </aside>
  );
};

export default GameOptions;
