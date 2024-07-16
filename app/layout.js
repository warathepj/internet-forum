import { Inter } from "next/font/google";
import "./globals.css";
import { MessageProvider } from '../context/MessageContext';
import { TopicsProvider } from '../context/TopicsContext';
// import { LeftNavProvider } from '../context/LeftNavContext';
import Nav from './components/Nav';
import ClientWrapper from './client-wrapper';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <MessageProvider>
      <TopicsProvider>
      <ClientWrapper>
        <Nav />
        {children}
        </ClientWrapper>
        </TopicsProvider>
        </MessageProvider>
        </body>
    </html>
  );
}
