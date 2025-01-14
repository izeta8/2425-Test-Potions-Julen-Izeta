
import Cauldron from "../classes/cauldron.mjs"
import PotionIngredients from "../classes/ingredients.mjs";
import diseases from '../api/diseases.json' with { type: "json" };
import playerData from '../api/playerData.json' with { type: "json" };

// Arrange 
// Act 
// Assert

describe('When all the ingredients have effect "Restore"', () => {
  describe('If the ingredients contain enough effects to combat a certain disease, an associated disease will be created', () => {

    it('The name must be the correspondent. Antidote of + "disease name"', async () => {
      
      // ARRANGE
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

    it('The attributes will have a random value taking into account the ranges in the documentation table.', async () => {
      
      // ARRANGE
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

      const hit_points = potionResult.modifier.hit_points;
      const constitution = potionResult.modifier.constitution;

      // ASSERT

      // lesser_restore_hit_points: 40-50
      expect(hit_points).toBeGreaterThanOrEqual(40);
      expect(hit_points).toBeLessThanOrEqual(50);

      // lesser_restore_attributeName: 6-9
      expect(constitution).toBeGreaterThanOrEqual(6);
      expect(constitution).toBeLessThanOrEqual(9);

    });
  });
});


describe('If some of the ingredients does not contain the name "Restore"', () => {
 
  it("Cant create an Antidote. The name of the potion won't have the word 'Antidote'", async () => {
    
    // ARRANGE
    const ingredient1 =  {
      "_id": "6702b39d76863c206a48cccb",
      "name": "Crimson Lotus",
      "description": "A sacred flower that boosts one's health noticeably.",
      "value": 110,
      "effects": [
        "increase_hit_points"
      ],
      "image": "/images/ingredients/increase/increase_2.webp",
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

    const hasAntidoteName = potionResult.name.includes("Antidote");

    // ASSERT
    expect(hasAntidoteName).toBe(false);

  });

});