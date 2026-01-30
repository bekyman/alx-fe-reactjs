import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  favorites: [],
  recommendations: [],

  /* ---------- Favorites ---------- */
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.includes(recipeId)
        ? state.favorites
        : [...state.favorites, recipeId],
    })),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  /* ---------- Recommendations ---------- */
  generateRecommendations: () => {
    const { recipes, favorites } = get();

    // Basic recommendation strategy:
    // Recommend recipes that share ingredients with favorite recipes
    const favoriteRecipes = recipes.filter((r) =>
      favorites.includes(r.id)
    );

    const favoriteIngredients = new Set(
      favoriteRecipes.flatMap((r) => r.ingredients || [])
    );

    const recommended = recipes.filter(
      (recipe) =>
        !favorites.includes(recipe.id) &&
        recipe.ingredients?.some((ing) =>
          favoriteIngredients.has(ing)
        )
    );

    set({ recommendations: recommended });
  },
}));
