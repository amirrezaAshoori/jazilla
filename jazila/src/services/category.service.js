import { API_ENDPOINTS } from "@/utils/api/api-endpoints";
import { HttpClient } from "@/utils/api/http";

export const categoryClient = {
    getCategories: async ({ queryKey }) => {
        const [_key, params = {}] = queryKey;

        const {
            page,
            text,
            limit = 15,
            type,
            orderBy = "updatedAt",
            sortedBy = "desc",
        } = params;

        const url = `/categories?${text ? `search=${text}&` : "" }${type ? `type = ${type}&` : ""
            }searchJoin = and & limit=${limit}& page=${page}& orderBy=${orderBy}& sortedBy=${sortedBy}`;

        return HttpClient.get(url);
    },

    getAllCategories: async ({ queryKey }) => {
        const [_key, params = {}] = queryKey;

        const {
            page,
            text,
            limit = 15,
            type,
            orderBy = "updatedAt",
            sortedBy = "desc",
        } = params;

        const url = `${API_ENDPOINTS.CATEGORIES
            } / all ? ${text ? `search = ${text}&` : ""
}${type ? `type = ${type}&` : ""

                } searchJoin = and & limit=${limit}& page=${page}& orderBy=${orderBy}& sortedBy=${sortedBy}`;

        return HttpClient.get(url);
    },

    getCategory: async (slug) => {
        return HttpClient.get(`${API_ENDPOINTS.CATEGORIES} / ${slug}`);
    },
};