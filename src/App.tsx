import React from 'react';
import './App.css';
import Login from './components/Login';

type PropsType = {
}

const App: React.FC<PropsType> = (props) => {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
