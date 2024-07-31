import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, useParams } from 'react-router-dom';
import { useSearchMoviesQuery } from '../../app/features/Movie/Movies';

interface IProps {}

const Search = ({}: IProps) => {
  let { query } = useParams<{ query: string }>();
  let { isLoading, data } = useSearchMoviesQuery(query || '');

  return (
    <div className="mt-5">
      <Helmet>
        <title>{`Search`}</title>
      </Helmet>
      {isLoading && <h1>Loading</h1>}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {data?.results?.slice(0, 20)?.map((movie: any) => (
          <Link
            to={`/details/movie/${movie.id}`}
            key={movie.id}
            className="rounded-md relative m-2 p-2 border shadow-lg hover:border-primary hover:scale-105 border-spacing-2 border-transparent"
          >
            <img
              className="w-full h-80 rounded-md"
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title ? movie.title : movie.name}
            />
            <span className="absolute top-0 left-0 bg-primary p-2 rate">
              {movie.vote_average}
            </span>
            <h2 className="text-1xl py-2 text-center text-primary font-semibold">
              {movie.title}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Search;
