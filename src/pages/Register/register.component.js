import React,{useState,useEffect} from 'react'

import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Button  from '@material-ui/core/Button'
import MenuItem from '@material-ui/core/MenuItem';

import useStyle from './register.styles'
import CustomButton from '../../component/button/custom-button.component'
import axios from 'axios'
const Register = () => {
    const [userData,setUserData] = useState({email: '',password: '',country: ''})
    const [country,setCountry] = useState([])
    const classes = useStyle()
    const divRef = React.useRef()

    useEffect(() => {
        async function fetchDatCountry() {
            await axios.get('https://restcountries.eu/rest/v2/all').then(res =>   (
                setCountry(res.data)
            )  )
        }
        divRef.current.focus();
        fetchDatCountry();
      }, []);
    
    

    const handleChange = event => {
        console.log(userData.country)
        const {value ,name} = event.target;
        setUserData({ ...userData,[name]: value })

    }
    return (
        <>
        <Container maxWidth="sm" className={classes.LoginContainer}>
            <Paper className={classes.paper}>
                <div className={classes.EpicLogo}>
                   <img width="50" src="https://static-assets-prod.unrealengine.com/account-portal/static/static/media/epic-logo-invert.58a41726.png"/> 
                </div>
                <Typography variant="h5" component="h1" className={classes.title}>Signin With Epic Games Account</Typography>

                <form  noValidate>
                <TextField  variant="outlined" select label="Country"  helperText="Please select your currency" name="country" value={userData.country}  onChange={handleChange} ref={divRef}  fullWidth InputLabelProps={{
                    style: {
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      width: '100%',
                      color: '#fff',
                      opacity: '70%',
                      fontSize: '1.5rem'
                    } }} style={{color: '#fff'}} 
                    >
                    
                    {
                        country.map(country => (
                            <MenuItem  key={country.name}  value={country.name}>
                                {country.name}
                            </MenuItem>

                        ))
                    }
        
        </TextField>
                
                    <TextField    variant="outlined" color="primary" InputLabelProps={{
                        style: {
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          width: '100%',
                          color: '#fff',
                          opacity: '70%',
                          fontSize: '1.5rem'
                        } }} 
                        inputProps={{ style: { fontFamily: 'nunito', color: 'white',    fontSize: '1.5rem'}}} 
                        labelClassName={classes['input-label'] }
                         id="email" type="email" name="email" margin="normal" label=" Email Adress"    value={userData.email} onChange={handleChange} fullWidth required    />
                    <TextField    variant="outlined" color="primary" InputLabelProps={{
                        style: {
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          width: '100%',
                          color: '#fff',
                          opacity: '70%',
                          fontSize: '1.5rem'
                        } }} 
                        inputProps={{ style: { fontFamily: 'nunito', color: 'white',    fontSize: '1.5rem'}}} 
                        labelClassName={classes['input-label'] }
                         id="password" type="password" name="password" margin="normal" label="Password"   value={userData.password} onChange={handleChange}  fullWidth required    />
                        <div className={classes.TextContainer}>
                            <div style={{display: 'flex'}}>
                            <input type="checkbox" style={{marginRight: '10px'}}/>
                            <Typography variant="h6" style={{color: '#fff',opacity: '50%'}}>Rember me ?</Typography>
                            
                            </div>
                            <Typography variant="h6" style={{color: '#fff',opacity: '50%'}}>Lupa Password ?</Typography>
                        </div>
   
                        {
                            userData.email && userData.password    ?
                            <CustomButton style={{width: '100%'}} loginButton >Login Now</CustomButton>
                            :
                            <CustomButton style={{width: '100%'}} disabled >Login Now</CustomButton>

                        }
                     
                      
                
                </form>
            </Paper>
        </Container>
        </>
    )
}

export default Register