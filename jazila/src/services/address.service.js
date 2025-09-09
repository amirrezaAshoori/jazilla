import { HttpClient } from "@/utils/api/http";

export const addressClient = {
    addressCreate: (variables) => {
        return HttpClient.post("/addresses", variables);
    },

    getCustomerAddresses: () => {
        return HttpClient.get("/addresses/customer");
    },

    addressDelete: (id) => {
        return HttpClient.delete(`/addresses/${id}`);
    },

    addressUpdate: ({ id, input }) => {
        return HttpClient.patch(`/addresses/${id}`, input);
    },

    getAddress: (id) => {
        return HttpClient.get(`/addresses/${id}`);
    },
};