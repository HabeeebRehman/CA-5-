import './App.css'
import React from 'react'
import { UserProvider } from './components/UserData'
import AllRoutes from './Routes/AllRoutes'

const App =() => {
  return (
    <UserProvider>
      <AllRoutes />
    </UserProvider>
  );
};

export default App;
