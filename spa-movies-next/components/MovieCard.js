import Link from "next/link";
import Image from "next/image";

export default function MovieCard({ movie, priority = false }) {
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
      <Link href={`/movie/${movie.id}`} className="movie-card__image-link">
        <div className="movie-card__image-wrapper">
          <Image
            src={imageUrl}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 220px"
            className="movie-card__image"
            priority={priority}
          />
        </div>
      </Link>

      <h3 className="movie-card__title">{title}</h3>

      <div className="movie-card__footer">
        <p className="movie-card__rating">⭐ {rating}</p>

        <Link href={`/movie/${movie.id}`} className="movie-card__link">
          Ver detalle
        </Link>
      </div>
    </article>
  );
}