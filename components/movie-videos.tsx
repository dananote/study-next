import { BASE_URL } from "../app/(home)/page";
import styles from "../styles/movie-videos.module.css";

async function getMovieVideos(movieId: string) {
  const response = await fetch(`${BASE_URL}/${movieId}/videos`);
  return response.json();
}

export default async function MovieVideos({ id }: { id: string }) {
  const movieVideos = await getMovieVideos(id);
  return (
    <div className={styles.container}>
      {movieVideos.map((video) => (
        <iframe
          key={video.id}
          src={`https://youtube.com/embed/${movieVideos.key}`}
          title={movieVideos.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ))}
    </div>
  );
}
