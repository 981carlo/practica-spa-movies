import { fetchMovies } from "../services/api";
import MovieCard from "../components/MovieCard";

export default async function HomePage() {
  const movies = await fetchMovies();

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