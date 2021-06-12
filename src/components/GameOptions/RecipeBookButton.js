import React, { useState } from "react";

import Button from "../shared/Button";
import RecipeBook from "../RecipeBook";

function RecipeBookButton(props) {
  const [open, setOpen] = useState(false);

  const toggleRecipeBook = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="RecipeBookContainer">
      {open && <RecipeBook onClick={toggleRecipeBook} title="Recipes" />}
      <div>
        <Button text="Recipe Book" onClick={toggleRecipeBook} />
      </div>
    </div>
  );
};

export default RecipeBookButton;
