import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
// import Login from './components/Login';


function App() {
  return (
    <div className="App">
      {/* Could not get login component to redirect to navbar */}
      {/* <Login /> */}
      <Navbar />
    </div>
  );
}

export default App;
