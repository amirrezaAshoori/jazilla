import { categoryClient } from "@/services/category.service";
import { API_ENDPOINTS } from "@/utils/api/api-endpoints";
import { useInfiniteQuery } from "@tanstack/react-query";

export function useGetCategories(options) {
    const {
        data,
        isLoading,
        error,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isFetchingNextPage,
    } = useInfiniteQuery(
        [API_ENDPOINTS.CATEGORIES, options],
        ({ queryKey, pageParam }) =>
            categoryClient.getAllCategories(Object.assign({}, queryKey[1], pageParam)),
        {
            getNextPageParam: ({ page }) => ({ page: page + 1 }),
        }
    );

    function handleLoadMore() {
        fetchNextPage();
    }

    return {
        categories: data?.pages.flatMap((page) => page.docs) ?? [],
        paginatorInfo: data?.pages[0] ?? {},
        isLoading,
        error,
        isFetching,
        isLoadingMore: isFetchingNextPage,
        loadMore: handleLoadMore,
        hasMore: Boolean(hasNextPage),
    };
}