import './App.css';
import Navbar from './components/Navbar'
import Pricing from './pages/Pricing';
import Excercises from './pages/Excercises';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Admin from './pages/Admin';
import Equipment from './pages/Equipment';

  
export default function App()
{
  return(
    <BrowserRouter>
      <div className='App'>
      <Navbar/>
        
    
    
      </div>
      <div className='page_view'>
          <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/Equipment' element={<Equipment/>}/>
              <Route path='/Pricing' element={<Pricing />}/>
              <Route path='/Excercises' element={<Excercises />}/>
              <Route path='/Admin' element={<Admin/>}/>



              
          </Routes>
        </div>
    </BrowserRouter>
    
  );
}