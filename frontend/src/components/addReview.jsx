import { v4 as uuidv4 } from 'uuid';
import { useAddReview } from '../hooks/useAddReview';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import {useState} from 'react'

import Rating from '@mui/material/Rating';

// import {pName} from '../components/Professor';

const AddReview = () => {
    const { mutate: addReview, isPending } = useAddReview();
    const [text, setText] = useState('');
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
                {/* <h3> Add new review</h3> */}
                {/* <h3>{fullName}</h3> */}

                <form id="form" onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label htmlFor="professorName"> Professor's Name</label>
                        <input
                            id="professorName"
                            placeholder="Enter the professor's name..."
                            type="text"
                        />
                    </div>
                    <grid
                        container
                        spacing={0}
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        padding={1}
                    >
                    <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 0, width: '45ch'},
                    }}
                    noValidate
                    autoComplete="off"
                    onSubmit={handleSubmit}
                    
                    >
                        <TextField 
                            id="review" 
                            label="Enter your review..." c
                            variant="outlined"
                            multiline
                            rows={3}
                            onChange={(e) => setText(e.target.value)}
                        />
                    </Box>
                    </grid>
                    {/* <div className="form-control">
                        <label htmlFor="review"> Review</label>
                        <input
                            id="review"
                            placeholder="Enter review of professor..."
                            type="text"
                        />
                    </div> */}
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
                    {/* <div>
                        <label htmlFor="rating">
                            Rating (1-5)<br />
                        </label>
                        <input
                            id="rating"
                            placeholder="Enter rating..."
                            type="number"
                        />
                    </div> */}

                    <button className="btn" disabled={isPending}>
                        {isPending ? 'Adding Review' : 'Add Review'}
                    </button>
                </form>
            </grid>
        </>
    );
};

export default AddReview;