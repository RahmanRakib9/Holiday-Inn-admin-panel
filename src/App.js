import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LandingMessage from './Pages/Home/LandingMessage/LandingMessage'
import Header from './Pages/Home/Header/Header';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        <LandingMessage></LandingMessage>
      </div>
    </BrowserRouter>
  );
}

export default App;
