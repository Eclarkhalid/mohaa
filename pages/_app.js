import Header from '@/components/Header';
import '@/styles/globals.css'
import { ClerkProvider } from "@clerk/nextjs";

import { Poppins } from "next/font/google";

const inter = Poppins({ subsets: ["latin"], weight: '400' });

function MyApp({ Component, pageProps }) {
  return (
    <ClerkProvider {...pageProps}>
      <Header />
      <main className={` min-h-screen  ${inter.className}`} >
        <Component {...pageProps} />
      </main>
    </ClerkProvider>
  );
}
export default MyApp;