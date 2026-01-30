import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import UserProfile from './components/UserProfile';
import WelcomeMessage from './components/WelcomeMessage;
import Counter from './components/Counter;

function App() {
  return (
    <div>
      {/* City Components from your first task */}
      <WelcomeMessage /> 
      <Header />
      <MainContent />

      {/* UserProfile Component from your second task */}
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
