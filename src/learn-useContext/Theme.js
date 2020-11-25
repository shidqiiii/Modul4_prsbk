import React, { useState, useContext } from "react";
import "./Theme.css"

const themes = {
    light: {
        id: 1,
        foreground: '#000000',
        background: "#eeeeee",
    },
    dark: {
        id: 2,
        foreground: "#ffffff",
        background: "#222222",
    },
};

const ThemeContext = React.createContext(themes.light);

export default function Index() {
    const [theme, setTheme] = useState(themes.dark);

    const changeTheme = () => {
        if (theme.id === themes.light.id) {
            setTheme(themes.dark);
        }
        else {
            setTheme(themes.light);
        }
    };

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            <div className="main" style={{ background: theme.background, color: theme.foreground }}>
                <p className="Text">
                    Theme by useContext
                </p>
                <p>
                    Kelompok 10
                </p>
                <ThemedButton />
            </div>
        </ThemeContext.Provider>
    );
}

function ThemedButton() {
    const { theme, changeTheme } = useContext(ThemeContext);

    return (
        <button
            className="Button"
            style={{ background: theme.background, color: theme.foreground }}
            onClick={changeTheme}>
            Iam stled by theme contexxt
        </button>
    );
}