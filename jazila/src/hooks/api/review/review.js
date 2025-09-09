import { reviewClient } from "@/services/review.service";
import { useGlobalModalStateStore } from "@/store/modal";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export function useReviews(options = {}) {
    return useQuery(
        ["reviews", options],
        () => reviewClient.getReviews(options),
        {
            keepPreviousData: true,
        }
    );
}

export function useReview({ id }) {
    const { data, isLoading, error } = useQuery(
        ["reviews", id],
        () => reviewClient.getReview(id),
        {
            enabled: Boolean(id),
        }
    );

    return {
        review: data,
        isLoading,
        error,
    };
}

export function useCreateReview() {
    const globalModal = useGlobalModalStateStore((state) => state);
    const queryClient = useQueryClient();

    const { mutate: createReview, isLoading } = useMutation(
        (data) => reviewClient.createReview(data),
        {
            onSuccess: ({ message }) => {
                toast.success(message);
            },
            onError: (error) => {
                const data = error?.response?.data;
                toast.error(data?.message || "Something went wrong!");
            },
            onSettled: () => {
                queryClient.invalidateQueries(["reviews"]);
                globalModal.setReviewModalState(false, null);
            },
        }
    );

    return {
        createReview,
        isLoading,
    };
}

export function useUpdateReview() {
    const globalModal = useGlobalModalStateStore((state) => state);
    const queryClient = useQueryClient();

    const { mutate: updateReview, isLoading } = useMutation(
        (data) => reviewClient.updateReview(data),
        {
            onSuccess: ({ message }) => {
                toast.success(message);
            },
            onError: (error) => {
                const data = error?.response?.data;
                toast.error(data?.message || "Something went wrong!");
            },
            onSettled: () => {
                queryClient.invalidateQueries(["reviews"]);
                globalModal.setReviewModalState(false, null);
            },
        }
    );

    return {
        updateReview,
        isLoading,
    };
}