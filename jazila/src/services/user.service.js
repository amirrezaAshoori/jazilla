import { API_ENDPOINTS } from "@/utils/api/api-endpoints";
import { HttpClient } from "@/utils/api/http";

export const userClient = {
    me: () => {
        return HttpClient.get(`/users/${API_ENDPOINTS.ME}`);
    },

    login: (variables) => {
        return HttpClient.post(`/auth/${API_ENDPOINTS.LOGIN}`, variables);
    },

    emailVerify: (variables) => {
        return HttpClient.post(`/auth/${API_ENDPOINTS.ACTIVATE}`, variables);
    },

    changePassword: (variables) => {
        return HttpClient.post(`/auth/${API_ENDPOINTS.CHANGE_PASSWORD}`, variables);
    },

    updateUser: (variables) => {
        return HttpClient.patch(`/users`, variables);
    },

    logout: () => {
        return HttpClient.post(`/auth/${API_ENDPOINTS.LOGOUT}`, {});
    },

    loginWithGoogle: (variables) => {
        return HttpClient.post(`/auth/${API_ENDPOINTS.GOOGLE}`, variables);
    },

    register: (variables) => {
        return HttpClient.post(`/auth/${API_ENDPOINTS.REGISTER}`, variables);
    },
};