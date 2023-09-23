import React from "react";
import steps from "./json/steps.json";

type HeaderProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

export default function Header({
  isOpen,
  setIsOpen,
  step,
  setStep,
}: HeaderProps) {
  return (
    <section className="left-nav">
      <div className="nav-header">Build Your Van</div>
      <div className="-lg:translate-x-full -lg:hidden w-full p-5 bg-white text-brand-ada subway-nav__body overflow-hidden transform transition-tranform duration-300">
        {steps.map((step) => (
          <div
            key={step.id}
            onClick={() => setIsOpen(true)}
            className="pb-2 cursor-pointer"
          >
            <h2 className="link flex items-center">
              <span className="border-brand w-8 h-8 min-w-8 min-h-8 rounded-full border flex justify-center items-center mr-1">
                {step.id}
              </span>
              <span className="text-blue">{step.title}</span>
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
}
