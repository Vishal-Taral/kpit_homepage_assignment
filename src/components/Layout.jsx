import FooterOne from "./FooterOne";
import FooterTwo from "./FooterTwo";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <FooterOne />
      <FooterTwo />
    </>
  );
}


// import './globals.css';
// import { Lenis as ReactLenis } from '@studio-freight/lenis';
// import Header from '../components/Header';
// import FooterOne from '../components/FooterOne';
// import FooterTwo from '../components/FooterTwo';

// export default function Layout({ children }) {
//   return (
//     <html lang="en">
//       <body>
//         <ReactLenis root>
//           <Header />
//           {children}
//           <FooterOne />
//           <FooterTwo />
//         </ReactLenis>
//       </body>
//     </html>
//   );
// }