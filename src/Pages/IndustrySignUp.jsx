import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@mui/styles';
import { Typography } from '@material-ui/core';
import { FormControl, TextField, Button, Container, Grid } from '@mui/material';

const useStyles = makeStyles({
    button:{
        background: '#42b6EE !important',
        border: '0 !important',
        borderRadius: '3 !important',
        color: 'white !important',
        height: 48,
        padding: '0 30px !important',
    }
});

const IndustrySignUp = () => {
    const classes = useStyles();

    return (
        <>
            <Container sx={{m:{xs:2, lg:'none'}}}>
                <FormControl>
                    <Grid container spacing={3}>
                        <Grid item lg={12} xs={12} display='flex' justifyContent='center'>
                            <Typography variant='h4'>
                                Industry SignUp 
                            </Typography>
                        </Grid>
                        <Grid item lg={6} xs={12}>
                            <TextField id="cname" fullWidth label="Company Name" type="text" variant="outlined" required />
                        </Grid>
                        <Grid item lg={6} xs={12}>
                            <TextField id="hrname" fullWidth label="HR Name" type='text' variant="outlined" required />
                        </Grid>
                        <Grid item lg={6} xs={12}>
                            <TextField id="email" fullWidth label="Email" type="email" variant="outlined" required />
                        </Grid>
                        <Grid item lg={6} xs={12}>
                            <TextField id="phoneNumber" fullWidth label="Phone No" type='number' variant="outlined" required />
                        </Grid>
                        <Grid item lg={6} xs={12}>
                            <TextField id="cnic" fullWidth label="CNIC / NTN" type='number' variant="outlined" required />
                        </Grid>
                        <Grid item lg={6} xs={12}>
                            <TextField id="city" fullWidth label="City" type='text' variant="outlined" required />
                        </Grid>
                        <Grid item lg={6} xs={12}>
                            <TextField id="country" fullWidth label="Country" type='text' variant="outlined" required />
                        </Grid>
                        <Grid item lg={6} xs={12}>
                            <TextField id="password" fullWidth label="Password" type='password' variant="outlined" required />
                        </Grid>
                        <Grid item lg={6} xs={12}>
                            <TextField id="cpassword" fullWidth label="Confirm Password" type='password' variant="outlined" required />
                        </Grid>
                        <Grid item lg={6} xs={12} display='flex' justifyContent='right' >
                            <Button className={classes.button} component={Link} to="/v1/signup" outline="none" sx={{background:'42b6EE'}}>Sign Up</Button>
                        </Grid>
                    </Grid>
                </FormControl>
            </Container>
        </>
    )
}

export default IndustrySignUp