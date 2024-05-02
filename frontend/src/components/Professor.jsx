import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Reviewform from '../components/Reviewform';
import ReviewBox from '../components/Reviews';
import BasicRating from '../components/Rating';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Reviews from '../components/Reviews'
import AddReview from '../components/addReview';
// import { useState, useEffect } from 'react';


const Professor = ({fullName, description, imageLink, credentials}) => {

    
    // const pName = {fullName};
    const addReview = (title, body) => {
    
    };
     


    return (
        <>
        <section className='container'>
            
                <Grid
                container
                spacing={1}
                
                >
                    <Grid item xs={6}>
                        <Avatar alt={fullName} src={imageLink} sx={{ width: 150, height: 150 }}/>
                    </Grid> 
                    <Grid item xs={6}>
                        <h2>{fullName}</h2>
                        <h2>{credentials}</h2>
                    </Grid>
                    <Grid
                    container
                    spacing={1}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    >
                    <p>
                        {description}
                    </p>
                    <h3>Give a rating & review!</h3>
                    {/* <BasicRating/>
                    
                    
                    <Reviewform add={addReview}/> */}
                    <AddReview/>
                    <Reviews/>
                    

                    
                    

                    </Grid>
                </Grid>
        </section>
        
        </>
    )
}

export default Professor;