/** @type {import('tailwindcss').Config} */ module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        balloonYellow: {
          "0%": { transform: "scale(1)", fill: "none", stroke: "#FFD500" },
          "50%": {
            transform: "scale(1.5)",
            fill: "#FFD500",
            stroke: "#FFD500",
          },
          "55%": {
            transform: "scale(1.5)",
            fill: "#FFD500",
            stroke: "#FFD500",
          },
          "100%": { transform: "scale(1)", fill: "none", stroke: "#FFD500" },
        },
        balloonPurple: {
          "0%": { transform: "scale(1)", fill: "none", stroke: "#5A007A" },
          "50%": { transform: "scale(2)", fill: "#5A007A", stroke: "#5A007A" },
          "55%": { transform: "scale(2)", fill: "#5A007A", stroke: "#5A007A" },
          "100%": { transform: "scale(1)", fill: "none", stroke: "#5A007A" },
        },
        arrowDown: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(20px)" },
          "100%": { transform: "translateY(0px)" },
        },
        cardUp: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(6px)" },
          "100%": { transform: "translateY(0px)" },
        },
        cardBalloonOne: {
          "0%": { transform: "scale(1)" },
          "20%": { transform: "scale(1.1) translateY(-10px)" },
          "70%": { transform: "scale(1.1) translateY(-10px)" },
          "100%": { transform: "scale(1)" },
        },
        cardBalloonTwo: {
          "0%": { transform: "scale(1)" },
          "30%": { transform: "scale(1.1) translateY(-10px)" },
          "80%": { transform: "scale(1.1) translateY(-10px)" },
          "100%": { transform: "scale(1)" },
        },
        cardBalloonThree: {
          "0%": { transform: "scale(1)" },
          "40%": { transform: "scale(1.1) translateY(-10px)" },
          "90%": { transform: "scale(1.1) translateY(-10px)" },
          "100%": { transform: "scale(1)" },
        },
        messageAnimation: {
          "0%": { transform: "translateY(0px)" },
          "75%": { transform: "translateY(6px)" },
          "100%": { transform: "translateY(0px)" },
        },
        balloonBack: {
          "0%": { fill: "#5A007A", transform: "scale(1)" },
          "50%": { fill: "#FFD500", transform: "scale(1.1)" },
          "55%": { fill: "#FFD500" },
          "100%": { fill: "#5A007A", transform: "scale(1)" },
        },
        balloonFront: {
          "0%": { stroke: "#FFD500", transform: "scale(1)" },
          "50%": { stroke: "#5A007A", transform: "scale(0.9)" },
          "55%": { stroke: "#5A007A" },
          "100%": { stroke: "#FFD500", transform: "scale(1)" },
        },
      },
      animation: {
        balloonYellow:
          "balloonYellow 20s cubic-bezier(0.175, 0.885, 0.32, 1.275) infinite",
        balloonPurple:
          "balloonPurple 6s cubic-bezier(0.175, 0.885, 0.32, 1.275) infinite",
        arrowDown:
          "arrowDown 2s cubic-bezier(0.175, 0.885, 0.32, 1.275) infinite",
        cardUp: 
        "cardUp 3s cubic-bezier(0.175, 0.885, 0.32, 1.275) infinite",
        messageAnimation:
          " messageAnimation 3s ease-in infinite",
        cardBalloonOne:
          "cardBalloonOne 3s cubic-bezier(0.175, 0.885, 0.32, 0.900) infinite",
        cardBalloonTwo:
          "cardBalloonTwo 3s cubic-bezier(0.175, 0.885, 0.32, 0.900) infinite",
        cardBalloonThree:
          "cardBalloonThree 3s cubic-bezier(0.175, 0.885, 0.32, 0.900) infinite",
        balloonBack:
          "balloonBack 6s cubic-bezier(0.175, 0.885, 0.32, 1.275) infinite",
        balloonFront:
          "balloonFront 6s cubic-bezier(0.175, 0.885, 0.32, 1.275) infinite",
      },

      screens: {
        xs: "340px",
        xspan: "420px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        purple: "#5A007A",
        yellow: "#FFD500",
      },
    },
  },
  plugins: [],
};
