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

export function getRandomNpc(npcsData) {
  const npcs = Object.values(npcsData)
  const npcIndex = Math.floor(Math.random() * npcs.length);
  return npcs[npcIndex]
}

export function normalizeData(data) {
    const normalized = {}
    data.forEach(item => {
        normalized[item.id] = item
    })
    return normalized
}
