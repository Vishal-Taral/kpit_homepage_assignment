import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Banner from "../components/Banner";
import CarCompanyLogoSlider from "@/components/CarCompanyLogoSlider";
import Blogs from "@/components/Blogs";
import CarSection from "@/components/CarSection";
import PassengerCar from "@/components/PassengerCar";
import JoinTeam from "@/components/JoinTeam";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <main className="main-container">
      <Banner />
      <Blogs />
      <CarCompanyLogoSlider />
      {/* <CarSection />
      <PassengerCar />
      <Blogs />
      <JoinTeam /> */}
    </main>
  );
}
