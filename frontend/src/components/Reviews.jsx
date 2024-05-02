/* This will be the component that renders the existing reviews for a professor */

import { useGetReviews } from "../hooks/useGetReview";

const Reviews = () => {
    const { data: reviews, error, isLoading } = useGetReviews();

    

    if (isLoading) return <p>Loading...</p>;

    if (error) return <p>Some error happened</p>;

    //const data = data.filter((data) => data.professorName.includes({fullName}))

    return (
        <>
            <h3>Existing Reviews</h3>
            
            <ul>{reviews.map((review) => 
                <li key={review.id}>{review.professorName}. Rating = {review.rating}. {review.review}</li>
                
                )}
            </ul>
        </>
    );


};

export default Reviews;