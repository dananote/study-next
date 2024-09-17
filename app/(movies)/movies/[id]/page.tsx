import { Suspense } from "react";
import MovieInfo, { getMovieInfo } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

interface IParams {
  params: {
    id: string;
  };
}

/**
 * < Dynamic Metadata >
 * page component가 ID를 params로 전달 받은 것처럼 generageMetadata 함수도 ID를 전달 받았다.
 *
 * 원래 같은 페이지에서 2번 같은 API를 호출하는 것은 좋지 않지만 최신 NEXT.js 버전에서는 fetch를 하기 때문에 첫음에 API를 호출하여 응답한 값을 두번째 호출 시에사용할 것이다.
 */

export async function generateMetadata({ params: { id } }: IParams) {
  const movie = await getMovieInfo(id);
  return {
    title: movie.title,
  };
}

export default async function MovieDetail({ params: { id } }: IParams) {
  return (
    <div>
      <Suspense fallback={<h3>info 로딩중...</h3>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h3>video 로딩중...</h3>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
