import "@/css/App.css";
import { Hero } from "@/components/sections/Hero";
import { Spacer, Stack } from "@chakra-ui/react";
import { Projects } from "@/components/sections/Projects";
import { Technologies } from "@/components/sections/Technologies";
import SEO from "./SEO";
import { useEffect } from "react";

const App: React.FC = () => {
  useEffect(() => {
    const html: HTMLHtmlElement = document.documentElement as HTMLHtmlElement;
    if (html.dataset.initialBg) {
      html.style.backgroundColor = "";
      html.style.backgroundImage = "";
      html.style.backgroundSize = "";
      delete html.dataset.initialBg;
    }
  }, []);
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
