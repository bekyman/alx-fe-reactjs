import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  // ... other existing state ...

  // 1. State: Holds the current value of the search input
  searchTerm: '',

  // 2. Action: Updates the search term when the user types
  setSearchTerm: (term) => set({ searchTerm: term }),

  // ... other existing actions ...
}));

export default useRecipeStore;
