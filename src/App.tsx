import "./App.css";
import Hero from "./components/hero";
import { Spacer, Stack } from "@chakra-ui/react";
import { Projects } from "@/components/Projects";
import { Technologies } from "./components/technologies";

const App: React.FC = () => {
  return (
    <Stack gap="16">
      <Hero />
      <Spacer />
      <Projects />
      <Spacer />
      <Technologies />
    </Stack>
  );
};

export default App;
