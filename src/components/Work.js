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

    const options = {
        margin: 30,
        responsiveClass: true,
        nav: true,
        dots: true,
        dotsEach: true,
        // loop: true,
        // dotsEach: 3,
        autoplay: false,
        // navText: ["Prev", "Next"],
        // navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
        navText:[
            '<span class="arrow prev">‹</span>',
            '<span class="arrow next">›</span>'
          ],
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 2,
            },
            // 700: {
            //     items: 3,
            // },
            1000: {
                items: 3,
    
            }
        },
    };

  return (
    <div>
        <OwlCarousel
        className='owl-theme' 
        {...options}
        >
    <div class='item'>
        <img src={work1} alt="pic1" />
    </div>
    <div class='item'>
    <img src={work2} alt="pic2" />
    </div>
    <div class='item'>
    <img src={work3} alt="pic3" />
    </div>
    <div class='item'>
    <img src={work4} alt="pic4" />
    </div>
    <div class='item'>
    <img src={work5} alt="pic5" />
    </div>
    <div class='item'>
    <img src={work6} alt="pic6" />
    </div>
   
</OwlCarousel>
    </div>
  )
}

export default Work