/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const { createThemes } = require("tw-colors");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 0px 10px var(--tw-shadow-color)",
        lg: "0 0px 16px var(--tw-shadow-color)",
      },
    },
  },
  plugins: [
    createThemes({
      default: {
        background: "#1A202C",
        primary: "#2D3748",
        secondary: "#202837",
        highlight: "#2680EB",
        text: "#FFFFFF",
        textMuted: "#909090",
        content: "#000000",
        contentBorder: "#7B7B7B",
        numbers: {
          correct: "#00FFC4",
          incorrect: "#F56565",
        },
        graphs: {
          line: "#ECC94B",
        },
      },
      green: {
        background: "#0f2419",
        primary: "#284035",
        secondary: "#1e3628",
        highlight: "#6de04a",
        text: "#FFFFFF",
        textMuted: "#B2B2B2",
        content: "#040806",
        contentBorder: "#4A5568",
        numbers: {
          correct: "#dbfc00",
          incorrect: "#fc4300",
        },
        graphs: {
          line: "#2ECC71",
        },
      },
      yellow: {
        background: "#ad8c3d",
        primary: "#f7e7c0",
        secondary: "#d4ae55",
        highlight: "#fdffda",
        text: "#2C2926",
        textMuted: "#858076",
        content: "#fff9ec",
        contentBorder: "#BDBDBD",
        numbers: {
          correct: "#47c200",
          incorrect: "#c24e00",
        },
        graphs: {
          line: "#d40035",
        },
      },

      unicorn: {
        background: "#FFC0CB",
        primary: "#f790b8",
        secondary: "#FF69B4",
        highlight: "#fa58ae",
        text: "#3d101b",
        textMuted: "#a1697e",
        content: "#FFE4E1",
        contentBorder: "#FF1493",
        numbers: {
          correct: "#01c463",
          incorrect: "#FF4500",
        },
        graphs: {
          line: "#9400D3",
        },
      },
      dynamite: {
        background: "#2e2d2d",
        primary: "#f75e27",
        secondary: "#ff8a0d",
        highlight: "#f7e627",
        text: "#FFFFFF",
        textMuted: "#808080",
        content: "#080707",
        contentBorder: "#FF8C00",
        numbers: {
          correct: "#00FF00",
          incorrect: "#FF0000",
        },
        graphs: {
          line: "#9227f7",
        },
      },
    }),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
