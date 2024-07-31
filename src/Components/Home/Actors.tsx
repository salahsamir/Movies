
import {  useGetMoviesPersonQuery} from '../../app/features/Movie/Movies'
const Actors=()=> {
    let {isLoading,data}=useGetMoviesPersonQuery({})
   
    {isLoading&& <h1>Loading</h1>}
   
    
     
  return (
    <div className='m-5 py-5'>
         <div className="grid sm-grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="flex items-center ">
            
       <div>
       <h2 className="text-4xl  text-primary font-semibold trend py-1">Top Trending Celebrites to check right now</h2>
       <p className="text-sm text-gray-400 pt-2">A list of Top 10 Celebrites ,this list update every week depends on trending people.</p>
       </div>


          </div>
         {data?.results?.slice(0,9)?.map(({id,profile_path,name}:{id:number,profile_path:string,name:string}) => (
            <div key={id} className=" rounded-md relative   border shadow-lg hover:border-primary hover:scale-105 border-spacing-2 border-transparent  ">
              <img className="w-full  h-80  rounded-md  " src={`https://image.tmdb.org/t/p/w500/${profile_path}`} alt={name} />
              
            
              <h2 className="text-1xl py-2 text-center text-primary font-semibold">{name}</h2>
           
              
            </div>
          ))}
         </div>
          
    </div>
  )
}

export default Actors