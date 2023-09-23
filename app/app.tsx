"use client";

import React from "react";
import Header from "./Header";
import Drawer from "./Drawer";
import Card from "./Card";

export default function App() {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [step, setStep] = React.useState<number>(1);

  return (
    <main className="navigation">
      <Header
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        step={step}
        setStep={setStep}
      />
      <Drawer
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        step={step}
        setStep={setStep}
      >
        <Card
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          step={step}
          setStep={setStep}
        />
      </Drawer>
    </main>
  );
}
