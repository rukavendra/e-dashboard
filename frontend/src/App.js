import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home';
import NavBar from './components/navBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <NavBar/>
        <div className='pages'>
          <Routes>
            <Route path='/' element={<Home/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
