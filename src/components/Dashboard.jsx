import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import "../css/Dashboard.css"
import {AiOutlineSearch} from "react-icons/ai";

const Dashboard = ({ accessToken }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = () => {
        // Call the Spotify Search API with the stored Access Token
        fetch(`https://api.spotify.com/v1/search?q=${searchQuery}&type=track`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        })
            .then(response => response.json())
            .then(data => {
                // Extract the search results from the API response
                setSearchResults(data.tracks.items);
            })
            .catch(error => {
                console.error('Error fetching search results:', error);
            });
    };

    return (
        <div className="dashboard-container">
                <Form className={"search-bar"} onSubmit={handleSearch}>
                    <div className="search-input">
                        <AiOutlineSearch className="search-icon" />
                        <input
                            type="text"
                            placeholder="Search for songs"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </Form>

            {searchResults.length > 0 && (
                <div className="search-results">
                    <Table striped>
                        <tbody>
                        {searchResults.map((track) => (
                            <tr key={track.id}>
                                <td>
                                    <img
                                        src={track.album.images[0]?.url || 'placeholder-image-url'}
                                        alt={track.name}
                                        style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                                    />
                                </td>
                                <td>
                                    <div className="title">{track.name}</div>
                                    <div className="artist">{track.artists[0].name}</div>
                                </td>
                                <td>{formatDuration(track.duration_ms)}</td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </div>
            )}
            </div>

    );
};

function formatDuration(durationMs) {
    const minutes = Math.floor(durationMs / 60000);
    const seconds = Math.floor((durationMs % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

export default Dashboard;
