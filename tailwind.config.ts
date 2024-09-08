import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'dev-sohan-banner': "url('/images/banner.jpg')",
      },
      colors: {
        'dev-sohan-blue': '#0092FF',
        'dev-sohan-yellow': '#FF9301',
        'dev-sohan-black-1': '#000000',
        'dev-sohan-black-2': '#212428',
      }
    },
  },
  plugins: [],
};
export default config;

/* 1. Crisp White and Soft Gray
White: #FFFFFF (rgb(255, 255, 255))
Soft Gray: #B0B0B0 (rgb(176, 176, 176))
This combination offers a clean and modern look, with white providing high contrast and soft gray adding a touch of warmth.
2. Bright Coral and Light Beige
Coral: #FF6F61 (rgb(255, 111, 97))
Light Beige: #F5F5DC (rgb(245, 245, 220))
Coral adds a vibrant pop of color, while light beige keeps the overall look balanced and inviting.
3. Sunshine Yellow and Charcoal
Sunshine Yellow: #FFD700 (rgb(255, 215, 0))
Charcoal: #36454F (rgb(54, 69, 79))
This combination brings energy with yellow and a grounded feel with charcoal, creating a dynamic contrast.
4. Soft Mint and Deep Teal
Mint Green: #98FF98 (rgb(152, 255, 152))
Deep Teal: #008080 (rgb(0, 128, 128))
Mint green offers a fresh and calming vibe, while deep teal complements the background without overwhelming it.
5. Vibrant Orange and Light Gray
Vibrant Orange: #FF8C00 (rgb(255, 140, 0))
Light Gray: #D3D3D3 (rgb(211, 211, 211))
The vibrant orange adds warmth and excitement, while light gray keeps the design feeling light and airy. */