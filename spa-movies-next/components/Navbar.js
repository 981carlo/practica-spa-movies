import Link from "next/link";
import SearchForm from "./SearchForm";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__top">
        <Link href="/" className="logo">
          SPA-Movies-NEXT
        </Link>
      </div>

      <SearchForm />
    </header>
  );
}