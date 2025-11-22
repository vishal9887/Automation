// postcss.config.cjs
// Try to load tailwindcss plugin if available; otherwise provide a
// harmless fallback that strips Tailwind-specific at-rules so PostCSS
// doesn't crash during development before deps are installed.
function stripTailwindAtRules() {
  return {
    postcssPlugin: 'postcss-strip-tailwind-at-rules',
    Once(root) {
      root.walkAtRules((rule) => {
        const name = rule.name && rule.name.toLowerCase()
        // Remove @tailwind, @layer, and @apply at-rules if Tailwind isn't present
        if (name === 'tailwind' || name === 'layer' || name === 'apply') {
          rule.remove()
        }
      })
    }
  }
}

// Build a safe plugins array: prefer real tailwind/autoprefixer when installed
// but fall back to a minimal stripper so PostCSS doesn't crash.
const plugins = []

// Always include our fallback stripper first (no-op when Tailwind is present)
plugins.push(stripTailwindAtRules())

try {
  // If tailwindcss is installed, use it and prefer its output
  // require.resolve throws if module is missing; catch below
  require.resolve('tailwindcss')
  // eslint-disable-next-line global-require, import/no-extraneous-dependencies
  const tailwind = require('tailwindcss')
  plugins.unshift(tailwind())
} catch (e) {
  // tailwind not installed — keep fallback
}

try {
  require.resolve('autoprefixer')
  // eslint-disable-next-line global-require, import/no-extraneous-dependencies
  const autoprefixer = require('autoprefixer')
  plugins.push(autoprefixer())
} catch (e) {
  // autoprefixer not present — it's optional for now
}

module.exports = { plugins }
