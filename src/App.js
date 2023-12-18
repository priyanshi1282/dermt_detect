import './App.css';
import Navbar from './components/navbar';
import TestPage from './components/testPage';
import ResultPage from './components/resultPage';
import HomePage from './components/homePage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <TestPage />
      <ResultPage />
    </div>
  );
}

export default App;
