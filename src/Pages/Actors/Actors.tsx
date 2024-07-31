
import { Link } from 'react-router-dom'
import {  useGetMoviesPersonQuery} from '../../app/features/Movie/Movies'
import { Helmet } from "react-helmet";
const Actors=()=> {
    let {isLoading,data}=useGetMoviesPersonQuery({})
   
    {isLoading&& <h1>Loading</h1>}
   
    
     
  return (
    <div className='m-5 py-5'>
       <Helmet>
        <title>{`Actors`}</title>
      </Helmet>
         <div className="grid sm-grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4">
      
         {data?.results?.slice(0,20)?.map(({id,profile_path,name}:{id:number,profile_path:string,name:string}) => (
            <Link to={`/actorsDetails/person/${id}`} key={id} className=" rounded-md relative m-2 p-2   border shadow-lg hover:border-primary hover:scale-105 border-spacing-2 border-transparent  ">
              <img className="w-full  h-80  rounded-md  " src={`https://image.tmdb.org/t/p/w500/${profile_path}`} alt={name} />
              
            
              <h2 className="text-1xl py-2 text-center text-primary font-semibold">{name}</h2>
           
              
            </Link>
          ))}
         </div>
          
    </div>
  )
}

export default Actors