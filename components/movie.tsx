"use client";

import styles from "../styles/movie.module.css";
import { useRouter } from "next/navigation";

interface MovieProps {
  title: string;
  id: string;
  poster_path: string;
}

export default function Movie({ title, id, poster_path }: MovieProps) {
  const router = useRouter();
  const moveRouter = () => {
    router.push(`/movies/${id}`);
  };

  return (
    <div className={styles.movie} key={id} onClick={moveRouter}>
      <img src={poster_path} alt={title} />
      {title}
    </div>
  );
}
