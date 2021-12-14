import React, {useState} from 'react';
import {SliderData} from './SliderData';
import '../sass/Slider.scss'
import {IoIosArrowForward, IoIosArrowBack} from 'react-icons/io'

const Slider = ({slides}) => {
    const[current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1) 
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }


    if(!Array.isArray(slides) || slides.length <= 0){
        return null;
    }

    return (
        <>
        <h2>Image gallery</h2>
            <div className='slider'>
                <IoIosArrowBack className='left-arrow' onClick={prevSlide} />
                <IoIosArrowForward className='right-arrow' onClick={nextSlide} />
                {SliderData.map((slide, index) => {
                    return(
                        <div className={index === current ? 'slide active' : 'slide'} key={index}>
                            {index === current && (<img src={slide.image} alt='slide' className='image fade' /> )}
                        </div>
                    );
                    
                })}


            </div>
        </>
        
    );
    
};



export default Slider;
