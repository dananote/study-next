import { Metadata } from "next";
import Movie from "../../components/movie";
import styles from "../../styles/home.module.css";

export const metadata: Metadata = {
  title: "HOME",
};
export const BASE_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  const response = await fetch(BASE_URL, {
    next: { revalidate: 60 },
  });
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          poster_path={movie.poster_path}
          id={movie.id}
        />
      ))}
    </div>
  );
}
