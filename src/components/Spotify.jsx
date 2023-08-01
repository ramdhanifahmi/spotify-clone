import React, { useEffect, useRef, useState } from "react";
import {Container, Navbar} from "react-bootstrap";
import Sidebar from "./Sidebar.jsx";
import "../css/Spotify.css"
import Dashboard from "./Dashboard.jsx";

const Spotify = ({ accessToken }) => {
    return (
        <div className="spotify-body">
            <div className="sidebar-container">
                <Sidebar />
            </div>
            <div className="body">
                <Navbar />
                <div className="body-contents">
                    <Dashboard accessToken={accessToken} />
                </div>
            </div>
        </div>
    );
};

export default Spotify;
