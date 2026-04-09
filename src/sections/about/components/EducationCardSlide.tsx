"use client"
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import '../styles/EducationCardStyle.css';

// import required modules
import { Navigation } from 'swiper/modules';

export const EducationCardSlide = () => {
    return (
        <>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <div className="flex w-full min-h-32 flex-col gap-2 rounded-lg border border-[#B2B2B2] bg-transparent p-5 text-[#B2B2B2]">
                        <div className='flex items-center  gap-2'>
                            {/* Icono de circulo */}
                            <div className='w-3 h-3 bg-[#B2B2B2] rounded-full flex items-center justify-center'>
                            </div>
                            { /* Años de estudio */}
                            <p className='text-sm font-bold'>2020 - 2024</p>
                        </div>
                        <div className='flex flex-col gap-2 ml-5'>
                            {/* Nombre de la institución */}
                            <p className='text-sm font-bold'>Universidad de Guanajuato</p>
                            {/* Descripción de la institución */}
                            <p className='text-sm font-bold'>Descripción de la institución</p>
                        </div>
                    </div>
                </SwiperSlide>
                {[2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
                    <SwiperSlide key={n}>
                        <div className="flex w-full min-h-32 items-center justify-center rounded-lg border border-white bg-transparent p-5 text-sm font-bold">
                            Slide {n}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}
