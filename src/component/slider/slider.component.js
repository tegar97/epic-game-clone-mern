import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Video from './video.mp4'
import {SliderImage,SliderContainer,SliderImageContaienr,SliderVideoContainer,VideoSlider} from './slider.styles'
class SliderCarousel extends Component {
    state = {
        video: {
            src: Video,
          
        }
    }
    render() {
        
      const settings = {
        dots: true,
        autoplay: true,
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerPadding: '100px',
        centerMode: true,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerMode: false,
                centerPadding: '0',
                slidesToShow: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
              }
            }
          ]
      };
      return (
        <SliderContainer >
          <Slider {...settings}>
          <SliderVideoContainer>
            <VideoSlider  control={true} autoplay={true} src={this.state.video.src} width="640" height="auto"/>
          </SliderVideoContainer>
          <SliderImageContaienr><SliderImage src={'https://cdn2.unrealengine.com/egs-tonyhawksproskater12-vicariousvisions-g1a-02-1920x1080-914782887.jpg?h=1080&resize=1&w=1920'} alt="Credit to Joshua Earle on Unsplash"/></SliderImageContaienr>
          <SliderImageContaienr><SliderImage src={'https://cdn2.unrealengine.com/egs-tonyhawksproskater12-vicariousvisions-g1a-03-1920x1080-914783992.jpg?h=1080&resize=1&w=1920'} alt="Credit to Alisa Anton on Unsplash"/></SliderImageContaienr>
          <SliderImageContaienr><SliderImage src={'https://cdn2.unrealengine.com/egs-tonyhawksproskater12-vicariousvisions-g1a-03-1920x1080-914783992.jpg?h=1080&resize=1&w=1920'} alt="Credit to Alisa Anton on Unsplash"/></SliderImageContaienr>
          <SliderImageContaienr><SliderImage src={'https://cdn2.unrealengine.com/egs-tonyhawksproskater12-vicariousvisions-g1a-03-1920x1080-914783992.jpg?h=1080&resize=1&w=1920'} alt="Credit to Alisa Anton on Unsplash"/></SliderImageContaienr>
          

          </Slider>
        </SliderContainer>
      );
    }
  }
  
  export default SliderCarousel;
  