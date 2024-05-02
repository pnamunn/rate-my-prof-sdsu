import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

const Support = () => {
    return (
        <>
            <main className="container">
                <section className="support">
                    <h2>Contact Us</h2>
                    <p>
                        If you have any questions, feedback, or need assistance,
                        please don&apos;t hesitate to get in touch with us.
                    </p>
                
                    <form>
                        <Grid
                        container
                        spacing={2}
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        padding={2}
                        >
                        <TextField id="email" label="Enter your email" variant="outlined" />
                        </Grid>
                        <Grid
                        container
                        spacing={2}
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        padding={2}
                        >
                        <TextField id="issue" label="Describe your problem..." variant="outlined" />
                        </Grid>
                        <br></br>
                        <Grid
                        container
                        spacing={2}
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        padding={2}
                        >
                        <button type="submit" className="btn">
                            Submit
                        </button>
                        </Grid>

                    </form>
                
                </section>

                
            </main>
        </>
    );
};
export default Support;
