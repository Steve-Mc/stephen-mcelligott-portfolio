import "./App.css";
import Hero from "./components/Hero";
import { Spacer, Stack } from "@chakra-ui/react";
import { Projects } from "@/components/Projects";
import { Technologies } from "@/components/Technologies";
import SEO from "./SEO";

const App: React.FC = () => {
  return (
    <>
      <SEO
        title="Stephen McElligott Portfolio"
        description="Stephen McElligott - React & Full-Stack Developer Portfolio showcasing web projects, skills, and contact info. Based in Ireland. Node.js, React, Full-Stack."
        url="https://www.stephenmcelligott.dev/"
        image="/icons/og-image.png"
      />
      <Stack gap="16">
        <Hero />
        <Spacer />
        <Projects />
        <Spacer />
        <Technologies />
      </Stack>
    </>
  );
};

export default App;
