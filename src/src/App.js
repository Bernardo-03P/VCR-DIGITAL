import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Depoimentos from './componentes/depoimentos';
//import Cards from './componentes/Cards';
import Nav from './componentes/Header.js';
import Perfil from './componentes/Perfil.js'
import List from './componentes/Lista.js'

function App() {
  return (
    <div className="App">
        <Nav/>
        <Perfil/>
        <List/>
    </div>
);
}

export default App;
