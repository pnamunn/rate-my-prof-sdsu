import { getReviews2 } from '../components/reviewAPI';
import { useQuery } from '@tanstack/react-query';

export const useGetReviews = () => {
    const { data, error, isLoading } = useQuery({
        queryKey: ['reviews'],
        queryFn: () => getReviews2(),
    });

    return {
        data,
        error,
        isLoading,
    };
};