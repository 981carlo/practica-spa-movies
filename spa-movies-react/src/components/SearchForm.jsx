import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchForm() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const cleanQuery = query.trim();

    if (!cleanQuery) return;

    navigate(`/search?q=${encodeURIComponent(cleanQuery)}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        placeholder="Buscar película..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Buscar</button>
    </form>
  );
}