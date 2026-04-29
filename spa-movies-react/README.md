# SPA Movies

Aplicación web desarrollada con **React**, **Vite** y **React Router DOM** que permite explorar películas obtenidas desde la API de **TMDB**.

## 1. Descripción de la aplicación

La aplicación permite:

- ver una lista de películas populares en la página principal
- buscar películas por título
- entrar en una página de detalle de cada película
- navegar entre páginas usando React Router DOM

## 2. Tecnologías usadas

- React
- Vite
- React Router DOM
- TMDB API

## 3. Rutas principales

- `/` → página de inicio con películas populares
- `/movie/:id` → página de detalle de una película
- `/search?q=texto` → página de resultados de búsqueda

## 4. Instalación y ejecución

### Requisitos previos

- Node.js instalado
- npm instalado
- una API key de TMDB

### Pasos para ejecutar el proyecto

1. Clona el repositorio o descarga el proyecto.
2. Abre una terminal dentro de la carpeta del proyecto.
3. Instala las dependencias:

```bash
npm install
```

4. Crea un archivo llamado `.env` en la raíz del proyecto.
5. Dentro de ese archivo añade tu clave de TMDB así:

```bash
VITE_TMDB_API_KEY=tu_api_key
```

6. Inicia el servidor de desarrollo:

```bash
npm run dev
```

7. Abre en el navegador la URL que te indique Vite, normalmente algo parecido a:

```text
http://localhost:5173
```

## 5. Estructura del proyecto

```text
src/
  components/
    MovieCard.jsx
    Navbar.jsx
    SearchForm.jsx
  pages/
    Home.jsx
    MovieDetail.jsx
    Search.jsx
  services/
    api.js
  App.jsx
  main.jsx
  index.css
```

## 6. Explicación de la estructura

- `components/` contiene los componentes reutilizables de la interfaz.
- `pages/` contiene las páginas principales de la aplicación.
- `services/api.js` contiene las funciones para consultar la API de TMDB.
- `App.jsx` contiene la configuración de rutas.
- `main.jsx` es el punto de entrada de la aplicación.
- `index.css` contiene los estilos globales.

## 7. Funcionalidades implementadas

- listado de películas populares
- detalle de película
- búsqueda por título
- navegación entre páginas
- cards con imagen, calificación y enlace al detalle
- mensajes cuando no se encuentran resultados

## 8. Notas

Esta aplicación usa la API de TMDB para obtener información de películas.
