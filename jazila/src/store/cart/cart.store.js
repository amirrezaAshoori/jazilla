import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import {
    addItemWithQuantity,
    calculateItemTotals,
    calculateTotal,
    calculateTotalItems,
    calculateUniqueItems,
    getItem,
    inStock,
    removeItem,
    removeItemOrQuantity,
} from "./cart.utils";

const generateFinalState = (state, items) => {
    const totalUniqueItems = calculateUniqueItems(items);
    return {
        ...state,
        items: calculateItemTotals(items),
        totalItems: calculateTotalItems(items),
        totalUniqueItems,
        total: calculateTotal(items),
        isEmpty: totalUniqueItems === 0,
    };
};

export const useCartStore = create(
    devtools(
        persist(
            (set, get) => ({
                items: [],
                isEmpty: true,
                totalItems: 0,
                totalUniqueItems: 0,
                total: 0,
                meta: null,

                addItemToCart: async (item, quantity) => {
                    const items = addItemWithQuantity(get().items, item, quantity);
                    return set(generateFinalState(get(), items));
                },

                removeItemFromCart: async (id, quantity = 1) => {
                    const items = removeItemOrQuantity(get().items, id, quantity);
                    return set(generateFinalState(get(), items));
                },

                clearItemFromCart: async (id) => {
                    const items = removeItem(get().items, id);
                    return set(generateFinalState(get(), items));
                },

                getItemFromCart(id) {
                    return getItem(get().items, id);
                },

                isInCart(id) {
                    return inStock(get().items, id);
                },

                isInStock(id) {
                    const item = getItem(get().items, id);
                    if (item) return item["quantity"] < item["stock"];
                    return false;
                },

                resetCart() {
                    return set({
                        items: [],
                        isEmpty: true,
                        totalItems: 0,
                        totalUniqueItems: 0,
                        total: 0,
                        meta: null,
                    });
                },
            }),
            { name: "cart" }
        )
    )
);