// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'import  Deste  from './vistas/deste'

import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registro from './vistas/registro'
import Login from './vistas/login';
import Deste from './vistas/deste';
import CreateProyect from './vistas/create_proyect';
import Proyecto from './vistas/proyecto';
function App() {
  // const [count, setCount] = useState(0)

  return (
    
<Router>
<Routes>
  <Route path="/login" element={<Login/>} />
<Route path="/registra" element={<Registro/>} />
<Route path="/deste" element={<Deste/>} />
<Route path="/proyecto" element={<CreateProyect/>} />
<Route path="/newProyect" element={<Proyecto/>} />
</Routes>
</Router>
    
  )
}

export default App
