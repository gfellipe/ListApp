import React from "react";
import { Home } from "./Pages/Home";
import AnimatedBackground from "./Components/AnimatedBackground";

export const App = () => {
  return (
    <div>
      <AnimatedBackground />
      <Home />
    </div>
  );
};
