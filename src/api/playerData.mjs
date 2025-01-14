export let playerData = {
  "attributes": {
    "intelligence": 62,
    "dexterity": 33,
    "charisma": 33,
    "constitution": 16,
    "strength": 16,
    "insanity": 25
  },
  "equipment": {
    "helmet": {
      "modifiers": {
        "intelligence": 0,
        "dexterity": 0,
        "constitution": 5,
        "insanity": 5,
        "charisma": 10,
        "strength": 0
      },
      "_id": "67615f0d317c38e05431c527",
      "name": "Mask of Whispered Lies",
      "description": "Hides faces and words, sowing doubt among allies and foes alike.",
      "type": "helmet",
      "image": "/images/betrayar/mask.png",
      "value": 20,
      "defense": 1,
      "min_lvl": 1,
      "isUnique": true,
      "isActive": false
    },
    "weapon": {
      "modifiers": {
        "intelligence": 0,
        "dexterity": 0,
        "constitution": 5,
        "insanity": 30,
        "charisma": 10,
        "strength": 0
      },
      "_id": "67616050317c38e05431c530",
      "name": "Dagger of Venomous Promises",
      "description": "A poisoned blade that cuts through both flesh and trust.",
      "type": "weapon",
      "image": "/images/betrayar/weapon.png",
      "value": 60,
      "base_percentage": 40,
      "min_lvl": 2,
      "die_faces": 100,
      "die_modifier": 0,
      "die_num": 1,
      "isUnique": true,
      "isActive": false
    },
    "armor": {
      "modifiers": {
        "strength": 0,
        "constitution": 10,
        "dexterity": 0,
        "intelligence": 0,
        "insanity": 5,
        "charisma": 10
      },
      "_id": "67615e61317c38e05431c523",
      "name": "Blouse of Decaying Vows",
      "description": "Its rotted seams still carry the weight of broken oaths and betrayed promises.",
      "type": "armor",
      "image": "/images/betrayar/blouse.png",
      "value": 50,
      "defense": 1,
      "isUnique": true,
      "isActive": false,
      "min_lvl": 1
    },
    "shield": {
      "modifiers": {
        "intelligence": 0,
        "dexterity": 0,
        "constitution": 5,
        "insanity": 5,
        "charisma": 10,
        "strength": 0
      },
      "_id": "67615f8d317c38e05431c52b",
      "name": "Shield of Forsaken Oaths",
      "description": "Guards the bearer with the strength of shattered pacts and forgotten loyalties.",
      "type": "shield",
      "image": "/images/betrayar/shield.png",
      "value": 15,
      "defense": 1,
      "min_lvl": 1,
      "isUnique": true,
      "isActive": false
    },
    "artifact": {
      "modifiers": {
        "intelligence": 0,
        "dexterity": 0,
        "constitution": 5,
        "insanity": 5,
        "charisma": 10,
        "strength": 0
      },
      "_id": "676161cc317c38e05431c546",
      "name": "Artifact of the Withered Pact",
      "description": "A corrupted relic that devours the will of those who dare to trust.",
      "type": "artifact",
      "image": "/images/betrayar/artifact.png",
      "value": 10,
      "min_lvl": 1,
      "isActive": false,
      "isUnique": true
    },
    "boot": {
      "modifiers": {
        "intelligence": 0,
        "dexterity": 0,
        "constitution": 5,
        "insanity": 5,
        "charisma": 10,
        "strength": 0
      },
      "_id": "676160cd317c38e05431c534",
      "name": "Boots of Silent Betrayal",
      "description": "Leave invisible tracks in the mire of disloyalty and deceit.",
      "type": "boot",
      "image": "/images/betrayar/boot.png",
      "value": 20,
      "defense": 1,
      "min_lvl": 1,
      "isActive": false,
      "isUnique": true
    },
    "ring": {
      "modifiers": {
        "intelligence": 0,
        "dexterity": 0,
        "constitution": 5,
        "insanity": 5,
        "charisma": 10,
        "strength": 0
      },
      "_id": "67616170317c38e05431c542",
      "name": "Ring of Shadowed Allegiances",
      "description": "Its dark gleam binds the wearer to hidden forces and forbidden pacts.",
      "type": "ring",
      "image": "/images/betrayar/ring.png",
      "value": 35,
      "min_lvl": 1,
      "isUnique": true,
      "isActive": false
    },
    "antidote_potion": {
      "modifiers": {
        "hit_points": 0,
        "intelligence": 0,
        "dexterity": 0,
        "constitution": 0,
        "insanity": -7,
        "charisma": 9,
        "strength": 0
      },
      "_id": "668bca125319ea9afdff0764",
      "name": "Antidote of Wailing Plague",
      "description": "A cooling elixir brewed from the leaves of the Frostmind plant, alleviating migraines and clearing hallucinations.",
      "type": "antidote",
      "image": "/images/equipment/potions/antidote/antidote_3.png",
      "value": 10,
      "recovery_effect": {
        "modifiers": {
          "hit_points": 0,
          "intelligence": 0,
          "dexterity": 0,
          "insanity": 7,
          "charisma": -9,
          "constitution": 0,
          "strength": 0
        },
        "_id": "6693fd5846527d0df5f0efe9",
        "name": "Wailing Plague",
        "description": "An infectious disease that causes the afflicted to uncontrollably wail in pain, spreading misery and despair.",
        "type": "illness",
        "antidote_effects": [
          "lesser_restore_insanity",
          "lesser_restore_charisma"
        ],
        "poison_effects": [
          "lesser_damage_insanity",
          "lesser_damage_charisma"
        ]
      },
      "min_lvl": 1
    },
    "healing_potion": {
      "modifiers": {
        "hit_points": 70,
        "intelligence": -15,
        "dexterity": 0,
        "constitution": 0,
        "insanity": 0,
        "charisma": 0,
        "strength": 0
      },
      "_id": "668bca125319ea9afdff0759",
      "name": "Essence of Restoration",
      "description": "The Essence of Restoration is a potent elixir that accelerates healing and revitalizes the body.",
      "type": "essence",
      "image": "/images/equipment/potions/healing/healing_3.png",
      "value": 10,
      "min_lvl": 1
    },
    "enhancer_potion": {
      "modifiers": {
        "intelligence": 0,
        "dexterity": 0,
        "constitution": 0,
        "insanity": 0,
        "charisma": 0,
        "strength": 20
      },
      "_id": "668bca125319ea9afdff0767",
      "name": "Elixir of Increase Strength",
      "description": "This robust elixir temporarily amplifies the drinker's physical power, significantly boosting muscle strength and stamina.\n\n\n",
      "type": "elixir",
      "image": "/images/equipment/potions/enhancer/enhancer_1.png",
      "value": 10,
      "duration": 2,
      "min_lvl": 1
    }
  },
  "inventory": {
    "helmets": [],
    "weapons": [],
    "armors": [],
    "shields": [],
    "artifacts": [],
    "boots": [],
    "rings": [],
    "antidote_potions": [],
    "healing_potions": [],
    "enhancer_potions": [],
    "ingredients": [
      {
        "_id": "6702b46b76863c206a48ccfb",
        "name": "Sickly Sap",
        "description": "A viscous sap that slows movement and reduces dexterity.",
        "value": 175,
        "effects": [
          "greater_damage_dexterity"
        ],
        "image": "/images/ingredients/damage/damage_9.webp",
        "type": "ingredient",
        "qty": 1
      },
      {
        "_id": "6702b46b76863c206a48cd0e",
        "name": "Defenseless Herb",
        "description": "A herb that leaves the user vulnerable by reducing constitution.",
        "value": 12,
        "effects": [
          "least_damage_constitution"
        ],
        "image": "/images/ingredients/damage/damage_28.webp",
        "type": "ingredient",
        "qty": 1
      },
      {
        "_id": "6702b46b76863c206a48ccf5",
        "name": "Tainted Thorn",
        "description": "A thorn that inflicts pain and weakens dexterity.",
        "value": 5,
        "effects": [
          "least_damage_dexterity"
        ],
        "image": "/images/ingredients/damage/damage_3.webp",
        "type": "ingredient",
        "qty": 1
      },
      {
        "_id": "6702b46b76863c206a48cd0b",
        "name": "Charmbreaker Herb",
        "description": "An herb that disrupts charm, making the user less appealing.",
        "value": 10,
        "effects": [
          "least_damage_charisma"
        ],
        "image": "/images/ingredients/damage/damage_25.webp",
        "type": "ingredient",
        "qty": 1
      },
      {
        "_id": "6702b46b76863c206a48ccf6",
        "name": "Doomroot",
        "description": "A deadly root that drains the constitution of those who consume it.",
        "value": 270,
        "effects": [
          "greater_damage_constitution"
        ],
        "image": "/images/ingredients/damage/damage_4.webp",
        "type": "ingredient",
        "qty": 1
      },
      {
        "_id": "6702b46b76863c206a48ccf9",
        "name": "Brute's Bane",
        "description": "A potent toxin that saps strength from even the mightiest foes.",
        "value": 80,
        "effects": [
          "damage_strength"
        ],
        "image": "/images/ingredients/damage/damage_7.webp",
        "type": "ingredient",
        "qty": 1
      },
      {
        "_id": "6702b46b76863c206a48ccf3",
        "name": "Wraith's Essence",
        "description": "An essence that corrupts hit points and drains life force.",
        "value": 220,
        "effects": [
          "greater_damage_hit_points"
        ],
        "image": "/images/ingredients/damage/damage_1.webp",
        "type": "ingredient",
        "qty": 1
      },
      {
        "_id": "6702b46b76863c206a48ccf8",
        "name": "Foul Nectar",
        "description": "A sickly nectar that erodes charisma and social grace.",
        "value": 55,
        "effects": [
          "damage_charisma"
        ],
        "image": "/images/ingredients/damage/damage_6.webp",
        "type": "ingredient",
        "qty": 1
      },
      {
        "_id": "6702b46b76863c206a48ccfc",
        "name": "Crimson Toxin",
        "description": "A potent poison derived from rare red flowers that can weaken even the strongest warriors.",
        "value": 30,
        "effects": [
          "lesser_damage_strength"
        ],
        "image": "/images/ingredients/damage/damage_10.webp",
        "type": "ingredient",
        "qty": 1
      },
      {
        "_id": "6702b46b76863c206a48ccfe",
        "name": "Elixir of Despair",
        "description": "An elixir that heightens feelings of insanity, shattering sanity.",
        "value": 40,
        "effects": [
          "lesser_damage_insanity"
        ],
        "image": "/images/ingredients/damage/damage_12.webp",
        "type": "ingredient",
        "qty": 1
      },
      {
        "_id": "6702b46b76863c206a48cd01",
        "name": "Wraith's Thorn",
        "description": "A sinister plant with barbed thorns that can sap the strength of its victims upon contact.",
        "value": 5,
        "effects": [
          "least_damage_strength"
        ],
        "image": "/images/ingredients/damage/damage_15.webp",
        "type": "ingredient",
        "qty": 1
      },
      {
        "_id": "6702b46b76863c206a48ccf7",
        "name": "Madness Vine",
        "description": "A vine that induces insanity, twisting the mind of its victims.",
        "value": 10,
        "effects": [
          "least_damage_insanity"
        ],
        "image": "/images/ingredients/damage/damage_5.webp",
        "type": "ingredient",
        "qty": 1
      },
      {
        "_id": "6702b46b76863c206a48cd03",
        "name": "Constitution Siphon",
        "description": "An ingredient that drains constitution, leaving the user feeble.",
        "value": 35,
        "effects": [
          "lesser_constitution"
        ],
        "image": "/images/ingredients/damage/damage_17.webp",
        "type": "ingredient",
        "qty": 1
      },
      {
        "_id": "6702b46b76863c206a48cd0c",
        "name": "The Sorrowful Bloom",
        "description": "A flower that enhances insanity and breaks the spirit.",
        "value": 65,
        "effects": [
          "damage_insanity"
        ],
        "image": "/images/ingredients/damage/damage_26.webp",
        "type": "ingredient",
        "qty": 1
      },
      {
        "_id": "6702b46b76863c206a48cd08",
        "name": "Twisted Vine",
        "description": "A vine that weakens dexterity and disrupts graceful movements.",
        "value": 55,
        "effects": [
          "damage_dexterity"
        ],
        "image": "/images/ingredients/damage/damage_22.webp",
        "type": "ingredient",
        "qty": 1
      },
      {
        "_id": "6702b46b76863c206a48cd06",
        "name": "Enfeebling Essence",
        "description": "A dark essence that weakens strength, rendering users helpless.",
        "value": 230,
        "effects": [
          "greater_damage_strength"
        ],
        "image": "/images/ingredients/damage/damage_20.webp",
        "type": "ingredient",
        "qty": 1
      },
      {
        "_id": "6702b46b76863c206a48ccfa",
        "name": "Distraction Herb",
        "description": "A herb that confuses the mind, causing intelligence to falter.",
        "value": 35,
        "effects": [
          "lesser_damage_intelligence"
        ],
        "image": "/images/ingredients/damage/damage_8.webp",
        "type": "ingredient",
        "qty": 1
      },
      {
        "_id": "6702b46b76863c206a48cd00",
        "name": "Shadowbane Essence",
        "description": "An extract from dark fruits that lowers vitality and leaves a bitter aftertaste.",
        "value": 90,
        "effects": [
          "lesser_damage_hit_points"
        ],
        "image": "/images/ingredients/damage/damage_14.webp",
        "type": "ingredient",
        "qty": 1
      },
      {
        "_id": "6702b46b76863c206a48ccfd",
        "name": "Crippling Bloom",
        "description": "A flower that weakens constitution and breaks the will of its user.",
        "value": 60,
        "effects": [
          "damage_constitution"
        ],
        "image": "/images/ingredients/damage/damage_11.webp",
        "type": "ingredient",
        "qty": 1
      },
      {
        "_id": "6702b46b76863c206a48cd05",
        "name": "Gloom Petal",
        "description": "A petal that shrouds charisma in shadows, making one unlikable.",
        "value": 160,
        "effects": [
          "greater_damage_charisma"
        ],
        "image": "/images/ingredients/damage/damage_19.webp",
        "type": "ingredient",
        "qty": 1
      },
      {
        "_id": "6702b46b76863c206a48cd09",
        "name": "Vitality Drain",
        "description": "An extract that drains hit points steadily from its target.",
        "value": 85,
        "effects": [
          "damage_hit_points"
        ],
        "image": "/images/ingredients/damage/damage_23.webp",
        "type": "ingredient",
        "qty": 1
      },
      {
        "_id": "6702b46b76863c206a48ccff",
        "name": "Charm's Demise",
        "description": "An ingredient that diminishes charisma, making one less appealing.",
        "value": 40,
        "effects": [
          "lesser_damage_charisma"
        ],
        "image": "/images/ingredients/damage/damage_13.webp",
        "type": "ingredient",
        "qty": 1
      },
      {
        "_id": "6702b46b76863c206a48cd04",
        "name": "Anxiety Herb",
        "description": "A herb that increases feelings of insanity and paranoia.",
        "value": 225,
        "effects": [
          "greater_damage_insanity"
        ],
        "image": "/images/ingredients/damage/damage_18.webp",
        "type": "ingredient",
        "qty": 1
      },
      {
        "_id": "6702b46b76863c206a48ccf4",
        "name": "Cursed Blossom",
        "description": "A flower that sows doubt, reducing intelligence in its victims.",
        "value": 50,
        "effects": [
          "damage_intelligence"
        ],
        "image": "/images/ingredients/damage/damage_2.webp",
        "type": "ingredient",
        "qty": 1
      },
      {
        "_id": "6702b46b76863c206a48cd02",
        "name": "Slowpoke Leaf",
        "description": "A leaf that impedes movement and reduces dexterity.",
        "value": 38,
        "effects": [
          "lesser_damage_dexterity"
        ],
        "image": "/images/ingredients/damage/damage_16.webp",
        "type": "ingredient",
        "qty": 1
      },
      {
        "_id": "6702b46b76863c206a48cd07",
        "name": "Brain Rot",
        "description": "A toxin that slowly erodes intelligence, leaving a dull mind.",
        "value": 12,
        "effects": [
          "least_damage_intelligence"
        ],
        "image": "/images/ingredients/damage/damage_21.webp",
        "type": "ingredient",
        "qty": 1
      },
      {
        "_id": "6702b46b76863c206a48cd0a",
        "name": "Vile Nightshade",
        "description": "A dark herb known for its ability to sap the life force of those who consume it.",
        "value": 8,
        "effects": [
          "least_damage_hit_points"
        ],
        "image": "/images/ingredients/damage/damage_24.webp",
        "type": "ingredient",
        "qty": 1
      },
      {
        "_id": "6702b46b76863c206a48cd0d",
        "name": "Wretched Extract",
        "description": "An extract that plagues the mind, causing loss of intelligence.",
        "value": 275,
        "effects": [
          "greater_damage_intelligence"
        ],
        "image": "/images/ingredients/damage/damage_27.webp",
        "type": "ingredient",
        "qty": 1
      }
    ]
  },
  "_id": "66dec9124c27dff822d8032d",
  "name": "JULEN IZETA BALENTZIAGA",
  "nickname": "Izeta",
  "email": "julen.izeta@ikasle.aeg.eus",
  "avatar": "https://lh3.googleusercontent.com/a/ACg8ocIWPV28aeLsP20wDM8j0pzjPVb5EU0vXvmo6Az_Vf8wuMdn=s96-c",
  "classroom_Id": "102135547251726515154",
  "level": 18,
  "experience": 31210,
  "is_active": true,
  "profile": {
    "_id": "6687c31b7a5ce485a0eed476",
    "name": "Scholar",
    "description": "In silent libraries and secret laboratories, the Scholar spends his days immersed in knowledge. With a brilliant mind and insatiable curiosity, he seeks to understand the mysteries of the universe and unravel the secrets hidden in ancient texts. His intelligence is his greatest weapon, capable of solving complex puzzles and devising ingenious strategies. Though he does not excel in physical strength, his insight and wisdom make him an invaluable ally. The Scholar is a beacon of light in the darkness, guided by the desire for knowledge and truth.",
    "image": "/images/profiles/scholar.jpg",
    "attributes": [
      {
        "_id": "678628fea71f3c14054c45cb",
        "name": "Intelligence",
        "description": "The intelligence controls the chance of success when using a potion",
        "value": 30
      },
      {
        "_id": "678628fea71f3c14054c45cc",
        "name": "Dexterity",
        "description": "Manages the chance of success when using a melee weapon and the damage a missile weapon does",
        "value": 15
      },
      {
        "_id": "678628fea71f3c14054c45cd",
        "name": "Insanity",
        "description": "Indicates the state of mental health of an adventurer. If the insanity is high, there will be more chance to make a fumble of a critical hit, and the resulting damage will be more critical. If the insanity is low, there will be less chance to make a fumble or a critical hit, and the resulting damage will be less critical",
        "value": 25
      },
      {
        "_id": "678628fea71f3c14054c45ce",
        "name": "Charisma",
        "description": "Indicates the chance to attack first in the next round",
        "value": 15
      },
      {
        "_id": "678628fea71f3c14054c45cf",
        "name": "Constitution",
        "description": "Indicates the number of Hit Points an adventurer starts with",
        "value": 5
      },
      {
        "_id": "678628fea71f3c14054c45d0",
        "name": "Strength",
        "description": "Manages the chance of success when using a melee weapon, and the damage a melee weapon does",
        "value": 5
      }
    ]
  },
  "tasks": [
    {
      "classroomId": "102135547251726515154",
      "courseWorkName": "¿Qué sabes de desarrollo?",
      "grade": 5,
      "selectedAssignment": "696069128911",
      "_id": "66e807444b8a77918f1aa661"
    },
    {
      "classroomId": "102135547251726515154",
      "courseWorkName": "La Hambruna",
      "grade": 20,
      "selectedAssignment": "696068354158",
      "maxPoints": 22,
      "_id": "67090c242cb4a14cd6f7c27e"
    },
    {
      "classroomId": "102135547251726515154",
      "courseWorkName": "El Altar de la Experiencia - The Arrival",
      "grade": 20,
      "selectedAssignment": "685686685180",
      "maxPoints": 40,
      "_id": "67090cae2cb4a14cd6f7c73d"
    },
    {
      "classroomId": "102135547251726515154",
      "courseWorkName": "Simon's Potions Implementation",
      "grade": 25,
      "selectedAssignment": "711980684441",
      "maxPoints": 25,
      "_id": "67090d3bd964b7483432c0dd"
    },
    {
      "classroomId": "102135547251726515154",
      "courseWorkName": "HU -  Authentication & Roles",
      "grade": 5,
      "selectedAssignment": "685768780197",
      "maxPoints": 5,
      "_id": "67090d8bd964b7483432c3c1"
    },
    {
      "classroomId": "102135547251726515154",
      "courseWorkName": "HU - Laboratory Access",
      "grade": 5,
      "selectedAssignment": "717971139101",
      "maxPoints": 5,
      "_id": "67090da3d964b7483432c65c"
    },
    {
      "classroomId": "102135547251726515154",
      "courseWorkName": "La falsificación del Libro de las Caras",
      "grade": 0,
      "selectedAssignment": "696068583613",
      "maxPoints": 12,
      "_id": "67090dc8d964b7483432c936"
    },
    {
      "classroomId": "102135547251726515154",
      "courseWorkName": "El Altar de la Experiencia -  Angelo's Laboratory",
      "grade": 17,
      "selectedAssignment": "709980072206",
      "maxPoints": 40,
      "_id": "67090df2d964b7483432ccfc"
    },
    {
      "classroomId": "102135547251726515154",
      "courseWorkName": "HU - Potions Creation",
      "grade": 5,
      "selectedAssignment": "696068830480",
      "maxPoints": 5,
      "_id": "671639d0c47d87a7d726b8dc"
    },
    {
      "classroomId": "102135547251726515154",
      "courseWorkName": "HU - Advanced Player Profile",
      "grade": 5,
      "selectedAssignment": "686027153267",
      "maxPoints": 5,
      "_id": "671639e1c47d87a7d726bad3"
    },
    {
      "classroomId": "102135547251726515154",
      "courseWorkName": "HU - Map screen",
      "grade": 5,
      "selectedAssignment": "721029623436",
      "maxPoints": 5,
      "_id": "671639eec47d87a7d726bd12"
    },
    {
      "classroomId": "102135547251726515154",
      "courseWorkName": "El destilador de pociones",
      "grade": 12,
      "selectedAssignment": "696069128873",
      "maxPoints": 12,
      "_id": "67163a18c47d87a7d726c0e3"
    },
    {
      "classroomId": "102135547251726515154",
      "courseWorkName": "El Altar de la Experiencia - The Potions Cauldron",
      "grade": 28,
      "selectedAssignment": "696068583674",
      "maxPoints": 40,
      "_id": "67163a37c47d87a7d726c789"
    },
    {
      "classroomId": "102135547251726515154",
      "courseWorkName": "HU -  SECURE TOWER ACCESS",
      "grade": 5,
      "selectedAssignment": "724238580333",
      "maxPoints": 5,
      "_id": "6731bccdf39e8889680122a1"
    },
    {
      "classroomId": "102135547251726515154",
      "courseWorkName": "HU - ARCANE PUSH NOTIFICATIONS",
      "grade": 5,
      "selectedAssignment": "724238452980",
      "maxPoints": 5,
      "_id": "6731bcdbf39e88896801270a"
    },
    {
      "classroomId": "102135547251726515154",
      "courseWorkName": "HU - ACOLYTES IN THE TOWER",
      "grade": 5,
      "selectedAssignment": "724238257455",
      "maxPoints": 5,
      "_id": "6731bceaf39e888968012bbb"
    },
    {
      "classroomId": "102135547251726515154",
      "courseWorkName": "HU - EPIC MQTT BROKER & AWESOME SELF CERTIFICATES",
      "grade": 5,
      "selectedAssignment": "724237654224",
      "maxPoints": 5,
      "_id": "6731bcf9f39e88896801320a"
    },
    {
      "classroomId": "102135547251726515154",
      "courseWorkName": "El Altar de la Experiencia - The Swamp Tower",
      "grade": 8,
      "selectedAssignment": "696068583703",
      "maxPoints": 50,
      "_id": "6731bd0ef39e8889680139e3"
    },
    {
      "classroomId": "102135547251726515154",
      "courseWorkName": "El manual de despliegue",
      "grade": 10,
      "selectedAssignment": "696069128945",
      "maxPoints": 10,
      "_id": "67331da3ed9c944b0984cefe"
    },
    {
      "classroomId": "102135547251726515154",
      "courseWorkName": "Todas las piezas encajan",
      "grade": 9,
      "selectedAssignment": "696068830469",
      "maxPoints": 15,
      "_id": "67331e17447c2302e9867f09"
    },
    {
      "classroomId": "102135547251726515154",
      "courseWorkName": "La Pócima de la Cordura",
      "grade": 10,
      "selectedAssignment": "696068354193",
      "maxPoints": 10,
      "_id": "67331e81447c2302e9868b66"
    },
    {
      "classroomId": "102135547251726515154",
      "courseWorkName": "El Trago Infecto",
      "grade": 40,
      "selectedAssignment": "696068354203",
      "maxPoints": 40,
      "_id": "67331ec7447c2302e9869598"
    },
    {
      "classroomId": "102135547251726515154",
      "courseWorkName": "MORTIMER'S REVELATIONS I // HU - THE SEARCH OF ARCANE ARTIFACTS",
      "grade": 25,
      "selectedAssignment": "696068830536",
      "maxPoints": 25,
      "_id": "673d8cc000a15d40e84a1e46"
    },
    {
      "classroomId": "102135547251726515154",
      "courseWorkName": "HU - THE SEARCH OF ARCANE ARTIFACTS",
      "grade": 15,
      "selectedAssignment": "696068830508",
      "maxPoints": 15,
      "_id": "674073179f0d9d166c718030"
    },
    {
      "classroomId": "102135547251726515154",
      "courseWorkName": "HU - MORTIMER VALIDATES THE SEARCH FOR THE ARTIFACTS",
      "grade": 15,
      "selectedAssignment": "696068830518",
      "maxPoints": 15,
      "_id": "6740732c9f0d9d166c7187e3"
    },
    {
      "classroomId": "102135547251726515154",
      "courseWorkName": "MORTIMER'S REVELATIONS II // HU - MORTIMER VALIDATES THE SEARCH FOR THE ARTIFACTS",
      "grade": 25,
      "selectedAssignment": "696069128970",
      "maxPoints": 25,
      "_id": "674073739f0d9d166c71953b"
    },
    {
      "classroomId": "102135547251726515154",
      "courseWorkName": "El Altar de la Experiencia - Los Artefactos Arcanos",
      "grade": 100,
      "selectedAssignment": "696068830489",
      "maxPoints": 100,
      "_id": "674073dd9f0d9d166c71b157"
    },
    {
      "classroomId": "102135547251726515154",
      "courseWorkName": "HU - THE STORE OF AIVAN THE GREED",
      "grade": 45,
      "selectedAssignment": "727695354428",
      "maxPoints": 100,
      "_id": "6762aedac75271cde0724574"
    },
    {
      "classroomId": "102135547251726515154",
      "courseWorkName": "HU - THE PESTILENTIAL  PARCHMENT",
      "grade": 5,
      "selectedAssignment": "724235843903",
      "maxPoints": 5,
      "_id": "6762b2da6482ab4586e58fae"
    }
  ],
  "gold": 0,
  "created_date": "2024-09-09T10:08:18.304Z",
  "isBetrayer": true
}