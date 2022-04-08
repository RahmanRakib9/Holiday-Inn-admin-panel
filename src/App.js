import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AddService from './Pages/Action/AddService/AddService';
import Home from './Pages/Home/Home/Home'
import Header from './Pages/Shared/Header/Header'

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Header />
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/addService' element={<AddService />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
