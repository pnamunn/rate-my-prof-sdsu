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
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required />

                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />

                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            required
                        ></textarea>

                        <button type="submit" className="btn">
                            Submit
                        </button>
                    </form>
                </section>

                
            </main>
        </>
    );
};
export default Support;
