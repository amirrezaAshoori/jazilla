"use client"
import { create } from "zustand";

export const useHeaderSearch = create((set) => ({
    showHeaderSearch: false,
    onShowHeaderSearch: () => set(() => ({ showHeaderSearch: true })),
    closeShowHeaderSearch: () => set(() => ({ showHeaderSearch: false })),

    showMobileHeaderSearch: false,
    onShowMobileHeaderSearch: () => set(() => ({ showMobileHeaderSearch: true })),
    closeShowMobileHeaderSearch: () => set(() => ({ showMobileHeaderSearch: false })),
    setMobileHeaderSearch: (value) => set(() => ({ showMobileHeaderSearch: value })),
}));