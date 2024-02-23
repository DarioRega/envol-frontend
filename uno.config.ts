// uno.config.ts
import { defineConfig } from 'unocss'
import presetIcons from '@unocss/preset-icons';
import presetWind from '@unocss/preset-wind'
import presetMini from '@unocss/preset-mini'
import presetTypography from '@unocss/preset-typography'
import { presetFluid } from 'unocss-preset-fluid'

export default defineConfig({
    presets:[
        presetIcons({
            extraProperties: {
                display: 'block'
            },
            collections: {
                heroicons: () => import('@iconify-json/heroicons/icons.json').then(i => i.default)
            }
        }),
        presetFluid({
            maxWidth: 1440,
            extendMaxWidth: 1920,
            minWidth: 320,
            ranges: {
                xs: [14, 16],
                sm: [14, 18],
                md: [18, 24],
                lg: [22, 30],
                xl: [30, 36],
                '2xl': [36, 60]
            }
        }),
        presetTypography(),
        presetMini(),
        presetWind()
    ],
    theme: {
        breakpoints: {
            '2xs': '320px',
            'xs': '375px',
            'xsm': '420px',
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
            '3xl': '1920px'
        },
        colors: {
        'primary': '#011993'
        }
    },
    shortcuts: {
        'container': 'mx-auto max-w-7xl px-6 lg:px-8',
        'container-sm': 'mx-auto max-w-3xl px-6 lg:px-8',
        'title-2xl': 'f-text-2xl font-bold tracking-tight text-gray-900',
        'title-xl': 'f-text-xl font-bold tracking-tight text-gray-800',
        'title-lg': 'f-text-lg font-semibold tracking-tight text-gray-800',
        'title-base': 'f-text-md font-medium tracking-tight text-gray-800',
        'body-lg': 'f-text-sm font-normal leading-8 text-gray-700',
        'body-base': 'f-text-xs font-normal leading-7 text-gray-600',
        //'text-primary': 'text-[#011993]',
        //'bg-primary': ' bg-[#011993]',
        'link': 'f-text-xs font-semibold leading-6 text-gray-900 hover:text-gray-700 cursor-pointer',
        'btn': 'cursor-pointer rounded-md px-3.5 py-2.5 f-text-xs font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
        'btn--primary': 'bg-primary hover:bg-[#011993]/90 focus-visible:outline-primary'

    }
})