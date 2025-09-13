import Header from "../components/Header";
import FooterOne from "../components/FooterOne";
import FooterTwo from "../components/FooterTwo";
import HeaderOne from "./HeaderOne";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className="relative">
        {/* Sticky wrapper for both headers */}
        <div className="sticky top-0 z-50 bg-white shadow-sm">
          <HeaderOne />
          <Header />
        </div>

        {/* Page content */}
        <main>{children}</main>

        {/* Footers */}
        <FooterOne />
        <FooterTwo />
      </body>
    </html>
  );
}
