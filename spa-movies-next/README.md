# Next Movies

Aplicación web desarrollada con **Next.js** usando **App Router** para mostrar películas obtenidas desde la API de **TMDB**.

## 1. Descripción de la aplicación

La aplicación permite:

- ver una lista de películas populares en la página principal
- buscar películas por título
- entrar en una página de detalle de cada película
- navegar entre páginas usando el sistema de rutas de Next.js

## 2. Tecnologías usadas

- Next.js
- React
- TMDB API

## 3. Rutas principales

- `/` → página de inicio con películas populares
- `/movie/[id]` → página de detalle de una película
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

4. Crea un archivo llamado `.env.local` en la raíz del proyecto.
5. Dentro de ese archivo añade tu clave de TMDB:

```bash
NEXT_PUBLIC_TMDB_API_KEY=tu_api_key
```

6. Inicia el servidor de desarrollo:

```bash
npm run dev
```

7. Abre en el navegador la URL:

```text
http://localhost:3000
```

## 5. Estructura del proyecto

```text
app/
  movie/
    [id]/
      page.js
  search/
    page.js
  globals.css
  layout.js
  page.js

components/
  MovieCard.js
  Navbar.js
  SearchForm.js

services/
  api.js
```

## 6. Explicación de la estructura

- `app/page.js` contiene la página principal con películas populares.
- `app/movie/[id]/page.js` contiene la página de detalle dinámica.
- `app/search/page.js` contiene la página de resultados de búsqueda.
- `app/layout.js` contiene la estructura general de la aplicación y el navbar.
- `components/` contiene los componentes reutilizables.
- `services/api.js` contiene las funciones para consultar TMDB.
- `app/globals.css` contiene los estilos globales.

## 7. Funcionalidades implementadas

- listado de películas populares
- detalle de película
- búsqueda por título
- navegación entre páginas
- cards con imagen, calificación y enlace al detalle
- mensaje cuando no se encuentran resultados

