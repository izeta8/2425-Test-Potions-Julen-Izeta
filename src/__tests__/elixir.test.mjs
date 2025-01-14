
import Cauldron from "../classes/cauldron.mjs"
import PotionIngredients from "../classes/ingredients.mjs";
import {diseases} from '../api/diseases.mjs';
import {playerData} from '../api/playerData.mjs';

describe("When the number of ingredients is 2-4", () => {

  describe("When the effects of the ingredients have the word 'Boost'", () => {
    
    describe("When all the ingredients have the same attribute (Int, Dex...)", () => {
      
      describe("When all the effects are 'least' type", () => {
      
        it('The result of the attribute will be the average values of the ingredients. Once calcultaed the avergae it will be roudned to the fifth multiple below.', async () => {
          
          // ARRANGE
          const ingredient1 = {
            "_id": "6702b4f876863c206a48cd20",
            "name": "Radiant Petal",
            "description": "A petal that enhances charisma with its ethereal glow.",
            "value": 9,
            "effects": [
              "least_boost_charisma"
            ],
            "image": "/images/ingredients/boost/boost_13.webp",
            "type": "ingredient"
          };

          const ingredient2 = {
            "_id": "6702b4f876863c206a48cd20",
            "name": "Radiant Petal",
            "description": "A petal that enhances charisma with its ethereal glow.",
            "value": 9,
            "effects": [
              "least_boost_charisma"
            ],
            "image": "/images/ingredients/boost/boost_13.webp",
            "type": "ingredient"
          };
         
          const selectedIngredients = [ingredient1, ingredient2];

          // ACT
          const ingredientsForPotion = PotionIngredients.load(selectedIngredients);
          const cauldron = new Cauldron(ingredientsForPotion, diseases, playerData);
          const ingredients = cauldron.ingredients.ingredients;
          const potionResult = cauldron.createPotion(ingredients);
          const potionCharisma = potionResult.modifier.charisma;

          // Leats Boost: +5 (Modifier Value)
          // IngredientsAverage: (5+5)/2 = 7.5.
          const potionExpectedValue = 5; // Rounded below 5th multiple

          // ASSERT
          expect(potionExpectedValue).toBe(potionCharisma);

        });

        it('The duration will be the average of the effects durations, rounded below', async () => {
          
          // ARRANGE
          const ingredient1 = {
            "_id": "6702b4f876863c206a48cd20",
            "name": "Radiant Petal",
            "description": "A petal that enhances charisma with its ethereal glow.",
            "value": 9,
            "effects": [
              "least_boost_charisma"
            ],
            "image": "/images/ingredients/boost/boost_13.webp",
            "type": "ingredient"
          };

          const ingredient2 = {
            "_id": "6702b4f876863c206a48cd20",
            "name": "Radiant Petal",
            "description": "A petal that enhances charisma with its ethereal glow.",
            "value": 9,
            "effects": [
              "least_boost_charisma"
            ],
            "image": "/images/ingredients/boost/boost_13.webp",
            "type": "ingredient"
          };
         
          const selectedIngredients = [ingredient1, ingredient2];

          // ACT
          const ingredientsForPotion = PotionIngredients.load(selectedIngredients);
          const cauldron = new Cauldron(ingredientsForPotion, diseases, playerData);
          const ingredients = cauldron.ingredients.ingredients;
          const potionResult = cauldron.createPotion(ingredients);
          const potionDuration = potionResult.duration; // 1

          // Least boost: 1 (Duration)
          // Duration average: (1+1)/2;
          const potionExpectedDuration = 1;

          // ASSERT
          expect(potionDuration).toBe(potionExpectedDuration);

        });

      });

      describe("When all the effects are 'lesser' type", () => {
      
        it('The result of the attribute will be the average values of the ingredients. Once calcultaed the avergae it will be roudned to the fifth multiple below.', async () => {
          
          // ARRANGE
          const ingredient1 = {
            "_id": "6702b4f876863c206a48cd17",
            "name": "Moonshade Petal",
            "description": "A petal that enhances charisma under the light of the moon.",
            "value": 38,
            "effects": [
              "lesser_boost_charisma"
            ],
            "image": "/images/ingredients/boost/boost_4.webp",
            "type": "ingredient"
          };      

          const ingredient2 = {
            "_id": "6702b4f876863c206a48cd17",
            "name": "Moonshade Petal",
            "description": "A petal that enhances charisma under the light of the moon.",
            "value": 38,
            "effects": [
              "lesser_boost_charisma"
            ],
            "image": "/images/ingredients/boost/boost_4.webp",
            "type": "ingredient"
          };
         
          const selectedIngredients = [ingredient1, ingredient2];

          // ACT
          const ingredientsForPotion = PotionIngredients.load(selectedIngredients);
          const cauldron = new Cauldron(ingredientsForPotion, diseases, playerData);
          const ingredients = cauldron.ingredients.ingredients;
          const potionResult = cauldron.createPotion(ingredients);
          const potionCharisma = potionResult.modifier.charisma;

          // Lesser Boost: +10 (Modifier Value)
          // IngredientsAverage: (10+10)/2 = 10.
          const potionExpectedValue = 10; // Rounded below 5th multiple

          // ASSERT
          expect(potionExpectedValue).toBe(potionCharisma);

        });

        it('The duration will be the average of the effects durations, rounded below', async () => {
          
          // ARRANGE
          const ingredient1 = {
            "_id": "6702b4f876863c206a48cd17",
            "name": "Moonshade Petal",
            "description": "A petal that enhances charisma under the light of the moon.",
            "value": 38,
            "effects": [
              "lesser_boost_charisma"
            ],
            "image": "/images/ingredients/boost/boost_4.webp",
            "type": "ingredient"
          };      

          const ingredient2 = {
            "_id": "6702b4f876863c206a48cd17",
            "name": "Moonshade Petal",
            "description": "A petal that enhances charisma under the light of the moon.",
            "value": 38,
            "effects": [
              "lesser_boost_charisma"
            ],
            "image": "/images/ingredients/boost/boost_4.webp",
            "type": "ingredient"
          };
         
          const selectedIngredients = [ingredient1, ingredient2];

          // ACT
          const ingredientsForPotion = PotionIngredients.load(selectedIngredients);
          const cauldron = new Cauldron(ingredientsForPotion, diseases, playerData);
          const ingredients = cauldron.ingredients.ingredients;
          const potionResult = cauldron.createPotion(ingredients);
          const potionDuration = potionResult.duration;

          // Lesser boost: 1 (Duration)
          // Duration average: (1+1)/2;
          const potionExpectedDuration = 1;

          // ASSERT
          expect(potionDuration).toBe(potionExpectedDuration);

        });

      });

      describe("When all the effects are normal type", () => {
      
        it('The result of the attribute will be the average values of the ingredients. Once calcultaed the avergae it will be roudned to the fifth multiple below.', async () => {
          
          // ARRANGE
          const ingredient1 = {
            "_id": "6702b4f876863c206a48cd16",
            "name": "Golden Ginseng",
            "description": "A golden root that enhances physical vitality.",
            "value": 85,
            "effects": [
              "boost_constitution"
            ],
            "image": "/images/ingredients/boost/boost_3.webp",
            "type": "ingredient"
          };
          
          const ingredient2 = {
            "_id": "6702b4f876863c206a48cd1a",
            "name": "Dwarven Pepper",
            "description": "A spicy pepper that boosts constitution and endurance.",
            "value": 55,
            "effects": [
              "boost_constitution"
            ],
            "image": "/images/ingredients/boost/boost_7.webp",
            "type": "ingredient"
          };
          
          const ingredient3 =  {
            "_id": "6702b4f876863c206a48cd1f",
            "name": "Willow Spark",
            "description": "A crackling herb that boosts constitution.",
            "value": 45,
            "effects": [
              "boost_constitution"
            ],
            "image": "/images/ingredients/boost/boost_12.webp",
            "type": "ingredient"
          };
          
         
          const selectedIngredients = [ingredient1, ingredient2, ingredient3];

          // ACT
          const ingredientsForPotion = PotionIngredients.load(selectedIngredients);
          const cauldron = new Cauldron(ingredientsForPotion, diseases, playerData);
          const ingredients = cauldron.ingredients.ingredients;
          const potionResult = cauldron.createPotion(ingredients);
          const potionConsitution = potionResult.modifier.constitution;

          // (Normal) Boost: +15 (Modifier Value)
          // IngredientsAverage: (15+15+15)/3 = 15.
          const potionExpectedValue = 15; // Rounded below 5th multiple

          // ASSERT
          expect(potionExpectedValue).toBe(potionConsitution);

        });

        it('The duration will be the average of the effects durations, rounded below', async () => {
          
          // ARRANGE
          const ingredient1 = {
            "_id": "6702b4f876863c206a48cd16",
            "name": "Golden Ginseng",
            "description": "A golden root that enhances physical vitality.",
            "value": 85,
            "effects": [
              "boost_constitution"
            ],
            "image": "/images/ingredients/boost/boost_3.webp",
            "type": "ingredient"
          };
          
          const ingredient2 = {
            "_id": "6702b4f876863c206a48cd1a",
            "name": "Dwarven Pepper",
            "description": "A spicy pepper that boosts constitution and endurance.",
            "value": 55,
            "effects": [
              "boost_constitution"
            ],
            "image": "/images/ingredients/boost/boost_7.webp",
            "type": "ingredient"
          };
          
          const ingredient3 =  {
            "_id": "6702b4f876863c206a48cd1f",
            "name": "Willow Spark",
            "description": "A crackling herb that boosts constitution.",
            "value": 45,
            "effects": [
              "boost_constitution"
            ],
            "image": "/images/ingredients/boost/boost_12.webp",
            "type": "ingredient"
          };
         
          const selectedIngredients = [ingredient1, ingredient2, ingredient3];

          // ACT
          const ingredientsForPotion = PotionIngredients.load(selectedIngredients);
          const cauldron = new Cauldron(ingredientsForPotion, diseases, playerData);
          const ingredients = cauldron.ingredients.ingredients;
          const potionResult = cauldron.createPotion(ingredients);
          const potionDuration = potionResult.duration;

          // (Normal) Boost: 2 (Duration)
          // Duration average: (2+2+2)/3;
          const potionExpectedDuration = 2;

          // ASSERT
          expect(potionDuration).toBe(potionExpectedDuration);

        });

      });

      
      describe("When all the effects are 'greater' type", () => {
      
        it('The result of the attribute will be the average values of the ingredients. Once calcultaed the avergae it will be roudned to the fifth multiple below.', async () => {
          
          // ARRANGE
          const ingredient1 = {
            "_id": "6702b4f876863c206a48cd14",
            "name": "Dragonroot",
            "description": "A rare root that grants immense strength when consumed.",
            "value": 275,
            "effects": [
              "greater_boost_strength"
            ],
            "image": "/images/ingredients/boost/boost_1.webp",
            "type": "ingredient"
          };
          
          const ingredient2 = {
            "_id": "6702b4f876863c206a48cd1e",
            "name": "Titan Vine",
            "description": "A sturdy vine that grants the strength of a titan.",
            "value": 230,
            "effects": [
              "greater_boost_strength"
            ],
            "image": "/images/ingredients/boost/boost_11.webp",
            "type": "ingredient"
          };
          
          const selectedIngredients = [ingredient1, ingredient2];

          // ACT
          const ingredientsForPotion = PotionIngredients.load(selectedIngredients);
          const cauldron = new Cauldron(ingredientsForPotion, diseases, playerData);
          const ingredients = cauldron.ingredients.ingredients;
          const potionResult = cauldron.createPotion(ingredients);
          const potionStrength = potionResult.modifier.strength;

          // Greater Boost: 20 (Modifier Value)
          // IngredientsAverage: (20+20)/2 = 20.
          const potionExpectedValue = 20; // Rounded below 5th multiple

          // ASSERT
          expect(potionExpectedValue).toBe(potionStrength);

        });

        it('The duration will be the average of the effects durations, rounded below', async () => {
          
          // ARRANGE
          const ingredient1 = {
            "_id": "6702b4f876863c206a48cd14",
            "name": "Dragonroot",
            "description": "A rare root that grants immense strength when consumed.",
            "value": 275,
            "effects": [
              "greater_boost_strength"
            ],
            "image": "/images/ingredients/boost/boost_1.webp",
            "type": "ingredient"
          };
          
          const ingredient2 = {
            "_id": "6702b4f876863c206a48cd1e",
            "name": "Titan Vine",
            "description": "A sturdy vine that grants the strength of a titan.",
            "value": 230,
            "effects": [
              "greater_boost_strength"
            ],
            "image": "/images/ingredients/boost/boost_11.webp",
            "type": "ingredient"
          };
         
          const selectedIngredients = [ingredient1, ingredient2];

          // ACT
          const ingredientsForPotion = PotionIngredients.load(selectedIngredients);
          const cauldron = new Cauldron(ingredientsForPotion, diseases, playerData);
          const ingredients = cauldron.ingredients.ingredients;
          const potionResult = cauldron.createPotion(ingredients);
          const potionDuration = potionResult.duration;

          // Greater Boost: 3 (Duration)
          // Duration average: (3+3)/2;
          const potionExpectedDuration = 3;

          // ASSERT
          expect(potionDuration).toBe(potionExpectedDuration);

        });

      });

      
      describe("When all the effects are different type", () => {
      
        it('The result of the attribute will be the average values of the ingredients. Once calcultaed the avergae it will be roudned to the fifth multiple below.', async () => {
          
          const ingredient1 = {
            "_id": "6702b4f876863c206a48cd20",
            "name": "Radiant Petal",
            "description": "A petal that enhances charisma with its ethereal glow.",
            "value": 9,
            "effects": [
              "least_boost_charisma"
            ],
            "image": "/images/ingredients/boost/boost_13.webp",
            "type": "ingredient"
          };

          const ingredient2 = {
            "_id": "6702b4f876863c206a48cd17",
            "name": "Moonshade Petal",
            "description": "A petal that enhances charisma under the light of the moon.",
            "value": 38,
            "effects": [
              "lesser_boost_charisma"
            ],
            "image": "/images/ingredients/boost/boost_4.webp",
            "type": "ingredient"
          };

          const ingredient3 = {
            "_id": "6702b4f876863c206a48cd26",
            "name": "Dreamer's Dew",
            "description": "A dewdrop that enhances charisma and inspires dreams.",
            "value": 72,
            "effects": [
              "boost_charisma"
            ],
            "image": "/images/ingredients/boost/boost_19.webp",
            "type": "ingredient"
          };

          const ingredient4 = {
            "_id": "6702b4f876863c206a48cd22",
            "name": "Celestial Orchid",
            "description": "An orchid that grants enhanced charisma during rituals.",
            "value": 160,
            "effects": [
              "greater_boost_charisma"
            ],
            "image": "/images/ingredients/boost/boost_15.webp",
            "type": "ingredient"
          };
          
          const selectedIngredients = [ingredient1, ingredient2, ingredient3, ingredient4];

          // ACT
          const ingredientsForPotion = PotionIngredients.load(selectedIngredients);
          const cauldron = new Cauldron(ingredientsForPotion, diseases, playerData);
          const ingredients = cauldron.ingredients.ingredients;
          const potionResult = cauldron.createPotion(ingredients);
          const potionCharisma = potionResult.modifier.charisma;

          // Least Boost: 5
          // Lesser Boost: 10
          // Normal Boost: 15 
          // Greater Boost: 20
          // IngredientsAverage: (5+10+15+20)/4 = 12.5
          const potionExpectedValue = 10; // Rounded below 5th multiple

          // ASSERT
          expect(potionExpectedValue).toBe(potionCharisma);

        });

        it('The duration will be the average of the effects durations, rounded below', async () => {
          
          // ARRANGE

          const ingredient1 = {
            "_id": "6702b4f876863c206a48cd20",
            "name": "Radiant Petal",
            "description": "A petal that enhances charisma with its ethereal glow.",
            "value": 9,
            "effects": [
              "least_boost_charisma"
            ],
            "image": "/images/ingredients/boost/boost_13.webp",
            "type": "ingredient"
          };

          const ingredient2 = {
            "_id": "6702b4f876863c206a48cd17",
            "name": "Moonshade Petal",
            "description": "A petal that enhances charisma under the light of the moon.",
            "value": 38,
            "effects": [
              "lesser_boost_charisma"
            ],
            "image": "/images/ingredients/boost/boost_4.webp",
            "type": "ingredient"
          };

          const ingredient3 = {
            "_id": "6702b4f876863c206a48cd26",
            "name": "Dreamer's Dew",
            "description": "A dewdrop that enhances charisma and inspires dreams.",
            "value": 72,
            "effects": [
              "boost_charisma"
            ],
            "image": "/images/ingredients/boost/boost_19.webp",
            "type": "ingredient"
          };

          const ingredient4 = {
            "_id": "6702b4f876863c206a48cd22",
            "name": "Celestial Orchid",
            "description": "An orchid that grants enhanced charisma during rituals.",
            "value": 160,
            "effects": [
              "greater_boost_charisma"
            ],
            "image": "/images/ingredients/boost/boost_15.webp",
            "type": "ingredient"
          };
         
          const selectedIngredients = [ingredient1, ingredient2, ingredient3, ingredient4];

          // ACT
          const ingredientsForPotion = PotionIngredients.load(selectedIngredients);
          const cauldron = new Cauldron(ingredientsForPotion, diseases, playerData);
          const ingredients = cauldron.ingredients.ingredients;
          const potionResult = cauldron.createPotion(ingredients);
          const potionDuration = potionResult.duration;

          // Least Boost: 1
          // Lesser Boost: 1
          // Normal Boost: 2
          // Greater Boost: 3
          // Duration average: (1+1+2+3)/4;
          const potionExpectedDuration = 1;

          // ASSERT
          expect(potionDuration).toBe(potionExpectedDuration);

        });

        it('The name of the potion will be: Modifier + Attribute + Elixir', async () => {
          
          // ARRANGE
          const ingredient1 = {
            "_id": "6702b4f876863c206a48cd20",
            "name": "Radiant Petal",
            "description": "A petal that enhances charisma with its ethereal glow.",
            "value": 9,
            "effects": [
              "least_boost_charisma"
            ],
            "image": "/images/ingredients/boost/boost_13.webp",
            "type": "ingredient"
          };

          const ingredient2 = {
            "_id": "6702b4f876863c206a48cd17",
            "name": "Moonshade Petal",
            "description": "A petal that enhances charisma under the light of the moon.",
            "value": 38,
            "effects": [
              "lesser_boost_charisma"
            ],
            "image": "/images/ingredients/boost/boost_4.webp",
            "type": "ingredient"
          };

          const ingredient3 = {
            "_id": "6702b4f876863c206a48cd26",
            "name": "Dreamer's Dew",
            "description": "A dewdrop that enhances charisma and inspires dreams.",
            "value": 72,
            "effects": [
              "boost_charisma"
            ],
            "image": "/images/ingredients/boost/boost_19.webp",
            "type": "ingredient"
          };

          const ingredient4 = {
            "_id": "6702b4f876863c206a48cd22",
            "name": "Celestial Orchid",
            "description": "An orchid that grants enhanced charisma during rituals.",
            "value": 160,
            "effects": [
              "greater_boost_charisma"
            ],
            "image": "/images/ingredients/boost/boost_15.webp",
            "type": "ingredient"
          };
         
          const selectedIngredients = [ingredient1, ingredient2, ingredient3, ingredient4];

          // ACT
          const ingredientsForPotion = PotionIngredients.load(selectedIngredients);
          const cauldron = new Cauldron(ingredientsForPotion, diseases, playerData);
          const ingredients = cauldron.ingredients.ingredients;
          const potionResult = cauldron.createPotion(ingredients);
          const potionName = potionResult.name;

          // ASSERT
          // The value of charisma is 10, so the should be is "Lesser"
          expect(potionName).toBe("Lesser Charisma Elixir");

        });

      });

    });
  
    describe("When not all the ingredients have the same attribute (Int, Dex...)", () => {
    
      it("An elixir can't be created. The name of the potion won't have the word 'Elixir'.", async () => {
      
        // ARRANGE
        const ingredient1 = {
          "_id": "6702b4f876863c206a48cd1f",
          "name": "Willow Spark",
          "description": "A crackling herb that boosts constitution.",
          "value": 45,
          "effects": [
            "boost_constitution"
          ],
          "image": "/images/ingredients/boost/boost_12.webp",
          "type": "ingredient"
        };

        const ingredient2 = {
          "_id": "6702b4f876863c206a48cd24",
          "name": "Firepetal",
          "description": "A fiery petal that enhances strength when consumed.",
          "value": 44,
          "effects": [
            "boost_strength"
          ],
          "image": "/images/ingredients/boost/boost_17.webp",
          "type": "ingredient"
        };
       
        const selectedIngredients = [ingredient1, ingredient2];

        // ACT
        const ingredientsForPotion = PotionIngredients.load(selectedIngredients);
        const cauldron = new Cauldron(ingredientsForPotion, diseases, playerData);
        const ingredients = cauldron.ingredients.ingredients;
        const potionResult = cauldron.createPotion(ingredients);
        const potionName = potionResult.name;

        // ASSERT
        const hasElixirName = potionName.includes("Elixir");
        expect(hasElixirName).toBe(false);

      });

    });

  });

  describe("When the effects of the ingredients have the word 'Calm'", () => {
    
    describe("When all the effects are 'least' type", () => {
    
      it('The result of the attribute will be the average values of the ingredients. Once calcultaed the avergae it will be roudned to the fifth multiple below.', async () => {
        
        // ARRANGE
        const ingredient1 = {
          "_id": "6702b56a76863c206a48cd46",
          "name": "Quieting Root",
          "description": "A root that brings about a gentle peace of mind with every consumption.",
          "value": 6,
          "effects": [
            "least_calm"
          ],
          "image": "/images/ingredients/calm/calm_4.webp",
          "type": "ingredient"
        };

        const ingredient2 = {
          "_id": "6702b56a76863c206a48cd46",
          "name": "Quieting Root",
          "description": "A root that brings about a gentle peace of mind with every consumption.",
          "value": 6,
          "effects": [
            "least_calm"
          ],
          "image": "/images/ingredients/calm/calm_4.webp",
          "type": "ingredient"
        };

        const selectedIngredients = [ingredient1, ingredient2];

        // ACT
        const ingredientsForPotion = PotionIngredients.load(selectedIngredients);
        const cauldron = new Cauldron(ingredientsForPotion, diseases, playerData);
        const ingredients = cauldron.ingredients.ingredients;
        const potionResult = cauldron.createPotion(ingredients);
        const potionInsanity = potionResult.modifier.insanity;

        // Leats Calm: -5 (Modifier Value)
        // IngredientsAverage: (-5+-5)/2 = -5.
        const potionExpectedValue = -5; // Rounded below 5th multiple

        // ASSERT
        expect(potionExpectedValue).toBe(potionInsanity);

      });

      it('The duration will be the average of the effects durations, rounded below', async () => {
        
        // ARRANGE
        const ingredient1 = {
          "_id": "6702b56a76863c206a48cd46",
          "name": "Quieting Root",
          "description": "A root that brings about a gentle peace of mind with every consumption.",
          "value": 6,
          "effects": [
            "least_calm"
          ],
          "image": "/images/ingredients/calm/calm_4.webp",
          "type": "ingredient"
        };

        const ingredient2 = {
          "_id": "6702b56a76863c206a48cd46",
          "name": "Quieting Root",
          "description": "A root that brings about a gentle peace of mind with every consumption.",
          "value": 6,
          "effects": [
            "least_calm"
          ],
          "image": "/images/ingredients/calm/calm_4.webp",
          "type": "ingredient"
        };
        
        const selectedIngredients = [ingredient1, ingredient2];

        // ACT
        const ingredientsForPotion = PotionIngredients.load(selectedIngredients);
        const cauldron = new Cauldron(ingredientsForPotion, diseases, playerData);
        const ingredients = cauldron.ingredients.ingredients;
        const potionResult = cauldron.createPotion(ingredients);
        const potionDuration = potionResult.duration; // 1

        // Least boost: 1 (Duration)
        // Duration average: (1+1)/2;
        const potionExpectedDuration = 1;

        // ASSERT
        expect(potionDuration).toBe(potionExpectedDuration);

      });

    });

    describe("When all the effects are 'lesser' type", () => {
    
      it('The result of the attribute will be the average values of the ingredients. Once calcultaed the avergae it will be roudned to the fifth multiple below.', async () => {
        
        // ARRANGE
        const ingredient1 = {
          "_id": "6702b56a76863c206a48cd45",
          "name": "Peaceful Herb",
          "description": "An herb known for its ability to alleviate stress and minor insanity.",
          "value": 32,
          "effects": [
            "lesser_calm"
          ],
          "image": "/images/ingredients/calm/calm_3.webp",
          "type": "ingredient"
        };

        const ingredient2 = {
          "_id": "6702b56a76863c206a48cd45",
          "name": "Peaceful Herb",
          "description": "An herb known for its ability to alleviate stress and minor insanity.",
          "value": 32,
          "effects": [
            "lesser_calm"
          ],
          "image": "/images/ingredients/calm/calm_3.webp",
          "type": "ingredient"
        };
        
        const selectedIngredients = [ingredient1, ingredient2];

        // ACT
        const ingredientsForPotion = PotionIngredients.load(selectedIngredients);
        const cauldron = new Cauldron(ingredientsForPotion, diseases, playerData);
        const ingredients = cauldron.ingredients.ingredients;
        const potionResult = cauldron.createPotion(ingredients);
        const potionInsanity = potionResult.modifier.insanity;

        // Calm Boost: -10 (Modifier Value)
        // IngredientsAverage: (-10-10)/2 = -10.
        const potionExpectedValue = -10; // Rounded below 5th multiple

        // ASSERT
        expect(potionExpectedValue).toBe(potionInsanity);

      });

      it('The duration will be the average of the effects durations, rounded below', async () => {
        
        // ARRANGE
        const ingredient1 = {
          "_id": "6702b56a76863c206a48cd45",
          "name": "Peaceful Herb",
          "description": "An herb known for its ability to alleviate stress and minor insanity.",
          "value": 32,
          "effects": [
            "lesser_calm"
          ],
          "image": "/images/ingredients/calm/calm_3.webp",
          "type": "ingredient"
        };

        const ingredient2 = {
          "_id": "6702b56a76863c206a48cd45",
          "name": "Peaceful Herb",
          "description": "An herb known for its ability to alleviate stress and minor insanity.",
          "value": 32,
          "effects": [
            "lesser_calm"
          ],
          "image": "/images/ingredients/calm/calm_3.webp",
          "type": "ingredient"
        };
        
        const selectedIngredients = [ingredient1, ingredient2];

        // ACT
        const ingredientsForPotion = PotionIngredients.load(selectedIngredients);
        const cauldron = new Cauldron(ingredientsForPotion, diseases, playerData);
        const ingredients = cauldron.ingredients.ingredients;
        const potionResult = cauldron.createPotion(ingredients);
        const potionDuration = potionResult.duration;

        // Lesser boost: 1 (Duration)
        // Duration average: (1+1)/2;
        const potionExpectedDuration = 1;

        // ASSERT
        expect(potionDuration).toBe(potionExpectedDuration);

      });

    });

    describe("When all the effects are normal type", () => {
    
      it('The result of the attribute will be the average values of the ingredients. Once calcultaed the avergae it will be roudned to the fifth multiple below.', async () => {
        
        // ARRANGE
        const ingredient1 = {
          "_id": "6702b56a76863c206a48cd44",
          "name": "Tranquil Leaf",
          "description": "A calming leaf that restores clarity and reduces madness.",
          "value": 78,
          "effects": [
            "calm"
          ],
          "image": "/images/ingredients/calm/calm_2.webp",
          "type": "ingredient"
        };
        
        const ingredient2 = {
          "_id": "6702b56a76863c206a48cd44",
          "name": "Tranquil Leaf",
          "description": "A calming leaf that restores clarity and reduces madness.",
          "value": 78,
          "effects": [
            "calm"
          ],
          "image": "/images/ingredients/calm/calm_2.webp",
          "type": "ingredient"
        };
          
        const selectedIngredients = [ingredient1, ingredient2];

        // ACT
        const ingredientsForPotion = PotionIngredients.load(selectedIngredients);
        const cauldron = new Cauldron(ingredientsForPotion, diseases, playerData);
        const ingredients = cauldron.ingredients.ingredients;
        const potionResult = cauldron.createPotion(ingredients);
        const potionInsanity = potionResult.modifier.insanity;

        // (Normal) Boost: -15 (Modifier Value)
        // IngredientsAverage: (-15-15-15)/3 = -15.
        const potionExpectedValue = -15; // Rounded below 5th multiple

        // ASSERT
        expect(potionExpectedValue).toBe(potionInsanity);

      });

      it('The duration will be the average of the effects durations, rounded below', async () => {
        
        // ARRANGE
        const ingredient1 = {
          "_id": "6702b56a76863c206a48cd44",
          "name": "Tranquil Leaf",
          "description": "A calming leaf that restores clarity and reduces madness.",
          "value": 78,
          "effects": [
            "calm"
          ],
          "image": "/images/ingredients/calm/calm_2.webp",
          "type": "ingredient"
        };
        
        const ingredient2 = {
          "_id": "6702b56a76863c206a48cd44",
          "name": "Tranquil Leaf",
          "description": "A calming leaf that restores clarity and reduces madness.",
          "value": 78,
          "effects": [
            "calm"
          ],
          "image": "/images/ingredients/calm/calm_2.webp",
          "type": "ingredient"
        };
        
        const selectedIngredients = [ingredient1, ingredient2];

        // ACT
        const ingredientsForPotion = PotionIngredients.load(selectedIngredients);
        const cauldron = new Cauldron(ingredientsForPotion, diseases, playerData);
        const ingredients = cauldron.ingredients.ingredients;
        const potionResult = cauldron.createPotion(ingredients);
        const potionDuration = potionResult.duration;

        // (Normal) Boost: 2 (Duration)
        // Duration average: (2+2+2)/3;
        const potionExpectedDuration = 2;

        // ASSERT
        expect(potionDuration).toBe(potionExpectedDuration);

      });

    });

    
    describe("When all the effects are 'greater' type", () => {
    
      it('The result of the attribute will be the average values of the ingredients. Once calcultaed the avergae it will be roudned to the fifth multiple below.', async () => {
        
        // ARRANGE
        const ingredient1 = {
          "_id": "6702b56a76863c206a48cd43",
          "name": "Serenity Blossom",
          "description": "A rare flower that soothes the mind and banishes feelings of insanity.",
          "value": 250,
          "effects": [
            "greater_calm"
          ],
          "image": "/images/ingredients/calm/calm_1.webp",
          "type": "ingredient"
        };
        
        const ingredient2 = {
          "_id": "6702b56a76863c206a48cd43",
          "name": "Serenity Blossom",
          "description": "A rare flower that soothes the mind and banishes feelings of insanity.",
          "value": 250,
          "effects": [
            "greater_calm"
          ],
          "image": "/images/ingredients/calm/calm_1.webp",
          "type": "ingredient"
        };
        
        const selectedIngredients = [ingredient1, ingredient2];

        // ACT
        const ingredientsForPotion = PotionIngredients.load(selectedIngredients);
        const cauldron = new Cauldron(ingredientsForPotion, diseases, playerData);
        const ingredients = cauldron.ingredients.ingredients;
        const potionResult = cauldron.createPotion(ingredients);
        const potionInsanity = potionResult.modifier.insanity;

        // Greater Boost: -20 (Modifier Value)
        // IngredientsAverage: (-20-20)/2 = -20.
        const potionExpectedValue = -20; // Rounded below 5th multiple

        // ASSERT
        expect(potionExpectedValue).toBe(potionInsanity);

      });

      it('The duration will be the average of the effects durations, rounded below', async () => {
        
        // ARRANGE
        const ingredient1 = {
          "_id": "6702b56a76863c206a48cd43",
          "name": "Serenity Blossom",
          "description": "A rare flower that soothes the mind and banishes feelings of insanity.",
          "value": 250,
          "effects": [
            "greater_calm"
          ],
          "image": "/images/ingredients/calm/calm_1.webp",
          "type": "ingredient"
        };
        
        const ingredient2 = {
          "_id": "6702b56a76863c206a48cd43",
          "name": "Serenity Blossom",
          "description": "A rare flower that soothes the mind and banishes feelings of insanity.",
          "value": 250,
          "effects": [
            "greater_calm"
          ],
          "image": "/images/ingredients/calm/calm_1.webp",
          "type": "ingredient"
        };
        
        const selectedIngredients = [ingredient1, ingredient2];

        // ACT
        const ingredientsForPotion = PotionIngredients.load(selectedIngredients);
        const cauldron = new Cauldron(ingredientsForPotion, diseases, playerData);
        const ingredients = cauldron.ingredients.ingredients;
        const potionResult = cauldron.createPotion(ingredients);
        const potionDuration = potionResult.duration;

        // Greater Boost: 3 (Duration)
        // Duration average: (3+3)/2;
        const potionExpectedDuration = 3;

        // ASSERT
        expect(potionDuration).toBe(potionExpectedDuration);

      });

    });

    
    describe("When all the effects are different type", () => {
    
      it('The result of the attribute will be the average values of the ingredients. Once calcultaed the avergae it will be roudned to the fifth multiple below.', async () => {
        
        const ingredient1 = {
          "_id": "6702b56a76863c206a48cd46",
          "name": "Quieting Root",
          "description": "A root that brings about a gentle peace of mind with every consumption.",
          "value": 6,
          "effects": [
            "least_calm"
          ],
          "image": "/images/ingredients/calm/calm_4.webp",
          "type": "ingredient"
        };

        const ingredient2 = {
          "_id": "6702b56a76863c206a48cd45",
          "name": "Peaceful Herb",
          "description": "An herb known for its ability to alleviate stress and minor insanity.",
          "value": 32,
          "effects": [
            "lesser_calm"
          ],
          "image": "/images/ingredients/calm/calm_3.webp",
          "type": "ingredient"
        };

        const ingredient3 = {
          "_id": "6702b56a76863c206a48cd44",
          "name": "Tranquil Leaf",
          "description": "A calming leaf that restores clarity and reduces madness.",
          "value": 78,
          "effects": [
            "calm"
          ],
          "image": "/images/ingredients/calm/calm_2.webp",
          "type": "ingredient"
        };

        const ingredient4 = {
          "_id": "6702b56a76863c206a48cd43",
          "name": "Serenity Blossom",
          "description": "A rare flower that soothes the mind and banishes feelings of insanity.",
          "value": 250,
          "effects": [
            "greater_calm"
          ],
          "image": "/images/ingredients/calm/calm_1.webp",
          "type": "ingredient"
        };
        
        const selectedIngredients = [ingredient1, ingredient2, ingredient3, ingredient4];

        // ACT
        const ingredientsForPotion = PotionIngredients.load(selectedIngredients);
        const cauldron = new Cauldron(ingredientsForPotion, diseases, playerData);
        const ingredients = cauldron.ingredients.ingredients;
        const potionResult = cauldron.createPotion(ingredients);
        const potionInsanity = potionResult.modifier.insanity;

        // Least Boost: -5
        // Lesser Boost: -10
        // Normal Boost: -15 
        // Greater Boost: -20
        // IngredientsAverage: (-5-10-15-20)/4 = −12.5.
        const potionExpectedValue = -10; // Rounded below 5th multiple

        // ASSERT
        expect(potionExpectedValue).toBe(potionInsanity);

      });

      it('The duration will be the average of the effects durations, rounded below', async () => {
        
        // ARRANGE

        const ingredient1 = {
          "_id": "6702b56a76863c206a48cd46",
          "name": "Quieting Root",
          "description": "A root that brings about a gentle peace of mind with every consumption.",
          "value": 6,
          "effects": [
            "least_calm"
          ],
          "image": "/images/ingredients/calm/calm_4.webp",
          "type": "ingredient"
        };

        const ingredient2 = {
          "_id": "6702b56a76863c206a48cd45",
          "name": "Peaceful Herb",
          "description": "An herb known for its ability to alleviate stress and minor insanity.",
          "value": 32,
          "effects": [
            "lesser_calm"
          ],
          "image": "/images/ingredients/calm/calm_3.webp",
          "type": "ingredient"
        };

        const ingredient3 = {
          "_id": "6702b56a76863c206a48cd44",
          "name": "Tranquil Leaf",
          "description": "A calming leaf that restores clarity and reduces madness.",
          "value": 78,
          "effects": [
            "calm"
          ],
          "image": "/images/ingredients/calm/calm_2.webp",
          "type": "ingredient"
        };

        const ingredient4 = {
          "_id": "6702b56a76863c206a48cd43",
          "name": "Serenity Blossom",
          "description": "A rare flower that soothes the mind and banishes feelings of insanity.",
          "value": 250,
          "effects": [
            "greater_calm"
          ],
          "image": "/images/ingredients/calm/calm_1.webp",
          "type": "ingredient"
        };
        
        const selectedIngredients = [ingredient1, ingredient2, ingredient3, ingredient4];

        // ACT
        const ingredientsForPotion = PotionIngredients.load(selectedIngredients);
        const cauldron = new Cauldron(ingredientsForPotion, diseases, playerData);
        const ingredients = cauldron.ingredients.ingredients;
        const potionResult = cauldron.createPotion(ingredients);
        const potionDuration = potionResult.duration;

        // Least Calm: 1
        // Lesser Calm: 1
        // Normal Calm: 2
        // Greater Calm: 3
        // Duration average: (1+1+2+3)/4;
        const potionExpectedDuration = 1;

        // ASSERT
        expect(potionDuration).toBe(potionExpectedDuration);

      });

      it('The name of the potion will be: Modifier + Attribute + Elixir', async () => {
        
        // ARRANGE
        const ingredient1 = {
          "_id": "6702b4f876863c206a48cd20",
          "name": "Radiant Petal",
          "description": "A petal that enhances charisma with its ethereal glow.",
          "value": 9,
          "effects": [
            "least_boost_charisma"
          ],
          "image": "/images/ingredients/boost/boost_13.webp",
          "type": "ingredient"
        };

        const ingredient2 = {
          "_id": "6702b4f876863c206a48cd17",
          "name": "Moonshade Petal",
          "description": "A petal that enhances charisma under the light of the moon.",
          "value": 38,
          "effects": [
            "lesser_boost_charisma"
          ],
          "image": "/images/ingredients/boost/boost_4.webp",
          "type": "ingredient"
        };

        const ingredient3 = {
          "_id": "6702b4f876863c206a48cd26",
          "name": "Dreamer's Dew",
          "description": "A dewdrop that enhances charisma and inspires dreams.",
          "value": 72,
          "effects": [
            "boost_charisma"
          ],
          "image": "/images/ingredients/boost/boost_19.webp",
          "type": "ingredient"
        };

        const ingredient4 = {
          "_id": "6702b4f876863c206a48cd22",
          "name": "Celestial Orchid",
          "description": "An orchid that grants enhanced charisma during rituals.",
          "value": 160,
          "effects": [
            "greater_boost_charisma"
          ],
          "image": "/images/ingredients/boost/boost_15.webp",
          "type": "ingredient"
        };
        
        const selectedIngredients = [ingredient1, ingredient2, ingredient3, ingredient4];

        // ACT
        const ingredientsForPotion = PotionIngredients.load(selectedIngredients);
        const cauldron = new Cauldron(ingredientsForPotion, diseases, playerData);
        const ingredients = cauldron.ingredients.ingredients;
        const potionResult = cauldron.createPotion(ingredients);
        const potionName = potionResult.name;

        // ASSERT
        // The value of charisma is 10, so the should be is "Lesser"
        expect(potionName).toBe("Lesser Charisma Elixir");

      });

    });

  });

  describe("When some of the effects doesnt have neither 'Calm' nor 'Boost'", () => {

    it("An elixir can't be created. The name of the potion won't have the word 'Elixir'.", async () => {
      
      // ARRANGE
      const ingredient1 = {
        "_id": "6702b4f876863c206a48cd1f",
        "name": "Willow Spark",
        "description": "A crackling herb that boosts constitution.",
        "value": 45,
        "effects": [
          "boost_constitution"
        ],
        "image": "/images/ingredients/boost/boost_12.webp",
        "type": "ingredient"
      };

      const ingredient2 = {
        "_id": "6702b56a76863c206a48cd43",
        "name": "Serenity Blossom",
        "description": "A rare flower that soothes the mind and banishes feelings of insanity.",
        "value": 250,
        "effects": [
          "greater_calm"
        ],
        "image": "/images/ingredients/calm/calm_1.webp",
        "type": "ingredient"
      };

      const ingredient3 = {
        "_id": "6702b51d76863c206a48cd2e",
        "name": "Pale Belladonna",
        "description": "A toxic flower that decreases strength rapidly.",
        "value": 65,
        "effects": [
          "setback_strength"
        ],
        "image": "/images/ingredients/setback/setback_6.webp",
        "type": "ingredient"
      };
     
      const selectedIngredients = [ingredient1, ingredient2, ingredient3];

      // ACT
      const ingredientsForPotion = PotionIngredients.load(selectedIngredients);
      const cauldron = new Cauldron(ingredientsForPotion, diseases, playerData);
      const ingredients = cauldron.ingredients.ingredients;
      const potionResult = cauldron.createPotion(ingredients);
      const potionName = potionResult.name;

      // ASSERT
      const hasElixirName = potionName.includes("Elixir");
      expect(hasElixirName).toBe(false);

    });

  });

});

describe("When the number of ingredients is less than 2 and greater than 4", () => {
  
  describe("When the number of ingredients is less than 2", () => {
    it("An elixir can't be created. Cauldron should throw an exception.", async () => {
      
      try {

        // ARRANGE
        const ingredient1 = {
          "_id": "6702b4f876863c206a48cd1f",
          "name": "Willow Spark",
          "description": "A crackling herb that boosts constitution.",
          "value": 45,
          "effects": [
            "boost_constitution"
          ],
          "image": "/images/ingredients/boost/boost_12.webp",
          "type": "ingredient"
        };
    
        const selectedIngredients = [ingredient1];
    
        // ACT
        const ingredientsForPotion = PotionIngredients.load(selectedIngredients);
        const cauldron = new Cauldron(ingredientsForPotion, diseases, playerData);
        const ingredients = cauldron.ingredients.ingredients;
        const potionResult = cauldron.createPotion(ingredients);

        // ASSERT
        const isValidPotion = typeof potionResult.modifier === "object";
        expect(isValidPotion).toBe(false);
    
      } catch (e) {
        // ASSERT
        expect(e.message).toBe("Se requieren dos, tres o cuatro ingredientes para crear una poción.");
      }

    });
  });

  describe("When the number of ingredients is greater than 4", () => {

    it("An elixir can't be created. Cauldron should throw an exception.", async () => {
      
      try {

        // ARRANGE
        const ingredient1 = {
          "_id": "6702b4f876863c206a48cd1f",
          "name": "Willow Spark",
          "description": "A crackling herb that boosts constitution.",
          "value": 45,
          "effects": [
            "boost_constitution"
          ],
          "image": "/images/ingredients/boost/boost_12.webp",
          "type": "ingredient"
        };
    
        const selectedIngredients = [ingredient1, ingredient1, ingredient1, ingredient1, ingredient1];
    
        // ACT
        const ingredientsForPotion = PotionIngredients.load(selectedIngredients);
        const cauldron = new Cauldron(ingredientsForPotion, diseases, playerData);
        const ingredients = cauldron.ingredients.ingredients;
        const potionResult = cauldron.createPotion(ingredients);

        // ASSERT
        const isValidPotion = typeof potionResult.modifier === "object";
        expect(isValidPotion).toBe(false);
    
      } catch (e) {
        // ASSERT
        expect(e.message).toBe("Se requieren dos, tres o cuatro ingredientes para crear una poción.");
      }

    });

  });

});
