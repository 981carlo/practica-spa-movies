import Image from "next/image";
import { fetchMovieById } from "../../../services/api";

export default async function MovieDetailPage({ params }) {
  const { id } = await params;
  const movie = await fetchMovieById(id);

  const title = movie.title || movie.name || "Sin título";

  const formattedDate = movie.release_date
  ? movie.release_date.split("-").reverse().join("-")
  : "Fecha no disponible";

  const formattedRating =
  movie.vote_average !== undefined && movie.vote_average !== null
    ? movie.vote_average.toFixed(1)
    : "N/A";

  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w400${movie.poster_path}`
    : "https://placehold.co/400x600/222222/FFFFFF?text=Sin+imagen";

  return (
    <section className="movie-detail">
      <div className="movie-detail__poster">
        <Image
          src={imageUrl}
          alt={title}
          width={400}
          height={600}
          className="movie-detail__image"
          style={{ width: "100%", height: "auto" }}
        />
      </div>

      <div>
        <h1>{title}</h1>
        <p><strong>Sinopsis:</strong> {movie.overview}</p>
        <p><strong>Calificación:</strong> {formattedRating}</p>
        <p><strong>Fecha:</strong> {formattedDate}</p>
      </div>
    </section>
  );
}