  
import { getIngredients, getDiseases, getPlayerData } from "./src/api/api.mjs";
import PotionIngredients from "./src/classes/ingredients.mjs";
import Cauldron from "./src/classes/cauldron.mjs";

console.clear();

// Arrange 
// Act 
// Assert

// ----------------------------------------------------------------------------//
// ------------- THE INDEX FILE IS FOR TEMPORAL TESTING PURPOSE ---------------//
// ----------------------------------------------------------------------------//


const handleCreatePotion = async () => {
   
  // ARRANGE
  const diseases = await getDiseases();
  const playerData = await getPlayerData();

  const ingredient1 =  {
    "_id": "6702b44f76863c206a48cce5",
    "name": "Guardian's Essence",
    "description": "A mystical essence that restores hit points to its user.",
    "value": 30,
    "effects": [
      "lesser_restore_hit_points"
    ],
    "image": "/images/ingredients/restore/restore_16.webp",
    "type": "ingredient"
  };

  const ingredient2 =  {
    "_id": "6702b44f76863c206a48ccec",
    "name": "Enduring Root",
    "description": "A robust root that fortifies the constitution and endurance.",
    "value": 20,
    "effects": [
      "lesser_restore_constitution"
    ],
    "image": "/images/ingredients/restore/restore_23.webp",
    "type": "ingredient"
  }

  
  const selectedIngredients = [ingredient1, ingredient2];

  // ACT
  const ingredientsForPotion = PotionIngredients.load(selectedIngredients);
  
  const cauldron = new Cauldron(ingredientsForPotion, diseases, playerData);
  const ingredients = cauldron.ingredients.ingredients;
  const potionResult = cauldron.createPotion(ingredients);

  // ASSERT
  // console.log(potionResult.name);

};

// handleCreatePotion();

