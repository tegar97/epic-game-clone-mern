import React from 'react'
import {DetaileGamesContainer,SliderContainer,DetailGameLogo,SummaryGameInfo,DetailLogoContainer,DetailTextContainer,DetailTextDescription,OfferButton,AboutGameDetail,AboutGame,AboutGameWrap,AboutGameTextWrap,AboutGameTitle,AboutGameText,SvgWrapper,AboutDescription,AboutGameDescription,GamesBuyContainer} from './detail-games-styles'
import SliderCarousel from './../../component/slider/slider.component'
import { Divider, Typography } from '@material-ui/core';

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
         <AboutGame>
            <AboutGameWrap>
               <Typography variant="h4" component="span">About Game</Typography>
            
            </AboutGameWrap>
               <AboutGameDetail>
                  <AboutGameTextWrap>
                     <AboutGameTitle component="span">Developer</AboutGameTitle>
                     <AboutGameText component="span">Vicarious Visions</AboutGameText>
                  </AboutGameTextWrap>
                  <AboutGameTextWrap>
                     <AboutGameTitle variant="h5">Publisher</AboutGameTitle>
                     <AboutGameText>Activision
                     </AboutGameText>
                  </AboutGameTextWrap>
                  <AboutGameTextWrap>
                     <AboutGameTitle variant="h5">Release Date</AboutGameTitle>
                     <AboutGameText>Sep 5, 2020</AboutGameText>
                  </AboutGameTextWrap>
                  <AboutGameTextWrap>
                     <AboutGameTitle variant="h5">Tags</AboutGameTitle>
                     <AboutGameText>Action,Sports</AboutGameText>
                  </AboutGameTextWrap>
                  <AboutGameTextWrap>
                     <AboutGameTitle variant="h5">Rating</AboutGameTitle>
                     <AboutGameText>-</AboutGameText>
                  </AboutGameTextWrap>
                  <AboutGameTextWrap>
                     <AboutGameTitle variant="h5">Platform</AboutGameTitle>
                     <AboutGameText>
                        <SvgWrapper />
                     
                     
                     </AboutGameText>
               </AboutGameTextWrap>
      
               </AboutGameDetail>
               <AboutDescription>
               <Typography variant="h6" component="h1">Tony Hawk's™ Pro Skater™ 1 + 2
               </Typography><br></br>
               <Typography variant="h6" component="h1" >Drop Back In With The Most Iconic Skateboarding Games Ever Made
               </Typography>
               <br/>
               <AboutGameDescription> Skate as the legendary Tony Hawk and the original pro roster, plus new pros. Listen to songs from the era-defining soundtrack along with new music. Hit insane trick combos with the iconic handling of the Tony Hawk’s™ Pro Skater™ series.</AboutGameDescription>
               <br/> <br/>  
               <Typography variant="h6" component="h1" >All The Original Game Modes And More</Typography>
               <br/>
               <AboutGameDescription> Play all the original modes and go head-to-head with local 2-Player modes. Show off your style and creativity with upgraded Create-A-Park and Create-A-Skater features. Compete against players from around the world in Multiplayer modes and leaderboards.</AboutGameDescription>
               </AboutDescription>
               <GamesBuyContainer>
               <AboutGameWrap>
               <Typography variant="h4" component="span">About Game</Typography>
            
            </AboutGameWrap>
               </GamesBuyContainer>
               <br/>
         </AboutGame>
            
               
        
       </DetaileGamesContainer>
       </React.Fragment>
    )
}

export default DetailGames