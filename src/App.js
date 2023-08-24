import { BrowserRouter,Routes,Route} from "react-router-dom";

import React from 'react';
//import './App.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import ContactoPage from './pages/ContactoPage';
//import CursosPage from './pages/CursosPage';
import NovedadesPage from './pages/NovedadesPage';
import IndexPage from './pages/IndexPage';
import NosotrosPage from './pages/NosotrosPage';
//<Route path="cursos" element={<CursosPage/>}/>
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<IndexPage/>}/>
      
          <Route path="precios" element={<NovedadesPage/>}/>
          <Route path="nosotros" element={<NosotrosPage/>}/>
          <Route path="contacto" element={<ContactoPage/>}/>
        </Routes>
      </BrowserRouter>
       
        <Footer/>
    </div>
  );
}

export default App;
