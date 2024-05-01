

import Search from '../components/Search'
import Reviews from '../components/Reviews'

const Home = () => {
    return (
        <>
            
                <div className="container">
                    
                    <h1>Welcome to Rate My SDSU Professor</h1>
                    <h3>Search for a professor</h3>
                    <Search/>
                    <Reviews/>
                </div>
            
        </>
    );
};
export default Home;
