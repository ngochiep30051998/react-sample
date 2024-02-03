import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ThemeStoreState {
	menuDesktopOpen: boolean;
	toggleMenuDesktopOpen: () => void;
}

const useThemeStore = create<ThemeStoreState>()(
	persist(
		(set) => ({
			menuDesktopOpen: true,
			toggleMenuDesktopOpen: () =>
				set((state) => ({ menuDesktopOpen: !state.menuDesktopOpen })),
		}),
		{
			name: 'theme-storage', // unique name
			// storage: createJSONStorage(() => sessionStorage),
		},
	),
);
export default useThemeStore;
