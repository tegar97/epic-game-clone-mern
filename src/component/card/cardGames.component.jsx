import React from 'react'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';

import {CardContainer,CardTitle,CardStudio,CardPriceContainer,CardPriceDiscount,CardPriceBeforeDiscount,CardPrice} from './cardGames.styles'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    media: {
      height: 300,
      borderRadius: '5px',
      '&:hover' :{
        opacity: .8
      }
    },
    
  });
const CardGames = ({gamesData}) => {
    const classes = useStyles();
    return (
        <CardContainer>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={gamesData.thumbnail}
                    alt={gamesData.title}
                />
                <CardContent  style={{paddingLeft: '0'}}>
                    <CardTitle gutterBottom variant="h5" component="h2">
                    {gamesData.title.length > 20 ? gamesData.title.substring(0, 20) + '....' : gamesData.title}
                    </CardTitle>
                    <CardStudio variant="h6"  component="p">
                    {gamesData.studio.length > 29 ? gamesData.studio.substring(0, 29) + '....' : gamesData.studio}
                    </CardStudio>
                </CardContent>
                </CardActionArea>
                <CardPriceContainer>
                {
                    gamesData.discount ?  
                    <CardPriceDiscount>{gamesData.discount}</CardPriceDiscount>
                    :
                    ''
                }
                {
                    gamesData.priceBeforeDiscount ?  
                    <CardPriceBeforeDiscount>
                        {  gamesData.priceBeforeDiscount}
                    </CardPriceBeforeDiscount>
                    :
                    ''
                }  
                
                    <CardPrice>{gamesData.price ? gamesData.price : 'free' }</CardPrice>

            
        
            </CardPriceContainer>
    </CardContainer>
    )
}

export default CardGames