import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const LocalStoragePaginationModeKey = "pagination-mode";

export const PaginationModeEnum = {
  infinite: "infinite scroll",
  controls: "page controls",
} as const;

export type TPaginationMode =
  (typeof PaginationModeEnum)[keyof typeof PaginationModeEnum];

interface PaginationModeState {
  paginationMode: TPaginationMode;
  setPaginationMode: (newVoice: TPaginationMode) => void;
  togglePaginationMode: () => void;
}

export const usePaginationModeStore = create<PaginationModeState>()(
  persist(
    (set) => ({
      paginationMode: PaginationModeEnum.controls,

      setPaginationMode: (newMode) =>
        set((state) => ({
          ...state,
          paginationMode: newMode,
        })),

      togglePaginationMode: () =>
        set((state) => ({
          ...state,
          paginationMode:
            state.paginationMode === PaginationModeEnum.controls
              ? PaginationModeEnum.infinite
              : PaginationModeEnum.controls,
        })),
    }),
    {
      name: LocalStoragePaginationModeKey,
      storage: createJSONStorage<TPaginationMode>(() => localStorage),
    },
  ),
);
