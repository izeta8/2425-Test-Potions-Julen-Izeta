

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
