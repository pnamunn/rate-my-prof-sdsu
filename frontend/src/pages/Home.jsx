import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Search from '../components/Search'


const Home = () => {
    return (
        <>
            
                <div className="container">
                    
                    <h1>Welcome to Rate My SDSU Professor</h1>
                    <h3>Search for a professor</h3>
                    <Search/>

                    <h3>Featured professors:</h3>

                    <Grid
                    container
                    spacing={1}
                    >
                    <Grid item xs={6}>
                        <Link href="/yingkhaiteh">
                        <Avatar src='/jediteh.png' sx={{ width: 150, height: 150 }}/>
                        </Link>
                        <h4 style={{"text-align":"center"}}>Prof. Teh</h4>
                    </Grid> 
                    <Grid item xs={6}>
                        <Link href="/ugurdogan">
                        <Avatar src='/ugurdogan.jpeg' sx={{ width: 150, height: 150 }}/>
                        </Link>
                        <h4 style={{"text-align":"center"}}>Prof. Dogan</h4>
                        
                    </Grid> 
                    <Grid item xs={6}>
                        <Link href="/barrydorr">

                        <Avatar src='/laser_eyes_dorr.jpeg' sx={{ width: 150, height: 150 }}/>
                        <h4 style={{"text-align":"center"}}>Prof. Dorr</h4>
                        </Link>

                        
                    </Grid> 
                    <Grid item xs={6}>
                        <Link href="/kennetharnold">

                        <Avatar src='/arnold.jpg' sx={{ width: 150, height: 150 }}/>
                        <h4 style={{"text-align":"center"}}>Prof. Arnold</h4>
                        </Link>

                        
                    </Grid> 

                    </Grid>
                    
                </div>
            
        </>
    );
};
export default Home;
