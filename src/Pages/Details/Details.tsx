
import { useGetDetailsQuery } from '../../app/features/Movie/Movies'
import { useParams } from 'react-router-dom'
import { Helmet } from "react-helmet";

const Details=()=> {
    let {type,id}=useParams()
    
    
    let {isLoading,data}=useGetDetailsQuery({type,id})
    {isLoading&& <h1>Loading</h1>}
   
    
  return (
    <div className='m-5 py-2'>
    {data&&
    <div>
        <Helmet>
<title>{`${type}/${data?.name}`}</title>
</Helmet>
        <div className='rounded-md relative'>
        <img className='rounded-md ' style={{width:"100%",height:"600px"}} src={`https://image.tmdb.org/t/p/w500/${data?.backdrop_path
}`} alt={data?.title} />
<div className="absolute inset-0 text-slate-100 flex items-center h-full px-3   bg-slate-950 bg-opacity-80">
    <div className="">
    <h2 className="text-5xl text-primary " >{data?.original_title?data?.original_title:data?.name}</h2>
     <div className="flex space-x-10 my-5">
     <h4>{data.vote_average} Rating</h4>
     <p>{data?.release_date}</p>
     
     </div > 
     <h1 className="text-3xl text-primary my-2 ">Section</h1>
     <div className="flex gap-3">
     <img src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`} className="img-responsive w-80 h-80 " alt="" />
     <img src={`https://image.tmdb.org/t/p/w500/${data?.backdrop_path}`} className="img-responsive w-80 h-80 " alt="" />

     </div>
    </div>
     
</div>
        </div>
          
        <div className="badge text-white flex justify-around my-5">
            {data?.genres?.map((genre:any)=>(
                <button type="button" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-black bg-primary rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-primary dark:focus:ring-blue-800">
               {genre.name}
               
                </button>
                
            ))}
        </div>
        <div className="flex justify-between mt-4 text-white">
            <div className="w-1/2">
                <h1 className='text-2xl text-primary'>Overview</h1>
                <p>{data?.overview}</p>
            </div>
            <div>
            <h1 className='text-2xl text-primary'>Tagline</h1>
            <p>{data?.tagline}</p>
           
                
            </div>
        </div>
        
    </div>}
    </div>
  )
}

export default Details