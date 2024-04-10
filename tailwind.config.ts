import type { Config } from 'tailwindcss'

const config: Config = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            colors: {
                gray: '#E6E6E6',
            },
        },
    },
    plugins: [],
}
export default config
