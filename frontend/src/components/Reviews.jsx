/* This will be the component that renders the existing reviews for a professor */

import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Grid from '@mui/material/Grid';
import { useThemeProps } from '@mui/material';

export default function ReviewBox(reviewsList) {

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
            
            <p>a person's review</p>
            
            <p>{reviewsList.text}</p>

            {/* <p>{props.body}</p> */}


            
            </Box>
            
        </Grid>
  );
}