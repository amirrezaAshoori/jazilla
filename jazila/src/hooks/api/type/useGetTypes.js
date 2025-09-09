"use client";
import { groupClient } from "@/services/group.service";
import { API_ENDPOINTS } from "@/utils/api/api-endpoints";
import { useQuery } from "@tanstack/react-query";

export function useTypes(options = {}) {
    const { data, isLoading, error } = useQuery(
        [API_ENDPOINTS.TYPES, options],
        () => groupClient.getAllGroups(options)
    );

    return {
        types: data,
        isLoading,
        error,
    };
}

export function useType(slug) {
    const { data, isLoading, error } = useQuery(
        [API_ENDPOINTS.TYPES, slug],
        () => groupClient.getGroup(slug),
        {
            enabled: Boolean(slug),
        }
    );

    return {
        type: data,
        isLoading,
        error,
    };
}