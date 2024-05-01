export const getReviews2 = async () => {

    const response = await fetch("http://127.0.0.1:8000/reviewposts/",
    {method: "GET",
    headers: {
        "Content-type": "application/json"
    }});
    

    const data = await response.json();

    await new Promise((resolve) => setTimeout(resolve, 4000));

    return data;
};


export const addReview = async (newReview) => {
    const response = await fetch("http://127.0.0.1:8000/reviewposts/", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newReview),
    });

    const data = await response.json();
    await new Promise((resolve) => setTimeout(resolve, 4000));

    return data;
};
