export type PaletteMode = "dark" | "light"


export interface Style {
    text: string;
    background: string;
    elements: string;
    borda: string
    input?: string;
}

export interface StyleProps {
    styleContext: Style;
}
export const styles: Record<PaletteMode, Style> = {
    light: {
        text: 'hsl(200, 15%, 8%)',
        background: 'hsl(0, 0%, 98%)',
        elements: 'hsl(0, 0%, 100%)',
        input: 'hsl(0, 0%, 52%)',
        borda: 'hsl(0, 0%, 52%, 0.5)',
    },
    dark: {
        text: 'hsl(0, 0%, 100%)',
        background: 'hsl(207, 26%, 17%)',
        elements: 'hsl(209, 23%, 22%)',
        borda: 'hsl(0, 0%, 52%, 0.5)',

    }
}
