import { Inika } from "next/font/google";
import "./globals.css";

const inika=Inika({subsets:["Latin"],weight:["400"]})
export const metadata = {
  title: "Vilmos Midas",
  description: "One stop Finance Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inika.className}`}
      >
        {children}
      </body>
    </html>
  );
}
