
import {  useGetTrendingQuery } from '../../app/features/Movie/Movies'
interface IProps{
  type:string,
  title:string,
  desc:string

}
const Movie=({type,title,desc}:IProps)=> {
    let {isLoading,data}=useGetTrendingQuery({type})
   
    {isLoading&& <h1>Loading</h1>}
     
  return (
    <div className='m-5 py-5'>
         <div className="grid sm-grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="flex items-center">
            
       <div>
       <h2 className="text-4xl  text-primary font-semibold trend py-1">{title}</h2>
       <p className="text-sm text-gray-400 pt-2">{desc}</p>
       </div>


          </div>
         {data?.results?.slice(0,9)?.map((movie:any) => (
            <div key={movie.id} className=" rounded-md relative   border shadow-lg hover:border-primary hover:scale-105 border-spacing-2 border-transparent  ">
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

export default Movie