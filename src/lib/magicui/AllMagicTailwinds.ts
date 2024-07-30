export let allMagicTailwinds = {
  ripple: `// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        // ripple: "ripple 3400ms ease infinite",
        ripple:'ripple var(--duration,2s) ease calc(var(--i, 0)*.2s) infinite',
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
`,
  "animated-shiny-text": `// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        shimmer: "shimmer 8s infinite",
      },
      keyframes: {
        shimmer: {
          "0%, 90%, 100%": {
            "background-position": "calc(-100% - var(--shimmer-width)) 0",
          },
          "30%, 60%": {
            "background-position": "calc(100% + var(--shimmer-width)) 0",
          },
        },
      },
    },
  },
};`,
  "animated-gradient-text": `
  // tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        gradient: "gradient 8s linear infinite",
      },
      keyframes: {
        gradient: {
          to: {
            backgroundPosition: "var(--bg-size) 0",
          },
        },
      },
    },
  },
};`,
  marquee: `// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
      },
    },
  },
};`,
  "orbiting-circles": `// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        orbit: "orbit calc(var(--duration)*1s) linear infinite",
      },
      keyframes: {
        orbit: {
          "0%": {
            transform:
              "rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)",
          },
          "100%": {
            transform:
              "rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)",
          },
        },
      },
    },
  },
};
`,
  shimmer: `// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        "spin-around": "spin-around calc(var(--speed) * 2) infinite linear",
        magicslide: "magicslide var(--speed) ease-in-out infinite alternate",
      },
      keyframes: {
        "spin-around": {
          "0%": {
            transform: "translateZ(0) rotate(0)",
          },
          "15%, 35%": {
            transform: "translateZ(0) rotate(90deg)",
          },
          "65%, 85%": {
            transform: "translateZ(0) rotate(270deg)",
          },
          "100%": {
            transform: "translateZ(0) rotate(360deg)",
          },
        },
        magicslide: {
          to: {
            transform: "translate(calc(100cqw - 100%), 0)",
          },
        },
      },
    },
  },
};
`,
  retroGrid: `/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      animation: {
        grid: "grid 15s linear infinite",
      },
      keyframes: {
        grid: {
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
    },
  },
};
`,
  "border-beam": `/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      animation: {
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
      },
      keyframes: {
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
      },
    },
  },
};
`,
  meteors: `/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      animation: {
        meteor: "meteor 5s linear infinite",
      },
      keyframes: {
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: 1 },
          "70%": { opacity: 1 },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: 0,
          },
        },
      },
    },
  },
};
`,
  "bg-boxes": `
  /** @type {import('tailwindcss').Config} */
module.exports = {
 plugins: [
    addVariablesForColors,  // below is the function 
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-grid": (value: any) => ({
            backgroundImage: \`url("\${svgToDataUri(
              \`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="\${value}"><path d="M0 .5H31.5V32"/></svg>\`
            )}")\`,
          }),
          "bg-grid-small": (value: any) => ({
            backgroundImage: \`url("\${svgToDataUri(
              \`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="\${value}"><path d="M0 .5H31.5V32"/></svg>\`
            )}")\`,
          }),
          "bg-dot": (value: any) => ({
            backgroundImage: \`url("\${svgToDataUri(
              \`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="\${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>\`
            )}")\`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [\`--\${key}\`, val])
  );

  addBase({
    ":root": newVars,
  });
}
  for more details visit : https://github.com/SikandarJODD/svelte-animations/blob/master/tailwind.config.ts
`,
};
