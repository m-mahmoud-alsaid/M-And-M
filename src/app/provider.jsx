import ThemeProvider from '@/stores/theme/themeProvider'

function Provider({ children }) {

    return (
        <ThemeProvider>
            {children}
        </ThemeProvider>
    )
}

export default Provider;