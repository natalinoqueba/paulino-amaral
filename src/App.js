import './App.css';
import './App-pc.css';
import Info from './components/Info';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <Info />
        <div>
        <Main />
        <Footer />
        </div>
    </div>
  );
}

export default App;
