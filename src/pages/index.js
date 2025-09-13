import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Banner from '../components/Banner';
import CarSection from '../components/CarSection';
import PassengerCar from '../components/PassengerCar';
import Blogs from '../components/Blogs';
import JoinTeam from '../components/JoinTeam';

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <main className="main-container">
      <Banner />
      {/* <CarSection />
      <PassengerCar />
      <Blogs />
      <JoinTeam /> */}
    </main>
  );
}