import { productClient } from "@/services/product.service";
import { useQuery } from "@tanstack/react-query";

export const useGetProductsQuery = (params, options = {}) => {
    return useQuery(
        ["products", params],
        () => productClient.getProducts(params),
        {
            ...options,
            keepPreviousData: true,
        }
    );
};

export const useGetTopRateProductsQuery = (params, options = {}) => {
    return useQuery(
        ["products", params],
        () => productClient.getTopRatedProducts(params),
        {
            ...options,
            keepPreviousData: true,
        }
    );
};