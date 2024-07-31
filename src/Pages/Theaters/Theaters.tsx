import { useGetTrendingQuery } from "../../app/features/Movie/Movies"

const Theaters=()=> {
  let {isLoading,data}=useGetTrendingQuery({type:"theaters"})
  {isLoading&& <h1>Loading</h1>}
  return (
   <div className="mt-5">
 <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
 {data?.results?.slice(0,20)?.map((movie:any) => (

            <div key={movie.id} className=" rounded-md relative  m-2 p-2  border shadow-lg hover:border-primary hover:scale-105 border-spacing-2 border-transparent  ">
              <img className="w-full  h-80  rounded-md  " src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title?movie.title:movie.name} />
              
              <span className='absolute top-0 left-0 bg-primary p-2 rate'>
                {movie.vote_average}
              </span>
              <h2 className="text-1xl py-2 text-center text-primary font-semibold">{movie.title}</h2>
           
              
            </div>
 
))}
</div>
   
   </div>
  )
}

export default Theaters