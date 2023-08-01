import React from 'react';
import "../css/App.css"
import Button from "react-bootstrap/Button";

const handleLogin = () => {
    // Initiate the Spotify Implicit Grant Flow authentication
    window.location.href = `https://accounts.spotify.com/authorize?client_id=YOUR_CLIENT_ID&response_type=token&redirect_uri=http://localhost:3000&scope=playlist-modify-private`;
};

const Login = ({ onLoginSuccess }) => {
    const handleLoginSuccess = () => {
        // Extract access token from the URL
        const hash = window.location.hash.substr(1);
        const params = new URLSearchParams(hash);
        const accessToken = params.get('access_token');

        if (accessToken) {
            // Call the onLoginSuccess function with the access token
            onLoginSuccess(accessToken);
        }
    };

    // Call handleLoginSuccess when the component mounts
    React.useEffect(() => {
        handleLoginSuccess();
    }, []);

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 login-container">
            <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png" alt="Spotify" />
            <Button type={"button"} className="btn-login" onClick={handleLogin}>
                Connect Spotify
            </Button>
        </div>
    );
};

export default Login;
