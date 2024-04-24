import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Reviewform from '../components/Reviewform';
import BasicRating from '../components/Rating';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';


const Ugurdogan = () => {
    return (
        <>
            <main>
                
                <section className="container">
                    
                        <Avatar alt="Ugur Dogan" src="/ugurdogan.jpg" sx={{ width: 100, height: 100 }}/>
                        <h2>Ugur Dogan</h2>
                        <p>
                            Description About Ugur
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
                
            </main>
        </>
    );
};
export default Ugurdogan;
