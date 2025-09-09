import { API_ENDPOINTS } from "@/utils/api/api-endpoints";
import { HttpClient } from "@/utils/api/http";

export const productClient = {
    getProducts: async ({ queryKey }) => {
        const [_key, params] = queryKey;
        const {
            page,
            text,
            type,
            category,
            shop_id,
            price,
            status,
            limit = 15,
            orderBy = "updatedAt",
            sortedBy = "desc",
        } = params || {};

        const url = `${API_ENDPOINTS.PRODUCTS}?${text ? `search=${text}` : ""}${type ? `&type=${type}` : ""
            }${price ? `&price=${price}` : ""}${category ? `&category=${category}` : ""
            }${shop_id ? `&shop=${shop_id}` : ""}${status ? `&status=${status}` : ""
            }&searchJoin=and&limit=${limit}&page=${page}&orderBy=${orderBy}&sortedBy=${sortedBy}`;

        return HttpClient.get(url);
    },

    getTopRatedProducts: async ({ queryKey }) => {
        const [_key, params] = queryKey;
        const {
            page,
            text,
            type,
            category,
            shop_id,
            price,
            status,
            limit = 15,
            orderBy = "updatedAt",
            sortedBy = "desc",
        } = params || {};

        const url = `${API_ENDPOINTS.PRODUCTS}/top/rated?${text ? `search=${text}` : ""}${type ? `&type=${type}` : ""
            }${price ? `&price=${price}` : ""}${category ? `&category=${category}` : ""
            }${shop_id ? `&shop=${shop_id}` : ""}${status ? `&status=${status}` : ""
            }&searchJoin=and&limit=${limit}&page=${page}&orderBy=${orderBy}&sortedBy=${sortedBy}`;

        return HttpClient.get(url);
    },

    getProduct: async (slug) => {
        return HttpClient.get(`/products/${slug}`);
    },

    createQuestion: async (data) => {
        return HttpClient.post("/questions", data);
    },

    getQuestions: async ({ queryKey }) => {
        const [_key, params] = queryKey;
        const {
            page,
            limit = 15,
            shop_id,
            orderBy = "updatedAt",
            sortedBy = "desc",
            user,
            product,
        } = params || {};

        const url = `/questions?${shop_id ? `shop=${shop_id}` : ""}&limit=${limit}&page=${page}&orderBy=${orderBy}&sortedBy=${sortedBy}${user ? `&user=${user}` : ""
            }${product ? `&product=${product}` : ""}`;

        return HttpClient.get(url);
    },
};
