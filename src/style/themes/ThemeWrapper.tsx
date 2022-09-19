
import App from '../../App';
import { useState } from 'react';
import { ThemeProvider } from '@emotion/react'
import { ThemeManager } from './ThemeManager'
import { Event } from '../../constants/events'

function Environment() {

    const [theme, setTheme] = useState(0)
    const [mode, setMode] = useState(false)

    window.addEventListener(Event.DARK_MODE, ((e: CustomEvent) => {
        e.preventDefault()
        setMode(!mode);
    }) as EventListener);

    window.addEventListener(Event.SET_THEME, ((e: CustomEvent) => {
        e.preventDefault()
        setTheme(parseInt(e.detail.value))
    }) as EventListener);

    return (
        <ThemeProvider theme={ThemeManager(theme, mode)}>
            <App/>
        </ThemeProvider>
    );

}

export default Environment;
