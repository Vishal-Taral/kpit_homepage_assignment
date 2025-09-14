import React from "react";
import styles from "../styles/footerTwo.module.scss";
import { IoLogoInstagram } from "react-icons/io";
import { CiLinkedin } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";

const FooterTwo = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.columns}>
          <div className={styles.column}>
            <img src="https://www.kpit.com/wp-content/themes/kpit-wp/assets/img/footer-logo.png" alt="KPIT Logo" className={styles.logo} />
            <p>
              About KPIT KPIT is reimagining the future of mobility, forging
              ahead with group companies and partners to shape a world that is
              cleaner, smarter, and safer.
            </p>
            <p>
              With over 25 years of specialized expertise in Mobility, KPIT is
              accelerating the transformation towards Software and AI-Defined
              Vehicles through its advanced solutions, platforms, and
              products—propelled by mobility-infused AI frameworks, software
              craftsmanship, and systems integration mastery.{" "}
            </p>
            <p>
              Vision in Motion Fueled by 2000+ vehicle production programs and
              powering 20+ million vehicles on the road with KPIT software, our
              experience in unmatched. At the same time, we push boundaries,
              developing solutions that enable Mobility OEMs to innovate at
              speed and scale.{" "}
            </p>
            <div className={styles.socialIcons}>
              <div className={styles.icon}>
                <CiLinkedin />
              </div>
              <div className={styles.icon}>
                <IoLogoInstagram />
              </div>
              <div className={styles.icon}>
                <FaYoutube />
              </div>
            </div>
          </div>

          <div className={styles.column}>
            <h4>Mobility</h4>
            <ul>
              <li>Passenger Cars</li>
              <li>Trucks</li>
              <li>Off-Highway Vehicles</li>
            </ul>
            <h4>Insights</h4>
            <ul>
              <li>Overview</li>
              <li>Thought Leadership</li>
            </ul>
            <h4>Newsroom</h4>
            <ul>
              <li>Press Release</li>
              <li>KPIT In News</li>
              <li>KPIT Brand Book</li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4>Expertise</h4>
            <ul>
              <li>
                <strong>Domain Applications</strong>
              </li>
              <li>Autonomous Driving & ADAS</li>
              <li>Body Electronics</li>
              <li>Chassis</li>
              <li>Cockpit</li>
              <li>Propulsion</li>
            </ul>
            <ul>
              <li>
                <strong>Vehicle.OS</strong>
              </li>
              <li>E/E Architecture, Network & Middleware</li>
              <li>Cloud & Data Management</li>
              <li>Virtual Engineering</li>
              <li>Validation</li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4>Company</h4>
            <ul>
              <li>Overview</li>
              <li>Awards</li>
              <li>Clients</li>
              <li>Journey So Far</li>
              <li>Sustainability</li>
              <li>Team</li>
              <li>Group Companies</li>
            </ul>
            <h4>Careers</h4>
            <ul>
              <li>Overview</li>
              <li>For Graduates</li>
              <li>For Experienced Professionals</li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4>Contact Us</h4>
            <p>
              KPIT Technologies Ltd
              <br />
              Plot Number-17,
              <br />
              Rajiv Gandhi Infotech Park,
              <br />
              MIDC-SEZ, Phase-III, Hinjawadi, Pune - 411057
              <br />
              Phone: +91 20 6770 6000
            </p>
            <p>
              KPIT Technologies GmbH
              <br />
              Frankfurter Ring 105b,80807
              <br />
              Munich, GERMANY
              <br />
              Phone: +49 89 3229 9660
              <br />
              Fax: +49 89 3229 9669 99
            </p>
          </div>
        </div>

        <div className={styles.bottomRow}>
          <p>
            All logos of organizations displayed are the property of their
            respective owners.
          </p>
          <p>
            <strong>KPIT and KPIT logo are registered trademarks - KPIT</strong>
          </p>
          <p>CIN: L74999PN2018PLC174192</p>
          <div className={styles.links}>
            <a href="#">Terms of Use</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterTwo;
