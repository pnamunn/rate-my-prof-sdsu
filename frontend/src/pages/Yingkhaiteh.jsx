import * as React from 'react';
import Avatar from '@mui/material/Avatar';



const Yingkhaiteh = () => {
    return (
        <>
            <main>
                <section className="container">
                    <Avatar alt="Teh" src="/teh.jpg" sx={{ width: 56, height: 56 }}/>
                    <h2>Ying Khai Teh</h2>
                    <p>
                        Description About Teh
                    </p>
                </section>
                <section className="container">
                    <h3> Reviews </h3>
                    <p>
                        placeholder paragraph
                    </p>
                </section>
                
            </main>
        </>
    );
};
export default Yingkhaiteh;