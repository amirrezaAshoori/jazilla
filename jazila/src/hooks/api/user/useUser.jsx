"use client";
import { userClient } from "@/services/user.service";
import { profileSchema } from "@/validations/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useMe } from "./useMe";

export function useUser() {
    const { me: user } = useMe();
    const queryClient = useQueryClient();

    const {
        mutateAsync: editProfileMutation,
        isLoading: editProfileLoading,
        isError: isEditProfileError,
    } = useMutation((data) => userClient.updateUser(data));

    const profileEditForm = useForm({
        resolver: zodResolver(profileSchema),
        defaultValues: {
            avatar: user?.avatar || "",
            firstName: user?.firstName || "",
            lastName: user?.lastName || "",
            email: user?.email || "",
            contact: user?.contact || "",
        },
    });

    const attemptEditProfile = async (data) => {
        toast.promise(editProfileMutation(data), {
            loading: "Updating...",
            success: (res) => {
                queryClient.invalidateQueries(["me"]);
                return <b>{res.message}</b>;
            },
            error: (error) => {
                const errData = error?.response?.data;
                return <b>{errData?.message || "Something went wrong!"}</b>;
            },
        });
    };

    return {
        profileEditForm,
        attemptEditProfile,
        editProfileLoading,
        isEditProfileError,
    };
}