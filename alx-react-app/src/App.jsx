import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import UserProfile from './components/UserProfile';
import WelcomeMessage from './WelcomeMessage'; // ✅ Added import

function App() {
  return (
    <div>
      <Header />
      <WelcomeMessage /> {/ ✅ Added usage /}
      <MainContent />
      <UserProfile
        name="Alice"
        age="25"
        bio="Loves hiking and photography"
      />
      <Footer />
    </div>
  );
}

export default App;
