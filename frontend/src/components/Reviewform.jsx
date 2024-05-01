import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import {useState} from 'react'
import Button from '@mui/material/Button';

export default function Reviewform(userInput) {

  const [text, setText] = useState('');


  const handleSubmit = (e) => {
      e.preventDefault();
      userInput.add(text);
      setText('');
  };    


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
        onSubmit={handleSubmit}
        
        >

          <TextField 
          id="outlined-multiline-static" 
          label="Enter your review..." c
          variant="outlined"
          multiline
          rows={3}
          onChange={(e) => setText(e.target.value)}
          />

          {/* <Button type="submit" className="btn-submit">Submit</Button> */}

        </Box>


      <Button 
        type="submit"
        className="btn-submit"
        onClick={() => {alert("Review submitted!") }}
        variant="contained">
        Submit
      </Button>


    </Grid>
  );
}