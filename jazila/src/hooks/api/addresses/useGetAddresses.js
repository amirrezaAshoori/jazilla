import { addressClient } from '@/services/address.service';
import { API_ENDPOINTS } from '@/utils/api/api-endpoints';
import { useQuery } from '@tanstack/react-query';

export function useGetAddresses() {
    const { data, isLoading, error } = useQuery(
        [API_ENDPOINTS.ADDRESSES],
        addressClient.getCustomerAddresses
    );

    return { data, isLoading, error };
}

export function useGetAddress(id) {
    const { data, isLoading, error } = useQuery(
        [API_ENDPOINTS.ADDRESSES, id],
        () => addressClient.getAddress(id)
    );

    return { data, isLoading, error };
}