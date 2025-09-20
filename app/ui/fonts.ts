import { Lusitana, Inter } from 'next/font/google';

// change lusitana for teachers
export const lusitana = Lusitana({ 
    subsets: ['latin'], 
    weight: ['400', '700'],
 });

// change inter for josefin
export const inter = Inter({ subsets: ['latin'] });