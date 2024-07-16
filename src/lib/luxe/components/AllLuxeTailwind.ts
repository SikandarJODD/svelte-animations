
export let allLuxeTailwind = {
    ["animated-border"]: `   {
      animation: {
        flip: "flip 6s infinite steps(2, end)",
        kitrotate: "kitrotate 3s linear infinite both",
      },
      keyframes: {
        flip: {
          to: {
            transform: "rotate(360deg)",
          },
        },
        kitrotate: {
          to: {
            transform: "rotate(90deg)",
          },
        },
      },
    }`,
    ["shine"]: `    {
      animation: {
        shine: "shine 2s linear infinite",
      },
      keyframes: {
        shine: {
          from: { backgroundPosition: "0 0" },
          to: { backgroundPosition: "-200% 0" },
        },
      },
    }`,
    ["border-width"]: `{
      animation: {
        "border-width": "border-width 3s infinite alternate",
      },
      keyframes: {
        "border-width": {
          from: { width: "10px", opacity: "0" },
          to: { width: "100px", opacity: "1" },
        },
      },
    }`,
    ["text-gradient"]: `{
      animation: {
        "text-gradient": "text-gradient 1.5s linear infinite",
      },
      keyframes: {
        "text-gradient": {
          to: {
            backgroundPosition: "200% center",
          },
        },
      },
    }`,
    ["text-shake"]: `{
      animation: {
        "text-shake": "text-shake 1s ease 1",
      },
      keyframes: {
        "text-shake": {
          "15%": { transform: "translateX(5px)" },
          "30%": { transform: "translateX(-5px)" },
          "50%": { transform: "translateX(3px)" },
          "80%": { transform: "translateX(2px)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    }`,
  };