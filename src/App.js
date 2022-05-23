import React,{useState,Image} from 'react';
import Mynavbar from './Components/navbar/myNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignIn from './Components/SignIn/SignIn';
import './App.css';

function App() {
  return (
    <div className="App" >
      <Mynavbar/>
      <SignIn/>
    </div>
  );
}

export default App;
