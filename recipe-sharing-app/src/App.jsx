import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

function AppLayout() {
  return (
    <div>
      <FavoritesList />
      <RecommendationsList />
    </div>
  );
}

export default AppLayout;
