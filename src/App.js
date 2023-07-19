import './App.css';
import Navbar from './components/Navbar';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Dashboard from './Pages/Dashboard';
import Contact from './Pages/Contact';
import About from './Pages/About';
import { Toaster } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [isLogin, setLogin] = useState(false);

  return (
    <div className="App w-screen min-h-screen bg-slate-800 flex flex-col">
      <Navbar isLogin={isLogin} setLogin={setLogin}></Navbar>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path='/About' element={<About />}></Route>
        <Route path='/Contact' element={<Contact />}></Route>
        <Route path='/Login' element={<Login setLogin={setLogin} />}></Route>
        <Route path='/Signnup' element={<Signup setLogin={setLogin} />}></Route>
        <Route path='/Dashboard' element={<Dashboard />}></Route>
      </Routes>
      <Toaster />
      {/* <Route path="*" element={<NoPage />} /> */}
    </div >
  );
}

export default App;
