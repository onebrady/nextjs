import React from "react";

type CardProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

export default function Card({ isOpen, setIsOpen, step, setStep }: CardProps) {
  return (
    <div className="border border-gray-300 shadow rounded-md p-4 max-w-xs w-full mx-auto">
      <div
        onClick={() => {
          setIsOpen(false);
        }}
      >
        x{step}
      </div>
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-full bg-gray-400 h-12 w-12"></div>
        <div className="flex-1 space-y-4 py-1">
          <div className="h-4 bg-gray-400 rounded w-3/4"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-400 rounded"></div>
            <div className="h-4 bg-gray-400 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
