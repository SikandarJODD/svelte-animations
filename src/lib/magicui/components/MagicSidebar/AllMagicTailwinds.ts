export let allMagicTailwinds = {
    'ripple': `// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        ripple: "ripple 3400ms ease infinite",
      },
      keyframes: {
        ripple: {
          "0%, 100%": {
            transform: "translate(-50%, -50%) scale(1)",
          },
          "50%": {
            transform: "translate(-50%, -50%) scale(0.9)",
          },
        },
      },
    },
  },
};
`
}