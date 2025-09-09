import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useCheckoutStore = create(
    devtools((set, get) => ({
        address: null,
        shipping_address: null,
        delivery_time: null,
        payment_gateway: "COD",
        customer_contact: "",
        customer_name: "",
        verified_response: null,
        coupon: null,
        payable_amount: 0,
        use_wallet: false,

        clearCheckout: () =>
            set({
                address: null,
                shipping_address: null,
                delivery_time: null,
                payment_gateway: "COD",
                customer_contact: "",
                customer_name: "",
                verified_response: null,
                coupon: null,
                payable_amount: 0,
                use_wallet: false,
            }),

        setAddress: (data) => set((state) => ({ ...state, address: data })),
        setDeliveryTime: (data) => set((state) => ({ ...state, delivery_time: data })),
        setPaymentGateway: (data) => set((state) => ({ ...state, payment_gateway: data })),
        setVerifiedToken: (data) => set((state) => ({ ...state, token: data })),
        setCustomerContact: (data) => set((state) => ({ ...state, customer_contact: data })),
        setVerifiedResponse: (data) => set((state) => ({ ...state, verified_response: data })),
        setCoupon: (data) => set((state) => ({ ...state, coupon: data })),
        setDiscount: () => set((state) => ({ ...state, discount: state.coupon ? state.coupon.amount : 0 })),
        setWallet: () => set((state) => ({ ...state, use_wallet: !state.use_wallet })),
        setPayableAmount: (data) => set((state) => ({ ...state, payable_amount: data })),
    }))
);