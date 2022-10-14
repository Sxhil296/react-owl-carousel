import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import work1 from '../assets/work1.webp'
import work2 from '../assets/work3.webp'
import work3 from '../assets/work4.webp'
import work4 from '../assets/work5.webp'
import work5 from '../assets/work6.webp'
import work6 from '../assets/hero1.webp'

const Work = () => {
  return (
    <div>
        <OwlCarousel
        className='owl-theme' 
        items="3"
        dots
        loop
        margin={10}
        nav
        mouseDrag
        
        >
    <div class='item'>
        <img src={work1} alt="" />
    </div>
    <div class='item'>
    <img src={work2} alt="" />
    </div>
    <div class='item'>
    <img src={work3} alt="" />
    </div>
    <div class='item'>
    <img src={work4} alt="" />
    </div>
    <div class='item'>
    <img src={work5} alt="" />
    </div>
    <div class='item'>
    <img src={work6} alt="" />
    </div>
   
</OwlCarousel>
    </div>
  )
}

export default Work