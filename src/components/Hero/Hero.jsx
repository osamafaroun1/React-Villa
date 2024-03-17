import './Hero.css'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
import '@splidejs/react-splide/css/core';

const Hero = () => {
    return (
        <div className='max-w-[100vw] max-h-[100vh]'>
            <Splide aria-label="My Favorite Images">
                <SplideSlide>
                </SplideSlide>
                <SplideSlide>
                </SplideSlide>
                <SplideSlide>
                </SplideSlide>
                <SplideSlide>
                </SplideSlide>
            </Splide>
        </div>
    )
}

export default Hero