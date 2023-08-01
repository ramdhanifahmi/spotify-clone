import React from "react";
import {Container} from "react-bootstrap";
import {MdHomeFilled, MdSearch} from "react-icons/md";
import {IoLibrary} from "react-icons/io5";
import "../css/Sidebar.css"

export default function Sidebar() {

    return (
        <Container fluid className="sidebar-container">
            <div className="top-links">
                <div className="logo">
                    <img
                        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
                        alt="spotify"
                    />
                </div>
                <ul className="sidebar-menu">
                    <li>
                        <MdHomeFilled />
                        <span>Home</span>
                    </li>
                    <li>
                        <MdSearch />
                        <span>Search</span>
                    </li>
                    <li>
                        <IoLibrary />
                        <span>Your Library</span>
                    </li>
                </ul>
            </div>
            {/*<Playlists />*/}
        </Container>
    );
}
