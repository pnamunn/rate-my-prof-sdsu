import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Grid from '@mui/material/Grid';
import {Navigate, useNavigate} from 'react-router-dom';



export default function Search() {

  const navigate = useNavigate();

  const onChange=(newValue) => {
    navigate(newValue?.page)
  }
  const [value, setValue] = React.useState(profs[0]);
  const [inputValue, setInputValue] = React.useState('');

  return (
    <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justifyContent="center"
    >
          <Autocomplete

            id="prof-select-demo"
            sx={{ width: 300 }}
            options={profs}
            value={value}
            onChange={(event,newValue) => onChange(newValue)}
            

            autoHighlight
            getOptionLabel={(option) => option.label}
            renderOption={(props, option) => (
              <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                
                {option.label}
              </Box>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Choose a professor"
                inputProps={{
                  ...params.inputProps,
                  autoComplete: 'new-password', // disable autocomplete and autofill
                }}
              />
            )}
          />
    </Grid>
  );
}


const profs = [
  {label: 'Select a professor', page:'/NoPage'},
  {label: 'Barry Dorr', page:'/Barrydorr'},
  {label: 'Ugur Dogan', page:'/Ugurdogan'},
  {label: 'Parisa Kaveh', page:'/Parisakaveh'},
  {label: 'Ying-Khai Teh', page:'/yingkhaiteh'},
  {label: 'Kenneth Arnold', page: '/kennetharnold'},
  {label: 'Baris Aksanli', page: '/barisaksanli'},
  {label: 'Ashkan Ashrafi', page: '/ashkanashrafi'},
  {label: 'Amir Alimohammad', page: '/amiralimohammad'},
  {label: 'Hakan Toreyin', page: '/hakantoreyin'},
  {label: 'Ke Huang', page: '/kehuang'},
  {label: 'A. Ege Engin', page: '/aegeengin'},
  {label: 'Naim Ahmed', page: '/naimahmed'},
  {label: 'Tong Huang', page: '/tonghuang'},
  {label: 'Sunil Kumar', page: '/sunilkumar'},
  {label: 'Saeed Manshadi', page: '/saeedmanshadi'},
  {label: 'Chris Mi', page: '/chrismi'},
  {label: 'Santosh Nagaraj', page: '/santoshnagaraj'},
  {label: 'Duy H. N. Nguyen', page: '/duyhnnguyen'},
  {label: 'Yusuf Ozturk', page: '/yusufozturk'},
  {label: 'Christopher Paolini', page: '/christopherpaolini'},
  {label: 'Tharm Ratnarajah', page: '/tharmratnarajah'},
  {label: 'Reza Sabzehgar', page: '/rezasabzehgar'},
  {label: 'Mahasweta Sarkar', page: '/mahaswetasarkar'},
  {label: 'Sridhar Sesagiri', page: '/sridharseshagiri'},
  {label: 'Junfei Xie', page: '/junfeixie'},
];