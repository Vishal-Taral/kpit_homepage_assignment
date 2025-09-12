import Banner from "@/components/Banner";
import CarSection from "@/components/CarSection";
import PassengerCar from "@/components/PassengerCar";
import Blogs from "@/components/Blogs";
import JoinTeam from "@/components/JoinTeam";

export default function Home() {
  return (
    <div>
      <section>
        <Banner />
      </section>

      <section>
        <CarSection />
      </section>

      <section>
        <PassengerCar />
      </section>

      <section>
        <Blogs />
      </section>

      <section>
        <JoinTeam />
      </section>
    </div>
  );
}
