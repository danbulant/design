// @ts-check - enable TS check for js file
import { defineConfig } from 'windicss/helpers';

export default defineConfig({
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                github: "#fafafa",
                discord: "#7289da",
                'primary-dark': '#242038',
                primary: '#9067C6',
                bg: '#110F1A',
                'bg-code': '#100d11',
                success: '#7CEEC8'
            },
            fontFamily: {
                mono: "'Fira Code VF', 'Fira Code', monospace"
            }
        }
    },
    plugins: [
        require('windicss/plugin/filters'),
        require('windicss/plugin/aspect-ratio'),
        require('windicss/plugin/line-clamp'),
    ]
})