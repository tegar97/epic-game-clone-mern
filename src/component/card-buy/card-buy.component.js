import React from 'react'
import  {CardBuyContainer,CardBuyImageContainer,CardContentContainer,CardImage,CardBuyText,TextContainer,CardContentFooter,ButtonContainer,CardContentPrice} from './card.buy.styles'
import { Typography } from '@material-ui/core'
import CustomButton from '../button/custom-button.component'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
const CardBuy = () =>  {
    return (
        <CardBuyContainer>
            <CardContentContainer>
                <CardBuyImageContainer>
                    <CardImage   src="https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Ftony-hawks-pro-skater-1-and-2%2Fhome%2FEGS_TonyHawksProSkater12_VicariousVisions_Editions_S1-2560x1440-d381543a642f3bd9394fa67b46ede2275d9b93e6.jpg?h=270&resize=1&w=480"/>
                </CardBuyImageContainer>
                <CardBuyText>
                    <TextContainer>
                        <Typography variant="h5" component="h2" style={{marginBottom: '1rem'}}>Tony Hawk's™ Pro Skater™ 1 + 2</Typography>
                        <Typography variant="h6" component="p" style={{opacity: '80%'}}>Play the fully-remastered Tony Hawk’s™ Pro Skater™ & Tony Hawk’s™ Pro Skater™ 2 games in one epic collection, rebuilt from the ground up in incredible HD.</Typography>
                    </TextContainer>
                </CardBuyText>
           </CardContentContainer>
            <CardContentFooter>
            <Typography variant="h6" component="p" style={{opacity: '80%',marginBottom: '10px'}}>Current Page</Typography>
            <CardContentPrice >$24.25</CardContentPrice>
            <ButtonContainer>
                
                <CustomButton BuyBotton>Buy</CustomButton>
                <CustomButton chartButton><AddShoppingCartIcon/></CustomButton>
                
                </ButtonContainer>
                
            </CardContentFooter>
                       
        </CardBuyContainer>

    )
}

export default CardBuy;