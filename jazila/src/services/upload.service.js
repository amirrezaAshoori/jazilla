import { HttpClient } from "@/utils/api/http";

export const uploadImage = async (formData) => {
    return await HttpClient.post("/upload/image", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
};

export const uploadImages = async (formData) => {
    return await HttpClient.post("/upload/images", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
};