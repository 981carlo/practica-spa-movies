import { searchMovies } from "../../services/api";
import MovieCard from "../../components/MovieCard";

export default async function SearchPage({ searchParams }) {
  const { q = "" } = await searchParams;
  const movies = q ? await searchMovies(q) : [];

  return (
    <section>
      <h1>Resultados para: {q}</h1>

      {movies.length === 0 ? (
        <p>No se encontraron películas.</p>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </section>
  );
}