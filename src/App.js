import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SplashScreen from './Screens/SplashScreen/SplashScreen';
import SignupScreen from './Screens/SignupScreen/SignupScreen';
import LoginScreen from './Screens/LoginScreen/LoginScreen';
import NotificationScreen from './Screens/NotificationScreen/NotificationScreen';
import PhotoScreen from './Screens/PhotoScreen/PhotoScreen';
import TextScreen from './Screens/TextScreen/TextScreen';
import CalculatorScreen from './Screens/CalculatorScreen/CalculatorScreen';


function App() {
  return (
    <div className="App">
         <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<SplashScreen />} />
          <Route exact path='/signup' element={<SignupScreen />} />
          <Route exact path='/signin' element={<LoginScreen />} />
          <Route exact path='/notifications' element={<NotificationScreen />} />
          <Route exact path='/upload/photo' element={<PhotoScreen />} />
          <Route exact path='/write/text' element={<TextScreen />} />
          <Route exact path='/calculate' element={<CalculatorScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
