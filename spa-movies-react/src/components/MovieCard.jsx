import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  const title = movie.title || movie.name || "Sin título";

  const rating =
    movie.vote_average !== undefined && movie.vote_average !== null
      ? movie.vote_average.toFixed(1)
      : "N/A";

  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
    : "https://placehold.co/300x450/222222/FFFFFF?text=Sin+imagen";

  return (
    <article className="movie-card">
      <Link to={`/movie/${movie.id}`} className="movie-card__image-link">
        <img src={imageUrl} alt={title} className="movie-card__image" />
      </Link>

      <h3 className="movie-card__title">{title}</h3>

      <div className="movie-card__footer">
        <p className="movie-card__rating">⭐ {rating}</p>

        <Link to={`/movie/${movie.id}`} className="movie-card__link">
          Ver detalle
        </Link>
      </div>
    </article>
  );
}