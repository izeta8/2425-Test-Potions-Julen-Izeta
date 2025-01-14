
import Cauldron from "../classes/cauldron.mjs"
import PotionIngredients from "../classes/ingredients.mjs";
import diseases from '../api/diseases.json' with { type: "json" };
import playerData from '../api/playerData.json' with { type: "json" };

describe('When all the ingredients have effect "Damage"', () => {
  describe('If the ingredients contain enough effects to combat a certain disease, an associated disease will be created', () => {

    it('The name must be the correspondent. Poison of + "disease name"', async () => {
      
      // ARRANGE
      const ingredient1 =  {
        "_id": "6702b46b76863c206a48ccfd",
        "name": "Crippling Bloom",
        "description": "A flower that weakens constitution and breaks the will of its user.",
        "value": 60,
        "effects": [
          "damage_constitution"
        ],
        "image": "/images/ingredients/damage/damage_11.webp",
        "type": "ingredient"
      };

      const ingredient2 =  {
        "_id": "6702b46b76863c206a48cd09",
        "name": "Vitality Drain",
        "description": "An extract that drains hit points steadily from its target.",
        "value": 85,
        "effects": [
          "damage_hit_points"
        ],
        "image": "/images/ingredients/damage/damage_23.webp",
        "type": "ingredient"
      };
  
      const selectedIngredients = [ingredient1, ingredient2];

      // ACT
      const ingredientsForPotion = PotionIngredients.load(selectedIngredients);
      const cauldron = new Cauldron(ingredientsForPotion, diseases, playerData);
      const ingredients = cauldron.ingredients.ingredients;
      const potionResult = cauldron.createPotion(ingredients);

      // ASSERT
      expect(potionResult.name).toBe("Poison of Wormwood Plague");

    });

    it('The attributes will have a random value taking into account the ranges in the documentation table.', async () => {
      
      // ARRANGE
      const ingredient1 =  {
        "_id": "6702b46b76863c206a48ccf4",
        "name": "Cursed Blossom",
        "description": "A flower that sows doubt, reducing intelligence in its victims.",
        "value": 50,
        "effects": [
          "damage_intelligence"
        ],
        "image": "/images/ingredients/damage/damage_2.webp",
        "type": "ingredient"
      };

      const ingredient2 =  {
        "_id": "6702b46b76863c206a48ccfe",
        "name": "Elixir of Despair",
        "description": "An elixir that heightens feelings of insanity, shattering sanity.",
        "value": 40,
        "effects": [
          "lesser_damage_insanity"
        ],
        "image": "/images/ingredients/damage/damage_12.webp",
        "type": "ingredient"
      };
      
      const selectedIngredients = [ingredient1, ingredient2];

      // ACT
      const ingredientsForPotion = PotionIngredients.load(selectedIngredients);
      
      const cauldron = new Cauldron(ingredientsForPotion, diseases, playerData);
      const ingredients = cauldron.ingredients.ingredients;
      const potionResult = cauldron.createPotion(ingredients);

      const intelligence = potionResult.modifier.intelligence;
      const insanity = potionResult.modifier.insanity;

      // ASSERT

      // damage_intelligence: -13 <-> -10
      expect(intelligence).toBeGreaterThanOrEqual(-13);
      expect(intelligence).toBeLessThanOrEqual(-10);

      // lesser_damage_insanity: 6 <-> 12
      expect(insanity).toBeGreaterThanOrEqual(6);
      expect(insanity).toBeLessThanOrEqual(12);

    });
  });
});


describe('If some of the ingredients does not contain the name "Damage"', () => {
 
  it("Cant create a Poison. The name of the potion won't have the word 'Poison'", async () => {
    
    // ARRANGE
    const ingredient1 =  {
      "_id": "6702b46b76863c206a48ccf4",
      "name": "Cursed Blossom",
      "description": "A flower that sows doubt, reducing intelligence in its victims.",
      "value": 50,
      "effects": [
        "damage_intelligence"
      ],
      "image": "/images/ingredients/damage/damage_2.webp",
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

    const hasPoisonName = potionResult.name.includes("Poison");

    // ASSERT
    expect(hasPoisonName).toBe(false);

  });

});