
import { useParams } from 'react-router-dom'
import { useGetDetailsQuery } from '../../app/features/Movie/Movies'
import { Helmet } from "react-helmet";

interface IProps{

}
const ActorsDetails=({}:IProps)=> {
    let {type,id}=useParams()
    
    
    let {isLoading,data}=useGetDetailsQuery({type,id})
    {isLoading&& <h1>Loading</h1>}
    
    
  return (
 
        
    <div className='m-5 py-2'>
    {data&&
    <div>
<Helmet>
<title>{`${data?.name}`}</title>
</Helmet>
    <div className="grid sm:grid-cols-1 md:grid-cols-2 text-white gap-2">
       <div>
        <h1 className="text-5xl text-primary mb-2">{data?.name}</h1>
       <img src={`https://image.tmdb.org/t/p/w500/${data?.profile_path}`} className="img-responsive w-100 h-100 " alt={data.name} />
        <div className="flex space-x-10 my-5">
     <h4>{data.known_for_department}</h4>
     <p>{data?.birthday}</p>
     
     </div > 
       </div>
       <div>
       <h1 className='text-5xl text-primary mb-2'>Overview</h1>
       <p>{data?.biography}</p>
       </div>
        

    </div>
       

           
        
    </div>}
   
    </div>
  )
}

export default ActorsDetails