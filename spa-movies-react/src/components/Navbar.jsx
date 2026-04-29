import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__top">
        <Link to="/" className="logo">
          SPA-Movies-React
        </Link>
      </div>

      <SearchForm />
    </header>
  );
}