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

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
