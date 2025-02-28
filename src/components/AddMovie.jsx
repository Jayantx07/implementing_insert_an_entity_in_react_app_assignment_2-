import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddMovie.css"; // Updated styling

const AddMovie = ({ addMovie }) => {
  const navigate = useNavigate();

  // State for movie details
  const [movie, setMovie] = useState({
    title: "",
    director: "",
    genre: "",
    releaseYear: "",
    synopsis: "",
    posterUrl: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!movie.title || !movie.director || !movie.genre || !movie.releaseYear || !movie.synopsis || !movie.posterUrl) {
      alert("Please fill all fields.");
      return;
    }
    addMovie(movie); // Call parent function to add movie
    navigate("/"); // Redirect to Dashboard after submission
  };

  return (
    <div className="add-movie-container">
      <h2>Add a New Movie</h2>
      <form className="add-movie-form" onSubmit={handleSubmit}>
        <label>Title</label>
        <input type="text" name="title" value={movie.title} onChange={handleChange} placeholder="Enter movie title" required />

        <label>Director</label>
        <input type="text" name="director" value={movie.director} onChange={handleChange} placeholder="Enter director's name" required />

        <label>Genre</label>
        <select name="genre" value={movie.genre} onChange={handleChange} required>
          <option value="">Select Genre</option>
          <option value="Action">Action</option>
          <option value="Comedy">Comedy</option>
          <option value="Drama">Drama</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Horror">Horror</option>
          <option value="Thriller">Thriller</option>
        </select>

        <label>Release Year</label>
        <input type="number" name="releaseYear" value={movie.releaseYear} onChange={handleChange} placeholder="Enter release year" required />

        <label>Synopsis</label>
        <textarea name="synopsis" value={movie.synopsis} onChange={handleChange} placeholder="Enter a short synopsis" required />

        <label>Poster Image URL</label>
        <input type="text" name="posterUrl" value={movie.posterUrl} onChange={handleChange} placeholder="Paste poster image URL" required />

        <div className="button-group">
          <button type="submit" className="add-movie-btn">Submit</button>
          <button type="button" className="cancel-btn" onClick={() => navigate("/")}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AddMovie;
