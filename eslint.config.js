import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  unocss: true,
  astro: true,
  vue: true,
  typescript: true,
  ignores: ['src/presets/**/*'],
})
