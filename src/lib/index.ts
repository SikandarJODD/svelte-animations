// place files you want to import through the `$lib` alias in this folder.
// Navbar
export let navs = [
    {
        name: "Home",
        link: "/",
    },
    {
        name: "Examples",
        link: "/examples",
    },
    {
        name: "Framer Motion",
        link: "/learnings",
    },
    {
        name: "Luxe",
        link: '/luxe'
    }
];

export let tailwindCode = `// Insert this inside theme > extend > 
            "animation": {
	            "flip": "flip 6s infinite steps(2, end)",
	            "kitrotate": "kitrotate 3s linear infinite both",
	            shine: "shine 2s linear infinite",
	            slide: "slide 40s linear infinite",
	            spotlight: "spotlight 2s ease .75s 1 forwards",
	            "border-width": "border-width 3s infinite alternate",
	            "text-gradient": "text-gradient 2s linear infinite",
	            "text-shake": "text-shake 1s ease 1",
	            "text-glitch-to": "text-glitch-to 0.6s ease-in-out infinite",
	            "text-glitch-from": "text-glitch-from 0.6s ease-in-out infinite",
	            "text-scale": "text-scale 1s linear infinite forwards",
	            'spin': 'spin 2s linear infinite',
            },
            "keyframes": {
				spin: {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' },
				},
				"flip": {
					"to": {
						"transform": "rotate(360deg)",
					},
				},
				"kitrotate": {
					"to": {
						"transform": "rotate(90deg)",
					},
				},
				shine: {
					from: {
						backgroundPosition: "0 0",
					},
					to: {
						backgroundPosition: "-200% 0",
					},
				},
				"border-width": {
					from: {
						width: "10px",
						opacity: "0",
					},
					to: {
						width: "100px",
						opacity: "1",
					},
				},
				"text-gradient": {
					to: {
						backgroundPosition: "200% center",
					},
				},
				"text-shake": {
					"15%": { transform: "translateX(5px)" },
					"30%": { transform: "translateX(-5px)" },
					"50%": { transform: "translateX(3px)" },
					"80%": { transform: "translateX(2px)" },
					"100%": { transform: "translateX(0)" },
				},
				"text-glitch-to": {
					from: {
						transform: "translateY(0)",
					},
					to: {
						transform: "translateY(-100%)",
					},
				},
				"text-glitch-from": {
					from: {
						transform: "translateY(100%)",
					},
					to: {
						transform: "translateY(0)",
					},
				},
				"text-scale": {
					"0%": {
						transform: "scaleX(0)",
						transformOrigin: "bottom left",
					},
					"25%": {
						transform: "scaleX(1)",
						transformOrigin: "bottom left",
					},
					"75%": {
						transform: "scaleX(1)",
						transformOrigin: "bottom right",
					},
					"100%": {
						transform: "scaleX(0)",
						transformOrigin: "bottom right",
					},
				},
				slide: {
					from: { transform: "translateX(0)" },
					to: { transform: "translateX(calc(-100% - var(--gap)))" },
				},
				spotlight: {
					"0%": {
						opacity: "0",
						transform: "translate(-72%, -62%) scale(0.5)",
					},
					"100%": {
						opacity: "1",
						transform: "translate(-50%,-40%) scale(1)",
					},
				},
			},
`