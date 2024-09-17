import { BASE_URL } from "../app/(home)/page";
import styles from "../styles/movie-info.module.css";

export async function getMovieInfo(movieId: string) {
  const response = await fetch(`${BASE_URL}/${movieId}`);
  return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movieInfo = await getMovieInfo(id);
  return (
    <div className={styles.container}>
      <img
        className={styles.poster}
        src={movieInfo.poster_path}
        alt={movieInfo.title}
      />
      <div className={styles.info}>
        <h1 className={styles.title}>{movieInfo.title}</h1>
        <h3>⭐️ {movieInfo.vote_average.toFixed(1)}</h3>
        <p>{movieInfo.overview}</p>
        <a href={movieInfo.homepage} target="_blank" rel="noreferrer">
          Home Page →
        </a>
      </div>
    </div>
  );
}
