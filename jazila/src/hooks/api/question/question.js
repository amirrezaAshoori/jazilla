import { productClient } from "@/services/product.service";
import { useQuery } from "@tanstack/react-query";

export const useQuestionsQuery = (options = {}) => {
    return useQuery(
        ["questions", options],
        () => productClient.getQuestions(options),
        {
            keepPreviousData: true,
        }
    );
};