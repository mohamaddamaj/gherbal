import { Container } from "@mui/material";
import Header from "./Header";
import AppleTabs from "./Tabs";
import DelayOfAppeal from "./delayOfapple/DelayOfApple";
import Jurisdiction from "./juridiction/Jurisdiction";
import Footer from "./Footer";

const tabs = [
  { label: "jurisdiction", element: <Jurisdiction /> },
  { label: "delay_of_appeal", element: <DelayOfAppeal /> },
];

const Home = () => {
  return (
    <>
      <Header />
      <Container maxWidth="xl">
        <AppleTabs tabs={tabs} centered={true} />
      </Container>
      <Footer />
    </>
  );
};

export default Home;
