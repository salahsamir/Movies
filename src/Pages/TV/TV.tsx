import { Link } from "react-router-dom"
import { useGetTrendingQuery } from "../../app/features/Movie/Movies"
import { Helmet } from "react-helmet";

const TV=()=> {
  let {isLoading,data}=useGetTrendingQuery({type:"tv"})
  {isLoading&& <h1>Loading</h1>}
  return (
   <div className="mt-5">
     <Helmet>
        <title>{`TV`}</title>
      </Helmet>
 <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
 {data?.results?.slice(0,20)?.map((movie:any) => (

            <Link to={`/details/tv/${movie.id}`} key={movie.id} className=" cursor-pointer rounded-md relative  m-2 p-2  border shadow-lg hover:border-primary hover:scale-105 border-spacing-2 border-transparent  ">
              <img className="w-full  h-80  rounded-md  " src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title?movie.title:movie.name} />
              
              <span className='absolute top-0 left-0 bg-primary p-2 rate'>
                {movie.vote_average}
              </span>
              <h2 className="text-1xl py-2 text-center text-primary font-semibold">{movie.name}</h2>
           
              
            </Link>
 
))}
</div>
   
   </div>
  )
}

export default TV