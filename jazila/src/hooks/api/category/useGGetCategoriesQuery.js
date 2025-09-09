import { categoryClient } from "@/services/category.service";
import { API_ENDPOINTS } from "@/utils/api/api-endpoints";
import { useQuery } from "@tanstack/react-query";

export const useGetCategoriesQuery = (options) => {
    return useQuery(
        [API_ENDPOINTS.CATEGORIES, options],
        categoryClient.getCategories,
        {
            keepPreviousData: true,
        }
    );
};