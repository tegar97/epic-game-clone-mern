import React from 'react'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import {HomeContainer,CardContainer,PreviewContainer} from './home.styles'
import CardGames from './../../component/card/cardGames.component'
import { Typography } from '@material-ui/core';
import gamesData from './games.data.json'
import CardPromotion from './../../component/card-promotion/cardPromotion.component'
import CarouselHomePage from '../../component/carousel/carousel-component';

const Home = () =>{
   

    return (

     <HomeContainer maxWidth="lg">
        <CarouselHomePage/>
        <Typography variant="h4"  component="h3" >News Release </Typography>
        
            <PreviewContainer  >
            {
                gamesData.map(games => (
                    <CardGames key={games.id} gamesData={games}/>
                  
                ))
            }
                
            </PreviewContainer>
    
             <CardPromotion 
             backgroundColor={'rgb(111,53,18) linear-gradient(to right bottom,rgb(111,53,18),rgb(186,110,29))'} 
             title={'SpellBreaker'}
             description={'Fight to become an all-powerful battlemage. Available now!'}
             button={'save now'}
             image={'https://cdn2.unrealengine.com/spellbreak-breaker-1280x960-828455230.png?h=720&resize=1&w=1280'}
             />

             <Typography variant="h4"  component="h3" >Populer </Typography>
             <PreviewContainer  >
             {
                 gamesData.map(games => (
                     <CardGames key={games.id} gamesData={games}/>
                   
                 ))
             }
                 
             </PreviewContainer>
             <CardPromotion 
             backgroundColor={'rgb(51,60,67) linear-gradient(to right bottom,rgb(51,60,67),rgb(13,20,26))'} 
             title={'Death Stranding'}
             description={'Unite the divided - One more time. Save 25% until 23 Sept.'}
             button={'save now'}
             image={'https://cdn2.unrealengine.com/breakout-ds-1280x956-887431572.png?h=720&resize=1&w=1280'}
             />
        

    
        </HomeContainer>
     

    )
}

export default Home