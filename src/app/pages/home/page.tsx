import Landing from "@/components/Landing";
import Products from "../products/page";
import { Container } from "@mui/material";
import BestService from "@/components/BestService";
import FeaturePost from "@/components/FeaturePost";
import AboutUs from "@/components/AboutUs";
import CallToAction from "@/components/CallToAction";

function HomePage() {
  return (
    <>
      <Container>
        <Landing />
        <Products />
        <BestService />
        <FeaturePost />
        <AboutUs />
      </Container>
      <div style={{ position: "relative" }}>
        <CallToAction />
      </div>
    </>
  );
}

export default HomePage;
