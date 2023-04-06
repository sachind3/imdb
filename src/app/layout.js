import "./globals.css";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Providers from "./Providers";
import SearchBox from "@/components/SearchBox";

export const metadata = {
  title: "IMDB Clone",
  description: "This is a clone of the IMDB",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {/* header */}
          <Header />
          {/* navbar */}
          <Navbar />
          {/* search */}
          <SearchBox />
          {children}
        </Providers>
      </body>
    </html>
  );
}
