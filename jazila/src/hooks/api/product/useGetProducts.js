import { useQuery } from "@tanstack/react-query";
import { productClient } from "@/services/product.service";

export const useProductQuery = (slug) => {
    return useQuery(
        ["products", slug],
        () => productClient.getProduct(slug),
        {
            keepPreviousData: true,
        }
    );
};