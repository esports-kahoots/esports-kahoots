import { ColorMode, extendTheme, NativeBaseProvider } from 'native-base';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';

const customTheme = extendTheme({
    config: {
        initialColorMode: 'dark',
    },
    colors: {
        text: {
            primary: {
                light: '#060606',
                dark: '#E9E9E9',
            },
            secondary: {
                light: '#221E1E',
                dark: '#aaaaaa',
            },
            grey: {
                primary: {
                    light: '#BFB9B9',
                    dark: '#aaaaaa',
                },
                secondary: {
                    light: '#514E4E',
                    dark: '#E9E9E9',
                },
            },
            alternate: {
                light: '#706B6B',
                dark: '#706B6B',
            },
            speaking: {
                light: '#A29E9E',
                dark: '#A29E9E',
            },
        },
        icon: {
            primary: {
                light: '#514E4E',
                dark: '#F6F0E7',
            },
        },
        background: {
            primary: {
                light: '#FEFAE0',
                dark: '#353232',
            },
            secondary: {
                light: '#FEFAD0',
                dark: '#221E1E',
            },
            tertiary: {
                light: '#FCF6EE',
                dark: '#403E3E',
            },
            hover: {
                light: '#FCF6EE',
                dark: '#403E3E',
            },
            options: {
                light: '#FCF6EE',
                dark: '#221E1E',
            },
            medBeige: {
                light: '#FCF6EE',
                dark: '#403E3E',
            },
            beige: {
                light: '#F7F0E7',
                dark: '#403E3E',
            },
        },
        primary: {
            light: '#DDA15E',
            dark: '#DDA15E',
        },
        primaryAccent: {
            light: '#BC6C25',
            dark: '#BC6C25',
        },
        secondary: {
            light: '#606C38',
            dark: '#606C38',
        },
        secondaryAccent: {
            light: '#283618',
            dark: '#283618',
        },
    },
});

// extend the theme
type MyThemeType = typeof customTheme;
declare module 'native-base' {
    interface ICustomTheme extends MyThemeType {}
}

const config = {
    // dependencies: {
    //     'linear-gradient': require('react-native-web-linear-gradient').default,
    // },
};

// Define the native base color mode manager that will persist the dark mode setting
const colorModeManager: any = {
    get: async () => {
        let val = localStorage.getItem('dark-mode');
        return val === 'dark' ? 'dark' : 'light';
    },
    set: async (value: ColorMode) => {
        let strValue = value ? value.toString() : '';
        localStorage.setItem('dark-mode', strValue);
    },
};

ReactDOM.render(
    <React.StrictMode>
        <NativeBaseProvider
            colorModeManager={colorModeManager}
            theme={customTheme}
            config={config}
        >
            <App />
        </NativeBaseProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
