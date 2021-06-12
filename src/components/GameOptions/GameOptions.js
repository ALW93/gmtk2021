import React from "react";
import MusicButton from './Music';
import RecipeBookButton from './RecipeBookButton';
import BackToMenuButton from './BackToMenuButton';

const GameOptions = ({musicPlaying, setMusicPlaying}) => {

  return (
    <aside className="GameOptions">
      <BackToMenuButton />
      <MusicButton musicPlaying={musicPlaying} setMusicPlaying={setMusicPlaying} />
      <RecipeBookButton />
    </aside>
  );
};

export default GameOptions;
