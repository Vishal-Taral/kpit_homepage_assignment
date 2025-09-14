import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Header from '../components/Header';
import FooterOne from '../components/FooterOne';
import FooterTwo from '../components/FooterTwo';
import HeaderOne from './HeaderOne';

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

export default function Layout({ children }) {
  const headerOneRef = useRef(null);
  const isHeaderOneInView = useInView(headerOneRef, { once: true, threshold: 0.1 });

  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, threshold: 0.1 });

  const mainRef = useRef(null);
  const isMainInView = useInView(mainRef, { once: true, threshold: 0.1 });

  const footerOneRef = useRef(null);
  const isFooterOneInView = useInView(footerOneRef, { once: true, threshold: 0.1 });

  const footerTwoRef = useRef(null);
  const isFooterTwoInView = useInView(footerTwoRef, { once: true, threshold: 0.1 });

  return (
    <html lang="en">
      <body className="relative">
        <div className="sticky top-0 z-50 bg-white shadow-sm">
          <motion.div
            ref={headerOneRef}
            initial="hidden"
            animate={isHeaderOneInView ? 'visible' : 'hidden'}
            variants={sectionVariants}
          >
            <HeaderOne />
          </motion.div>
          <motion.div
            ref={headerRef}
            initial="hidden"
            animate={isHeaderInView ? 'visible' : 'hidden'}
            variants={sectionVariants}
          >
            <Header />
          </motion.div>
        </div>
        <motion.main
          ref={mainRef}
          initial="hidden"
          animate={isMainInView ? 'visible' : 'hidden'}
          variants={sectionVariants}
        >
          {children}
        </motion.main>
        <motion.div
          ref={footerOneRef}
          initial="hidden"
          animate={isFooterOneInView ? 'visible' : 'hidden'}
          variants={sectionVariants}
        >
          <FooterOne />
        </motion.div>
        <motion.div
          ref={footerTwoRef}
          initial="hidden"
          animate={isFooterTwoInView ? 'visible' : 'hidden'}
          variants={sectionVariants}
        >
          <FooterTwo />
        </motion.div>
      </body>
    </html>
  );
}