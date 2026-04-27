// src/app/fonts.ts
import localFont from 'next/font/local';

export const myFont = localFont({
  src: [
    {
      path: './fonts/Darrell Rolando.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-myfont',
});