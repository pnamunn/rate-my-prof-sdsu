import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Reviewform from '../components/Reviewform';
import BasicRating from '../components/Rating';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';


const Professor = ({fullName, description, imageLink}) => {
    // get professor by id 
    // { label: xxx, id: xxx, "reviews"} 

    // fetch("http://localhost:8000/professor/id")
    return (
        <>
        <section className='container'>
            {/* <Grid container spacing={2}>
                <Grid item xs={8} md={6} lg={4}> */}
                <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                >
                    <Avatar alt={fullName} src={imageLink} sx={{ width: 150, height: 150 }}/>
                    <h2>{fullName}</h2>
                    <p>
                        {description}
                    </p>
                    <h3>Give a rating & review!</h3>
                    <BasicRating/>
                    
                    <Reviewform/>
                    <Button variant="contained">Enter</Button>
                    <h3>
                        Existing Reviews
                    </h3>
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