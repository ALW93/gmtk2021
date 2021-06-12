import { potions } from "../data/data";

export const matchRecipes = (ingredients) => {
  const sortedIngredients = ingredients.sort();
  const match = potions.find((recipe) => {
    const ingredients = recipe.ingredients.sort();
    return (
      ingredients.length === sortedIngredients.length &&
      ingredients.every((item, idx) => item === sortedIngredients[idx])
    );
  });
  return match;
};

export function getRandomNpc(npcs) {
  const npcIndex = Math.floor(Math.random() * npcs.length);
  return npcs[npcIndex]
}
