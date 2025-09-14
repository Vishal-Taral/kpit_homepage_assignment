import Header from "../components/Header";
import FooterOne from "../components/FooterOne";
import FooterTwo from "../components/FooterTwo";
import HeaderOne from "./HeaderOne";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className="relative">
        <div className="sticky top-0 z-50 bg-white shadow-sm">
          <HeaderOne />
          <Header />
        </div>
        <main>{children}</main>
        <FooterOne />
        <FooterTwo />
      </body>
    </html>
  );
}
