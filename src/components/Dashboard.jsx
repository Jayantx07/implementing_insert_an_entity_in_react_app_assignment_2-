import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import MovieCard from './MovieCard';
import './Dashboard.css'; // Optional: Import CSS for styling

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Get movies from state or fallback to default
  const [movies, setMovies] = useState(() => {
    return location.state?.movies || [
      {
        id: 1,
        title: 'Inception',
        director: 'Christopher Nolan',
        genre: 'Science Fiction',
        releaseYear: 2010,
        synopsis: 'A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.',
        posterUrl: 'https://image.tmdb.org/t/p/original/xymM5aW6MDcH5AR9I3CamSegJd6.jpg',
      },
      {
        id: 2,
        title: 'The Matrix',
        director: 'The Wachowskis',
        genre: 'Action',
        releaseYear: 1999,
        synopsis: 'A computer hacker learns about the true nature of his reality and his role in the war against its controllers.',
        posterUrl: 'https://image.tmdb.org/t/p/original/dXNAPwY7VrqMAo51EKhhCJfaGb5.jpg',
      },
    ];
  });

  // Sync new movies from navigation state
  useEffect(() => {
    if (location.state?.movies) {
      setMovies(location.state.movies);
    }
  }, [location.state]);

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Movie Collection</h1>
        <button className="add-movie-btn" onClick={() => navigate('/add-movie', { state: { movies } })}>
          Add Movie
        </button>
      </header>

      <div className="movie-list">
        {movies.length > 0 ? (
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        ) : (
          <p>No movies available. Add some!</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
