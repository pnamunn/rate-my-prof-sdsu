import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

export default function Reviewform() {
  return (
    
    <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justifyContent="center"
    paddingBottom={1}
    >
        
        <Box
        component="form"
        sx={{
            '& > :not(style)': { m: 0, width: '45ch'},
        }}
        noValidate
        autoComplete="off"
        
        >
        <TextField id="outlined-basic" label="Enter your review..." variant="outlined" />
        
        </Box>
    </Grid>
  );
}