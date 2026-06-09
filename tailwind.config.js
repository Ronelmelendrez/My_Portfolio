export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
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
        sans: ["Inter", "system-ui", "sans-serif"],
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