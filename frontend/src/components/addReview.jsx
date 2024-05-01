import { v4 as uuidv4 } from 'uuid';
import { useAddReview } from '../hooks/useAddReview';
// import {pName} from '../components/Professor';

const AddReview = () => {
    const { mutate: addReview, isPending } = useAddReview();

    // const fullName = {pName};
    const handleSubmit = (e) => {
        e.preventDefault();
        const review = e.target.review.value;
        const rating = e.target.rating.value;
        const professorName = e.target.professorName.value;
        const id = uuidv4();
        const newReview = {
            id,
            professorName,
            rating: +rating,
            review,
        };

        addReview(newReview);

        e.target.review.value = '';
        e.target.rating.value = '';
        e.target.professorName.value = '';
    };

    return (
        <>
            <h3> Add new review</h3>
            {/* <h3>{fullName}</h3> */}

            <form id="form" onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="professorName"> Professor's Name</label>
                    <input
                        id="professorName"
                        placeholder="Enter the professor's name..."
                        type="text"
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="review"> Review</label>
                    <input
                        id="review"
                        placeholder="Enter review of professor..."
                        type="text"
                    />
                </div>
                <div>
                    <label htmlFor="rating">
                        Rating (1-5)<br />
                    </label>
                    <input
                        id="rating"
                        placeholder="Enter rating..."
                        type="number"
                    />
                </div>

                <button className="btn" disabled={isPending}>
                    {isPending ? 'Adding Review' : 'Add Review'}
                </button>
            </form>
        </>
    );
};

export default AddReview;