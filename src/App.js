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
import Services from './Pages/Action/ServiceList/Services/Services';
import EditService from './Pages/Action/ServiceList/EditService/EditService';

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Header />
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/addService' element={<AddService />} />
          <Route path='/serviceList' element={<Services />} />
          <Route path='/edit/:id' element={<EditService />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
