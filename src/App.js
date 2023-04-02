import React from 'react';
import { BrowserRouter as  Router, Routes, Route } from 'react-router-dom';
import { SignUp } from './pages'; //Importo compenente como var de contexto, ya que en el caso de que hayan muchos componentes se hace mas amigable a la vista

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<SignUp/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
