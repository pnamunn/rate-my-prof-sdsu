import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Grid from '@mui/material/Grid';

export default function BasicRating() {
  const [value, setValue] = React.useState(0);

  return (
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
                name="half-rating"
                precision={0.5}
                size="large"
                value={value}
                onChange={(event, newValue) => {
                setValue(newValue);
                }}
            />
            
            </Box>
        </Grid>
  );
}