import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MainComponent from './components/MainComponent/MainComponent';
import { CurrencyConvertContextProvider } from './context/CurrencyConvertContext';

function App() {
  
  return (
    <CurrencyConvertContextProvider>
      <div className='App'>
      {/* Background image with title */}
        <Header />

      {/* Main component with calculations */}
        <MainComponent />

      {/* Description data */}
        <Footer />
      </div>
    </CurrencyConvertContextProvider>
  );
}

export default App;
