import { productClient } from "@/services/product.service";
import { useGlobalModalStateStore } from "@/store/modal";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export function useCreateQuestion() {
    const globalModal = useGlobalModalStateStore((state) => state);
    const queryClient = useQueryClient();

    const { mutate: createQuestion, isLoading } = useMutation(
        (data) => productClient.createQuestion(data),
        {
            onSuccess: ({ message }) => {
                toast.success(message);
            },
            onError: (error) => {
                const data = error?.response?.data;
                toast.error(data?.message || "Something went wrong!");
            },
            onSettled: () => {
                queryClient.refetchQueries(["questions"]);
                globalModal.setPostQuestionState(false, null);
            },
        }
    );

    return {
        createQuestion,
        isLoading,
    };
}