import React, { useState } from "react";

import Button from "../shared/Button";
import RecipeBook from "../RecipeBook";

function RecipeBookButton() {
  const [open, setOpen] = useState(false);

  const toggleRecipeBook = () => {
    return open ? setOpen(false) : setOpen(true);
  };

  return (
    <div className="RecipeBookContainer">
      {open && <RecipeBook onClick={toggleRecipeBook} title="Recipes" />}
      <div className="recipeBookButton" onClick={toggleRecipeBook} />
    </div>
  );
}

export default RecipeBookButton;
