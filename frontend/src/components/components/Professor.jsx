const Professor = ({fullName, description}) => {
    // get professor by id 
    // { label: xxx, id: xxx, "reviews"} 

    // fetch("http://localhost:8000/professor/id")
    return (
        <>
        <div className="container">
            <h1>{fullName}</h1>
            <h2>{description}</h2>
            
            
        </div>
        </>
    )
}

export default Professor;