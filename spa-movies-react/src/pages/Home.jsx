import { useEffect, useState } from "react";
import { fetchMovies } from "../services/api";
import MovieCard from "../components/MovieCard";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadMovies() {
      try {
        const results = await fetchMovies();
        setMovies(results);
      } catch (err) {
        console.error(err);
        setError("No se pudo cargar la información.");
      } finally {
        setLoading(false);
      }
    }

    loadMovies();
  }, []);

  if (loading) return <p>Cargando películas...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section>
      <h1>Películas populares</h1>
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}