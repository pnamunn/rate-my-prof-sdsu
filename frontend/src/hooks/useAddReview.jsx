import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addReview } from '../components/reviewAPI';

export const useAddReview = () => {
    const QueryKey = ['reviews'];

    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (newReview) => addReview(newReview),
        onSuccess: () => {
            queryClient.invalidateQueries(QueryKey);
        },
        onError: (error) => {
            console.log(error);
        },
    });
};