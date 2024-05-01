import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Reviewform from '../components/Reviewform';
import BasicRating from '../components/Rating';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Reviews from '../components/Reviews'


const Professor = ({fullName, description, imageLink, credentials}) => {
    // get professor by id 
    // { label: xxx, id: xxx, "reviews"} 

    // fetch("http://localhost:8000/professor/id")
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
                    <BasicRating/>
                    
                    <Reviewform/>
                    <Button onClick={() => {alert("Review submitted!") }} variant="contained">Enter</Button>
                    <Reviews/>
                    
                    </Grid>
                </Grid>
                {/* <Grid item xs={4} md={6} lg={8}>
                    <h2>{fullName}</h2>
                    <p>
                        {description}
                    </p>
                </Grid> */}
            {/* </Grid> */}
        </section>
        
        </>
    )
}

export default Professor;