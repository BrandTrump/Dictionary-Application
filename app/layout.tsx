import Heading from "./components/Heading";
import InputField from "./components/InputField";
import Provider from "./components/Provider";
import { Inter, Roboto_Mono, Nunito } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Dictionary",
  description: "Generated by create next app",
};

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${roboto_mono.variable} ${nunito.variable}`}>
      <body className="bg-white dark:bg-zinc-800/50 transition duration-200 ease-in-out">
        <Provider>
          <div className="m-6 md:max-w-4xl md:flex md:flex-col md:justify-center md:mx-auto">
            <Heading />
            <InputField />
            {children}
          </div>
        </Provider>
      </body>
    </html>
  );
}
