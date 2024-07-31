import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import panner from "../../assets/panner.jpg"

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import {  useGetTrendingQuery } from '../../app/features/Movie/Movies';

export default function Slider() {
  let {isLoading,data}=useGetTrendingQuery({type:"movie"})
  {isLoading&& <h1>Loading</h1>}
  return (
    <div className="m-5 p-5">
      <div className='relative'>

          <div className="relative">
          <img src={panner} alt="panner" className='w-full h-full rounded-md' />
          <div className="absolute inset-0 w-full h-full bg-slate-950 bg-opacity-70">

          </div>
          </div>
        
      </div>
       <div className="absolute inset-20 mt-10">
       <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3} // Display 3 slides at a time
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {data?.results?.slice(0,10)?.map((movie:any) => (
          <SwiperSlide>
            <img className='w-3/4 h-3/4 object-cover rounded-md' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
          </SwiperSlide>
        ))}
       
      </Swiper>
       </div>
    </div>
  );
}
