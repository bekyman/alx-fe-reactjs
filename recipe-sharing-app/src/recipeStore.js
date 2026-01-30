import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  favorites: [],          // NEW
  recommendations: [],    // NEW

  addRecipe: (newRecipe) =>
    set((state) => {
      const updatedRecipes = [...state.recipes, newRecipe];
      return {
        recipes: updatedRecipes,
        filteredRecipes: filterLogic(updatedRecipes, state.searchTerm),
      };
    }),

  setSearchTerm: (term) =>
    set((state) => ({
      searchTerm: term,
      filteredRecipes: filterLogic(state.recipes, term),
    })),

  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: filterLogic(state.recipes, state.searchTerm),
    })),

  // --- FAVORITES ---
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...state.favorites, recipeId],
    })),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // --- RECOMMENDATIONS ---
  setRecommendations: (recommendedRecipes) =>
    set(() => ({
      recommendations: recommendedRecipes,
    })),
}));

/* Filtering Logic (Reusable & Extendable) */
const filterLogic = (recipes, searchTerm) => {
  if (!searchTerm) return recipes;

  const lowerTerm = searchTerm.toLowerCase();

  return recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(lowerTerm) ||
    recipe.ingredients?.some((ing) =>
      ing.toLowerCase().includes(lowerTerm)
    ) ||
    (recipe.prepTime &&
      recipe.prepTime.toString().includes(lowerTerm))
  );
};
