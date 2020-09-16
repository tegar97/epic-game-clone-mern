import React,{useState} from 'react'

import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Button  from '@material-ui/core/Button'

import useStyle from './login.styles'
import CustomButton from '../../component/button/custom-button.component'

const Login = () => {
    const [userData,setUserData] = useState({email: '',password: ''})
    const classes = useStyle()

    const handleChange = event => {
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

export default Login