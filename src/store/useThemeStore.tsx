import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type ThemeMode = 'light' | 'dark';

interface ThemeStoreState {
  menuDesktopOpen: boolean;
  themeMode: ThemeMode;
  mobileDrawerOpen: boolean;
  toggleMenuDesktopOpen: () => void;
  toggleTheme: () => void;
  setMobileDrawerOpen: (open: boolean) => void;
}

const useThemeStore = create<ThemeStoreState>()(
  persist(
    (set) => ({
      menuDesktopOpen: true,
      themeMode: 'light',
      mobileDrawerOpen: false,
      toggleMenuDesktopOpen: () =>
        set((state) => ({ menuDesktopOpen: !state.menuDesktopOpen })),
      toggleTheme: () =>
        set((state) => ({
          themeMode: state.themeMode === 'light' ? 'dark' : 'light',
        })),
      setMobileDrawerOpen: (open) => set({ mobileDrawerOpen: open }),
    }),
    { name: 'theme-storage' }
  )
);
export default useThemeStore;
