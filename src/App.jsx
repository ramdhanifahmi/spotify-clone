import { useState } from 'react'
import Login from "./components/Login.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import Spotify from "./components/Spotify.jsx";

function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [accessToken, setAccessToken] = useState(null);

    const handleLoginSuccess = (token) => {
        setAccessToken(token);
        setLoggedIn(true);
    };


  return (
      <div>
          {loggedIn ? (
              <Spotify accessToken={accessToken} />
          ) : (
              <Login onLoginSuccess={handleLoginSuccess} />
          )}
      </div>
  )
}

export default App
