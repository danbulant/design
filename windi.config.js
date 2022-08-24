// @ts-check - enable TS check for js file
import { defineConfig } from 'windicss/helpers';

export default defineConfig({
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                github: "#fafafa",
                discord: "#7289da"
            }
        }
    },
    plugins: [
        require('windicss/plugin/filters'),
        require('windicss/plugin/aspect-ratio'),
        require('windicss/plugin/line-clamp'),
    ]
})