import Hero from "../components/Hero";
import MainLayout from "../components/MainLayout";
import Main from "./container/Main";

const HomePage = () => {
  return (
    <MainLayout>
      <Hero />
      <Main />
    </MainLayout>
  );
};

export default HomePage;
