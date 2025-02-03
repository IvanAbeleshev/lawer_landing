import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-md': '#1F1F1F',
        'gray-sm': '#2A2A2A',
        'light': '#FFFFFF',
        'orange-md': '#FF5722',
        'gray-xs': '#B0B0B0'
      },
      backgroundImage: {
        "main-books": "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(31,31,31,1) 65%), url('/img/books.jpeg')",
      },
      rotate: {
        'y-90-back': 'rotateY(-90deg)',
        'y-0': 'rotateY(0deg)'
      }
    },
  },
  plugins: [],
} satisfies Config;

// Основний фон: #1F1F1F – насичений темно-сірий, що створює солідну атмосферу.
// Фон секцій: #2A2A2A – трохи світліший відтінок для виділення блоків.
// Текст та заголовки: #FFFFFF – класичний білий для високої контрастності.
// Акцентні елементи (кнопки, посилання, іконки): #FF5722 – яскравий оранжевий, що привертає увагу.
// Додатковий текст/деталі: #B0B0B0 – світло-сірий для підзаголовків або допоміжних текстів.