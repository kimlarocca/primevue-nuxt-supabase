import {
    useIsDarkMode
} from "~/composables/states"

export const setDarkMode = () => {
    document.body.classList.add('style-mode-dark')
    document.body.classList.remove('style-mode-light')
    document.cookie = 'colorMode=dark; path=/; max-age=31536000' // stores for 1 year
    const isDarkMode = useIsDarkMode()
    isDarkMode.value = true
}

export const setLightMode = () => {
    document.body.classList.add('style-mode-light')
    document.body.classList.remove('style-mode-dark')
    document.cookie = 'colorMode=light; path=/; max-age=31536000' // stores for 1 year
    const isDarkMode = useIsDarkMode()
    isDarkMode.value = false
}

export const checkColorMode = () => {
    const isDarkMode = useIsDarkMode()
    const cookies = document.cookie.split(';')
    const colorMode = cookies
        .find(cookie => cookie.trim().startsWith('colorMode='))
        ?.split('=')[1]
    if (colorMode === 'dark') {
        setDarkMode()
        isDarkMode.value = true
    } else if (colorMode === 'light') {
        setLightMode()
        isDarkMode.value = false
    } else {
        // Default to system preference if no cookie exists
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setDarkMode()
        } else {
            setLightMode()
        }
    }
}