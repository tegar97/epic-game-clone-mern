import React from 'react'
import {DetaileGamesContainer,SliderContainer,DetailGameLogo,SummaryGameInfo,DetailLogoContainer,DetailTextContainer,DetailTextDescription,OfferButton} from './detail-games-styles'
import SliderCarousel from './../../component/slider/slider.component'
import { Divider } from '@material-ui/core';

const  DetailGames = () => {
    return (
       <React.Fragment>
       <SliderContainer>
          <SliderCarousel/>
       </SliderContainer>
       <DetaileGamesContainer>
         <SummaryGameInfo> 
         <DetailLogoContainer>
          <DetailGameLogo  src="https://cdn2.unrealengine.com/egs-tonyhawksproskater12-vicariousvisions-ic1-200x200-914783124.png?h=270&resize=1&w=480"/>

         </DetailLogoContainer>
         <DetailTextContainer>
            <DetailTextDescription component="h2">Play the fully-remastered Tony Hawk’s™ Pro Skater™ & Tony Hawk’s™ Pro Skater™ 2 games in one epic collection, rebuilt from the ground up in incredible HD.</DetailTextDescription>
            <OfferButton ButtonOffer style={{marginLeft: '2rem'}}>Views Offer</OfferButton>
            <Divider/>
         </DetailTextContainer>
         </SummaryGameInfo>
               
        
       </DetaileGamesContainer>
       </React.Fragment>
    )
}

export default DetailGames