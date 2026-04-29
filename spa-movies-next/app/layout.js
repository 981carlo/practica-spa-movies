import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Next Movies",
  description: "Aplicación de películas con Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <main className="container">{children}</main>
      </body>
    </html>
  );
}