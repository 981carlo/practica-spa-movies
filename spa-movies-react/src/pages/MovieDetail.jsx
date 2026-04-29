import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieById } from "../services/api";

export default function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadMovie() {
      try {
        const result = await fetchMovieById(id);
        setMovie(result);
      } catch (err) {
        console.error(err);
        setError("No se pudo cargar la información.");
      } finally {
        setLoading(false);
      }
    }

    loadMovie();
  }, [id]);

  if (loading) return <p>Cargando detalle...</p>;
  if (error) return <p>{error}</p>;
  if (!movie) return <p>No se encontró la película.</p>;

  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w400${movie.poster_path}`
    : "https://via.placeholder.com/400x600?text=No+Image";

  const formattedDate = movie.release_date
    ? movie.release_date.split("-").reverse().join("-")
    : "Fecha no disponible";

  const formattedRating =
    movie.vote_average !== undefined && movie.vote_average !== null
      ? movie.vote_average.toFixed(1)
      : "N/A";

  return (
    <section className="movie-detail">
      <img src={imageUrl} alt={movie.title} />
      <div>
        <h1>{movie.title}</h1>
        <p><strong>Sinopsis:</strong> {movie.overview}</p>
        <p><strong>Calificación:</strong> {formattedRating}</p>
        <p><strong>Fecha:</strong> {formattedDate}</p>
      </div>
    </section>
  );
}