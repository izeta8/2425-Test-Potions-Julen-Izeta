
import Cauldron from "../classes/cauldron.mjs"
import PotionIngredients from "../classes/ingredients.mjs";
import { getIngredients, getDiseases, getPlayerData } from "../api/api.mjs";

// Arrange 
// Act 
// Assert

describe('When all the ingredients have effect "Restore"', () => {
  describe('If the ingredients contain enough effects to combat a certain disease, an associated disease will be created', () => {
    it('The name must be the correspondent. Antidote of + "disease name"', async () => {
      
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
      expect(potionResult.name).toBe("Antidote of Gravechill");

    });
  });
});

