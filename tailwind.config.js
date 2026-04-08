module.exports = {
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', "sans-serif"],
        body: ['"Inter"', "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "hsl(208, 61%, 20%)",
          foreground: "hsl(0, 0%, 100%)",
          hover: "hsl(208, 61%, 15%)",
          active: "hsl(208, 61%, 10%)",
        },
        secondary: {
          DEFAULT: "hsl(208, 61%, 30%)",
          foreground: "hsl(0, 0%, 100%)",
          hover: "hsl(208, 61%, 25%)",
          active: "hsl(208, 61%, 20%)",
        },
        tertiary: {
          DEFAULT: "hsl(0, 0%, 98%)",
          foreground: "hsl(0, 0%, 15%)",
        },
        accent: {
          DEFAULT: "hsl(32, 27%, 60%)",
          foreground: "hsl(208, 61%, 20%)",
        },
        background: "hsl(0, 0%, 100%)",
        foreground: "hsl(0, 0%, 15%)",
        border: "hsl(0, 0%, 90%)",
        muted: {
          DEFAULT: "hsl(0, 0%, 95%)",
          foreground: "hsl(0, 0%, 50%)",
        },
        neutral: {
          50: "hsl(0, 0%, 98%)",
          100: "hsl(0, 0%, 95%)",
          200: "hsl(0, 0%, 90%)",
          300: "hsl(0, 0%, 80%)",
          400: "hsl(0, 0%, 60%)",
          500: "hsl(0, 0%, 50%)",
          600: "hsl(0, 0%, 40%)",
          700: "hsl(0, 0%, 30%)",
          800: "hsl(0, 0%, 20%)",
          900: "hsl(0, 0%, 10%)",
        },
        success: {
          DEFAULT: "hsl(142, 43%, 42%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        warning: {
          DEFAULT: "hsl(38, 94%, 57%)",
          foreground: "hsl(0, 0%, 15%)",
        },
        error: {
          DEFAULT: "hsl(0, 85%, 50%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        info: {
          DEFAULT: "hsl(210, 100%, 46%)",
          foreground: "hsl(0, 0%, 100%)",
        },
      },
      borderRadius: {
        sm: "8px",
        md: "12px",
        lg: "16px",
        full: "9999px",
      },
      boxShadow: {
        sm: "0 1px 2px hsla(0, 0%, 0%, 0.05)",
        md: "0 2px 6px hsla(0, 0%, 0%, 0.08)",
        lg: "0 4px 12px hsla(0, 0%, 0%, 0.1)",
        xl: "0 8px 20px hsla(0, 0%, 0%, 0.12)",
        primary: "0 2px 6px hsla(208, 61%, 20%, 0.25)",
      },
      fontSize: {
        h1: ["28px", { lineHeight: "34px", fontWeight: "500" }],
        h2: ["22px", { lineHeight: "28px", fontWeight: "500" }],
        h3: ["18px", { lineHeight: "24px", fontWeight: "500" }],
        h4: ["16px", { lineHeight: "20px", fontWeight: "500" }],
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        body: ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "body-sm": ["14px", { lineHeight: "20px", fontWeight: "400" }],
        caption: ["12px", { lineHeight: "18px", fontWeight: "400" }],
      },
      transitionTimingFunction: {
        "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
        "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
        "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      transitionDuration: {
        fast: "150ms",
        normal: "300ms",
        slow: "500ms",
      },
      backgroundImage: {
        "gradient-primary":
          "linear-gradient(135deg, hsl(208, 61%, 20%), hsl(210, 57%, 18%))",
        "gradient-secondary":
          "linear-gradient(135deg, hsl(208, 61%, 25%), hsl(32, 27%, 60%))",
        "gradient-accent":
          "linear-gradient(135deg, hsl(32, 27%, 60%), hsl(32, 30%, 50%))",
      },
      maxWidth: {
        app: "480px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
