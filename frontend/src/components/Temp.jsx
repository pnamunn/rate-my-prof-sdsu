// import {
//     useQuery,
//     useMutation,
//     useQueryClient,
//     QueryClient,
//     QueryClientProvider,
//   } from '@tanstack/react-query'

// function getReviews () {
//     return fetch("http://127.0.0.1:8000/reviewposts/").then((response) => response.json());
//     }


// const Temp = () => {
//     return (
//         <>
//         <Reviews/>
//         </>
//     )
// } 

// export default Temp;

// function Reviews() {
//     // Access the client
//     const queryClient = useQueryClient()
  
//     // Queries
//     const query = useQuery({ 
//         queryKey: ['reviews'], 
//         queryFn: getReviews })
  
  
//     return (
//       <div>
//         <ul>{query.data?.map((review) => 
//             <li key={review.id}>{review.professorName}</li>
//             )}
//         </ul>
  

//       </div>
//     )
//   }