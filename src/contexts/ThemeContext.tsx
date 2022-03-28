import React from 'react';
import { PaletteMode, Style, styles } from 'config/styles';
import { STORAGE_ITEM_NAME_THEME } from 'constants/constants';


interface ThemeDataContext {
    changeTheme(mode: PaletteMode): void
    mode: PaletteMode
    style: Style
}

const ThemeContext = React.createContext<ThemeDataContext>({ changeTheme: () => {}, mode: 'light', style: styles['light']});

export const ThemeProvider: React.FC = ({children}) => { 
    const [mode, setMode] = React.useState<PaletteMode>(() => {
        const storagedTheme = localStorage.getItem(STORAGE_ITEM_NAME_THEME);
        if (storagedTheme) {
            return storagedTheme as PaletteMode;
        } else {
            return 'light';
        }
    });
    localStorage.getItem("lastname");

    const colorMode = React.useMemo<ThemeDataContext>(
        () => ({
            changeTheme: (newMode: PaletteMode) => {
                if (newMode) {
                    localStorage.setItem(STORAGE_ITEM_NAME_THEME, newMode);
                    setMode(
                        newMode
                    );
                }
            },
            mode,
            style: styles[mode]
        }),
        [mode],
    );

    return (
        <ThemeContext.Provider value={colorMode}>
                {children}
        </ThemeContext.Provider>
    )
}


export function useTheme(): ThemeDataContext {
    const context = React.useContext<ThemeDataContext>(ThemeContext);
    return context;
}