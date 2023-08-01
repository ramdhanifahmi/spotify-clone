# Spotify Clone Project

This is a Spotify clone project built with React and Bootstrap, allowing users to login with Spotify, search for songs, and display search results in a layout similar to Spotify.

## Getting Started

To run the project on your local machine, follow the instructions below:

1. Clone the repository:

```bash
git clone https://github.com/your-username/spotify-clone.git
```

2. Change directory to the project folder:
```bash
cd spotify-clone
```

3. Install dependecies
```bash
npm install
```

4. Obtain Spotify API credentials 
- Visit the Spotify Developer Dashboard and create a new application.
- Set the callback URL to http://localhost:3000 in the Spotify Dashboard.
- Note down the Client ID.

5. Configure the Spotify API credentials:
- Open src/Login.jsx and replace 'YOUR_CLIENT_ID' with your actual Spotify Client ID.

6. Run the development server:
```bash
npm Start
```

7. Open your web browser and visit http://localhost:3000 to access the application.


### Features
- Login with Spotify: Click the "Connect Spotify" button to initiate the Spotify Implicit Grant Flow authentication. After successful login, the application will retrieve an access token.
- Search for Songs: Enter the name of a song in the search bar and click the search icon. The application will fetch and display the search results.
- Display Search Results: The search results will be displayed in a table, showing the title, artist, and image of each song.


### Acknowledgments
Special thanks to Spotify for providing the API and documentation for developers to build awesome applications like this Spotify clone.
