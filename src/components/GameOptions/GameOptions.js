import React from "react";
import MusicButton from './Music';
import RecipeBookButton from './RecipeBookButton';
import BackToMenuButton from './BackToMenuButton';

const GameOptions = (props) => {

  return (
    <aside className="GameOptions">
      <BackToMenuButton />
      <MusicButton />
      <RecipeBookButton />
    </aside>
  );
};

export default GameOptions;
