import { HttpClient } from "@/utils/api/http";

export const reviewClient = {
    getReviews: async ({ queryKey }) => {
        const [_key, params] = queryKey;
        const {
            page,
            limit = 15,
            product,
            shop,
            user,
            orderBy = "updatedAt",
            sortedBy = "desc",
        } = params || {};

        const url = `/reviews?${product ? `product=${product}&` : ""}${shop ? `shop=${shop}&` : ""
            }${user ? `user=${user}&` : ""}searchJoin=and&limit=${limit}&page=${page}&orderBy=${orderBy}&sortedBy=${sortedBy}`;

        return HttpClient.get(url);
    },

    getReview: async (id) => {
        return HttpClient.get(`/reviews/${id}`);
    },

    createReview: async (data) => {
        return HttpClient.post("/reviews", data);
    },

    updateReview: async ({ variables: { input, id } }) => {
        return HttpClient.put(`/reviews/${id}`, input);
    },
};