const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export async function fetchMovies() {
  const res = await fetch(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=es-ES`
  );
  if (!res.ok) throw new Error("Error al cargar películas");
  const data = await res.json();
  return data.results;
}

export async function fetchMovieById(id) {
  const res = await fetch(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=es-ES`
  );
  if (!res.ok) throw new Error("Error al cargar el detalle");
  return res.json();
}

export async function searchMovies(query) {
  const res = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=es-ES&query=${encodeURIComponent(query)}`
  );
  if (!res.ok) throw new Error("Error al buscar películas");
  const data = await res.json();
  return data.results;
}