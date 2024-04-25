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
        <section className="container">
                    
                <Avatar alt={fullName} src={imageLink} sx={{ width: 100, height: 100 }}/>
                <h2>{fullName}</h2>
                <p>
                    {description}
                </p>
                
        </section>
        <section className="container">
            <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            >
            <h3>Give a rating & review!</h3>
            <BasicRating/>
            
            <Reviewform/>
            <Button variant="contained">Enter</Button>
            <h3>
                Existing Reviews
            </h3>
            </Grid>
        </section>
        {/* <div className="container">
            <h1>{fullName}</h1>
            <h2>{description}</h2>
            
            
        </div> */}
        </>
    )
}

export default Professor;