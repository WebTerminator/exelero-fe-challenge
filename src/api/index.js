const request = async (url) => {
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();
  return data;
};

export const getCocktailsByIngredient = (ingredient) =>
  request(`/filter.php?i=${ingredient}`);

export const getCocktailInfo = (cocktail) =>
  request(`/search.php?s=${cocktail}`);
