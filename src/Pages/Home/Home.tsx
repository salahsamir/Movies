import React from 'react'
import Slider from '../../Components/Home/Slider'
import Movie from '../../Components/Home/Movie'
import Actors from '../../Components/Home/Actors'
import { Helmet } from "react-helmet";
interface IProps{

}
const Home=({}:IProps)=> {
  return (
    <div>
       <Helmet>
        <title>{`Movie Home`}</title>
      </Helmet>
      <Slider/>
      <Movie type="movie" title="Top Trending Movies to watch right now" desc="A list of Top ranked 10 Movies ,this list update every week depends on trending Movies"/>
      <Movie type="tv" title="Top Trending Series to watch right now" desc="A list of Top ranked 10 Series ,this list update every week depends on trending Series."/>
      <Actors/>
     
    </div>

  )
}

export default Home