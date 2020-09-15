import React from 'react'
import {DetaileGamesContainer,SliderContainer} from './detail-games-styles'
import SliderCarousel from './../../component/slider/slider.component'
const  DetailGames = () => {
    return (
       <React.Fragment>
       <SliderContainer>
          <SliderCarousel/>
       </SliderContainer>
       <DetaileGamesContainer>
         <h1>Sketboard</h1>
       </DetaileGamesContainer>
       </React.Fragment>
    )
}

export default DetailGames