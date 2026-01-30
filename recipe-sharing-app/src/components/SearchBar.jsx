import { useRecipeStore } from '../recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
  const searchTerm = useRecipeStore((state) => state.searchTerm);

  return (
    <input
      type="text"
      placeholder="Search by name, ingredient, or prep time..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{ padding: '8px', width: '100%', marginBottom: '16px' }}
    />
  );
};

export default SearchBar;
