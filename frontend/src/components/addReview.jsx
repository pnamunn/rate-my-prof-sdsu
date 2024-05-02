import { v4 as uuidv4 } from 'uuid';
import { useAddReview } from '../hooks/useAddReview';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';


import Rating from '@mui/material/Rating';

// import {pName} from '../components/Professor';

const AddReview = () => {
    const { mutate: addReview, isPending } = useAddReview();
    
    const [rating, setRating] = React.useState(0);

    // const fullName = {pName};
    const handleSubmit = (e) => {
        e.preventDefault();
        const review = e.target.review.value;
        const rating = e.target.rating.value;
        const professorName = e.target.professorName.value;
        const id = uuidv4();
        const newReview = {
            id,
            professorName,
            rating: +rating,
            review,
        };

        addReview(newReview);

        e.target.review.value = '';
        e.target.rating.value = '';
        e.target.professorName.value = '';
    };

    return (
        <>
            <grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            padding={1}
            >
                

                <form id="form" onSubmit={handleSubmit}>
                    <Grid
                    container
                    spacing={2}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    padding={2}
                    >
                    
                        <TextField id="professorName" label="Enter the professor's name..." variant="outlined" />
                    </Grid>
                    <Grid
                    container
                    spacing={2}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    padding={2}
                    >
                        <Box
                        sx={{
                            '& > :not(style)': { m: 0, width: '37ch'},
                        }}
                        >
                        <TextField id="review" label="Enter your review..." variant="outlined" multiline
                    rows={3}/>
                    </Box>
                    </Grid>
                    
                    <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    padding={1}
                    >
                    <Box
                        sx={{
                            '& > legend': { mt: 2 },
                        }}
                    >
                        <Rating
                            name="rating"
                            precision={1}
                            size="large"
                            rating={rating}
                            onChange={(event, newRating) => {
                            setRating(newRating);
                            }}
                        />
                    </Box>
                    </Grid>
                    <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    padding={1}
                    >
                    <button className="btn" disabled={isPending}>
                        {isPending ? 'Adding Review' : 'Add Review'}
                    </button>
                    </Grid>

                </form>
            </grid>
        </>
    );
};

export default AddReview;