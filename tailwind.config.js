export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontSize: {
      xs: ["0.8125rem", { lineHeight: "1.25rem" }], // 13px
      sm: ["0.9375rem", { lineHeight: "1.5rem" }], // 15px
      base: ["1.0625rem", { lineHeight: "1.75rem" }], // 17px
      lg: ["1.1875rem", { lineHeight: "1.75rem" }], // 19px
      xl: ["1.375rem", { lineHeight: "1.75rem" }], // 22px
      "2xl": ["1.625rem", { lineHeight: "2rem" }], // 26px
      "3xl": ["2rem", { lineHeight: "2.25rem" }], // 32px
      "4xl": ["2.5rem", { lineHeight: "2.75rem" }], // 40px
      "5xl": ["3.25rem", { lineHeight: "1" }], // 52px
      "6xl": ["4rem", { lineHeight: "1" }], // 64px
      "7xl": ["4.75rem", { lineHeight: "1" }], // 76px
      "8xl": ["5.5rem", { lineHeight: "1" }], // 88px
      "9xl": ["6.5rem", { lineHeight: "1" }], // 104px
    },
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0F172A",
          light: "#1E293B",
        },
        slate: {
          DEFAULT: "#1E293B",
          light: "#334155",
        },
        electric: {
          DEFAULT: "#3B82F6",
          light: "#60A5FA",
        },
        cyan: {
          DEFAULT: "#06B6D4",
          light: "#22D3EE",
        },
        grayText: "#64748B",
      },

      fontFamily: {
         mono: ['"JetBrains Mono"', 'monospace'],
      },

      animation: {
        "spin-slow": "spin 20s linear infinite",
        float: "float 6s ease-in-out infinite",
        gradient: "gradient 8s ease infinite",

        // Add this
        marquee: "marquee 20s linear infinite",
      },

      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },

        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },

        // Add this
        marquee: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(-50%)",
          },
        },
      },

      backgroundSize: {
        "200%": "200% 200%",
      },
    },
  },
  plugins: [],
};