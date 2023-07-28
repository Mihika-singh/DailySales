// App.js
import React, { useState } from 'react';
import './App.css';
import Login from './Components/Login';
import AllCards from './Components/AllCards';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import SideMenu from './Components/SideMenu';
function App() {
  const [authenticated, setAuthenticated] = useState(false);

  const handleAuthentication = (isAuthenticated) => {
    setAuthenticated(isAuthenticated);
  };

  return (
    <div className="App">
      <header className="App-header" style={{ background: !authenticated && "#D4E2D4" }}>
        {!authenticated ? (
          <Login onAuthenticated={handleAuthentication} />
        ) : (
          <>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <SideMenu />
                <AllCards />
              </CardContent>
            </Card>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
