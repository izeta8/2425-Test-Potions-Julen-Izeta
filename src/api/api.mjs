

export const getIngredients = async () => {
  try {
    let response = await fetch("https://kaotika-server.fly.dev/ingredients");
    let json = await response.json();
    let ingredients = json.data;
    return ingredients;
  } catch (error) {
    console.error("Failed to fetch ingredients:", error);
    throw error;
  }
}

export const getDiseases = async () => {
  try {
    let response = await fetch("https://kaotika-server.fly.dev/diseases");
    let json = await response.json();
    let ingredients = json.data;
    return ingredients;
  } catch (error) {
    console.error("Failed to fetch diseases:", error);
    throw error;
  }
}


export const getPlayerData = async () => {
  try {
    let response = await fetch("https://kaotika-server.fly.dev/players/email/julen.izeta@ikasle.aeg.eus");
    let json = await response.json();
    let ingredients = json.data;
    return ingredients;
  } catch (error) {
    console.error("Failed to fetch diseases:", error);
    throw error;
  }
}
