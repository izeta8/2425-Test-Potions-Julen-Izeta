
import Cauldron from "../classes/cauldron.mjs"
import PotionIngredients from "../classes/ingredients.mjs";
import {diseases} from '../api/diseases.mjs';
import {playerData} from '../api/playerData.mjs';


describe('When all the effects are associated with decrease.', () => {
  describe('When all hte ingredients have the same HP attributes', () => {
    
    describe('When the number of the ingredients is 2', () => {
      it('The value of the result will be the sum of the ingredient values +20%', () => {

        // ARRANGE
        const ingredient1 = {
          "_id": "6702b3b776863c206a48ccd0",
          "name": "Venomroot",
          "description": "A dark root that slowly diminishes the user's hit points over time.",
          "value": 105,
          "effects": [
            "decrease_hit_points"
          ],
          "image": "/images/ingredients/decrease/decrease_2.webp",
          "type": "ingredient"
        };

        const ingredient2 = {
          "_id": "6702b3b776863c206a48ccd0",
          "name": "Venomroot",
          "description": "A dark root that slowly diminishes the user's hit points over time.",
          "value": 105,
          "effects": [
            "decrease_hit_points"
          ],
          "image": "/images/ingredients/decrease/decrease_2.webp",
          "type": "ingredient"
        };

        const selectedIngredients = [ingredient1, ingredient2];

        // ACT
        const ingredientsForPotion = PotionIngredients.load(selectedIngredients);
        
        const cauldron = new Cauldron(ingredientsForPotion, diseases, playerData);
        const ingredients = cauldron.ingredients.ingredients;
        const potionResult = cauldron.createPotion(ingredients);

        // Normal: +15
        const expectedValue = (-15 + -15) * 1.2;

        // ASSERT
        expect(potionResult).toBe(expectedValue);
      });
    });

    describe('When the number of the ingredients is 3', () => {
      it('The value of the result will be the sum of the ingredient values +20%', () => {

        // ARRANGE
        const ingredient1 = {
          "_id": "6702b3b776863c206a48ccd0",
          "name": "Venomroot",
          "description": "A dark root that slowly diminishes the user's hit points over time.",
          "value": 105,
          "effects": [
            "decrease_hit_points"
          ],
          "image": "/images/ingredients/decrease/decrease_2.webp",
          "type": "ingredient"
        };


        const selectedIngredients = [ingredient1];

        // ACT
        const ingredientsForPotion = PotionIngredients.load(selectedIngredients);
        
        const cauldron = new Cauldron(ingredientsForPotion, diseases, playerData);
        const ingredients = cauldron.ingredients.ingredients;
        const potionResult = cauldron.createPotion(ingredients);

        // Normal: -15
        const expectedValue = (-15 -15 -15) * 1.4;

        // ASSERT
        expect(potionResult).toBe(expectedValue);
      });
    });

    describe('When the number of the ingredients is 4', () => {
      it('The value of the result will be the sum of the ingredient values +20%', () => {

        // ARRANGE
        const ingredient1 = {
          "_id": "6702b3b776863c206a48ccd0",
          "name": "Venomroot",
          "description": "A dark root that slowly diminishes the user's hit points over time.",
          "value": 105,
          "effects": [
            "decrease_hit_points"
          ],
          "image": "/images/ingredients/decrease/decrease_2.webp",
          "type": "ingredient"
        };

        const selectedIngredients = [ingredient1, ingredient1, ingredient1, ingredient1];

        // ACT
        const ingredientsForPotion = PotionIngredients.load(selectedIngredients);
        
        const cauldron = new Cauldron(ingredientsForPotion, diseases, playerData);
        const ingredients = cauldron.ingredients.ingredients;
        const potionResult = cauldron.createPotion(ingredients);

        // Normal: -15
        const expectedValue = (-15 -15 -15 -15) * 1.8;

        // ASSERT
        expect(potionResult).toBe(expectedValue);
      });
    });

    describe('If the number of ingredients is less than 2 and greater than 4', () => {
      it('We cant create essence. The potion wont have the word essence.', () => {

        // ARRANGE
        const ingredient1 = {
          "_id": "6702b3b776863c206a48ccd0",
          "name": "Venomroot",
          "description": "A dark root that slowly diminishes the user's hit points over time.",
          "value": 105,
          "effects": [
            "decrease_hit_points"
          ],
          "image": "/images/ingredients/decrease/decrease_2.webp",
          "type": "ingredient"
        };

        const selectedIngredients = [ingredient1];

        // ACT
        const ingredientsForPotion = PotionIngredients.load(selectedIngredients);
        
        const cauldron = new Cauldron(ingredientsForPotion, diseases, playerData);
        const ingredients = cauldron.ingredients.ingredients;
        const potionResult = cauldron.createPotion(ingredients);
        const potionName = potionResult.name;

        const hasEssence = potionName.includes("Stench");

        // ASSERT
        expect(hasEssence).toBe(false);
      });
    });


  });
});
