import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
// import Login from './components/Login';

// Commenting out Login component for this project.
// Could not get login component to redirect after authentication
// to navbar component, but it does have CSS styling.
// Will come back at later time to attempt fix.

function App() {
  return (
    <div className="App">

      {/* <Login /> */}
      <Navbar />
    </div>
  );
}

export default App;
