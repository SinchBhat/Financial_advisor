import { Inika } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const inika=Inika({subsets:["Latin"],weight:["400"]})
export const metadata = {
  title: "Vilmos Midas",
  description: "One stop Finance Platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${inika.className}`}>
      {/* header*/}
      <Header/>
      <main className="min-h-screen">
      {children}
      </main>
     
      {/*footer*/}      
      <footer className="bg-blue-50 py-12" >
      <div className="container mx-auto px-4 text-center text-gray-600">
        <p>Made with love by Sinchana</p>
      </div>
      </footer>
      </body>
    </html>
    </ClerkProvider>
  );
}
