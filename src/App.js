import React from 'react';
import UserForm from './components/UserForm';
import Target from './Target.png'
function App() {
  return (
    <div className="App">
      <img src={Target} align="center" width="600" height="700" alt="target-logo"></img>
     <UserForm/>
    </div>
  );
}

export default App;
