"use client";

import { create } from "zustand";

export const useGlobalModalStateStore = create((set) => ({
    userMenu: false,
    onUserMenu: () => set({ userMenu: true }),
    closeUserMenu: () => set({ userMenu: false }),

    cartState: false,
    onCartState: () => set({ cartState: true }),
    closeCartState: () => set({ cartState: false }),

    menubar: false,
    onMenubar: () => set({ menubar: true }),
    closeMenubar: () => set({ menubar: false }),

    showHeaderSearch: false,
    onShowHeaderSearch: () => set({ showHeaderSearch: true }),
    closeShowHeaderSearch: () => set({ showHeaderSearch: false }),

    quickView: false,
    quickViewState: null,
    setQuickViewState: (quickView, quickViewState) =>
        set({ quickView, quickViewState }),

    showPostQuestion: false,
    postQuestionState: null,
    setPostQuestionState: (showPostQuestion, postQuestionState) =>
        set({ showPostQuestion, postQuestionState }),

    showReviewModal: false,
    reviewModalState: null,
    setReviewModalState: (showReviewModal, reviewModalState) =>
        set({ showReviewModal, reviewModalState }),

    sideFilter: false,
    onSideFilter: () => set({ sideFilter: true }),
    closeSideFilter: () => set({ sideFilter: false }),

    showAddress: false,
    addressData: null,
    setAddressData: (showAddress, addressData) =>
        set({ showAddress, addressData }),

    showEditAddress: false,
    editAddressData: null,
    setEditAddressData: (showEditAddress, editAddressData) =>
        set({ showEditAddress, editAddressData }),

    showDeleteAddress: false,
    deleteAddressData: null,
    setDeleteAddressData: (showDeleteAddress, deleteAddressData) =>
        set({ showDeleteAddress, deleteAddressData }),
}));