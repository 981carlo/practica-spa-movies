import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovies } from "../services/api";
import MovieCard from "../components/MovieCard";

export default function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadSearch() {
      if (!query) {
        setMovies([]);
        return;
      }

      setLoading(true);
      setError("");

      try {
        const results = await searchMovies(query);
        setMovies(results);
      } catch (err) {
        console.error(err);
        setError("No se pudo cargar la información.");
      } finally {
        setLoading(false);
      }
    }

    loadSearch();
  }, [query]);

  return (
    <section>
      <h1>Resultados para: {query || "..."}</h1>

      {loading && <p>Buscando...</p>}
      {error && <p>{error}</p>}

      {!loading && !error && (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </section>
  );
}