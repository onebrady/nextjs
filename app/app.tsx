"use client"

import React from "react";
import Header from "./Header";
import Drawer from "./Drawer";
import Card from "./Card";

export default function App() {
    const [isOpen, setIsOpen] = React.useState<boolean>(false);
    const [isStepTwo, setIsStepTwo] = React.useState<boolean>(false);

    return (
        <main className="navigation">
            <Header isOpen={isOpen} setIsOpen={setIsOpen} isStepTwo={isStepTwo} setIsStepTwo={setIsStepTwo}/>
            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                <Card />
                <Card />
            </Drawer>
            
        </main>
    );
}
