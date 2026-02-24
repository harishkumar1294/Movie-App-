import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import { searchMovies } from "../services/api";
import "../css/Home.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load default Tamil movies on first render
  useEffect(() => {
    const loadDefaultMovies = async () => {
      try {
        const results = await searchMovies("Tamil");
        setMovies(results);
        setError(null);
      } catch (err) {
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };

    loadDefaultMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!searchQuery.trim()) return;
    if(loading) return

    setLoading(true);

    try {
      const results = await searchMovies(searchQuery);
      setMovies(results);
      setError(null);
    } catch (err) {
        setError("Failed to search movies...");
    } finally {
        setLoading(false);
    }

    setSearchQuery("");
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="searchbtn">
          Search
        </button>
      </form>

      {loading && <p>Loading movies...</p>}
      {error && <p className="error">{error}</p>}

      <div className="movies-grid">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <MovieCard movie={movie} key={movie.imdbID} />
          ))
        ) : (
          !loading && <p>No movies found.</p>
        )}
      </div>
    </div>
  );
}

export default Home;