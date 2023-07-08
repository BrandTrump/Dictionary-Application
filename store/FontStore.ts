import { create } from "zustand";

interface FontState {
  font: string;
  setFont: (font: string) => void;
}

export const useFontStore = create<FontState>((set) => ({
  font: "serif",
  setFont: (font) => set({ font }),
}));
