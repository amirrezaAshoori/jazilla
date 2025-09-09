import { API_ENDPOINTS } from "@/utils/api/api-endpoints";
import { HttpClient } from "@/utils/api/http";

export const groupClient = {
  getAllGroups: async () => {
    return HttpClient.get(`${API_ENDPOINTS.TYPES}/all`);
  },

  getGroup: async (slug) => {
    return HttpClient.get(`${API_ENDPOINTS.TYPES}/${slug}`);
  },
};