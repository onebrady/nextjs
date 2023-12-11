"use client";
import Image from "next/image";
import { getVans } from "../../graphql";
import { useEffect, useState } from "react";
import VanList from "./components/VanList";

export default function Home() {
  const [vansList, setVansList] = useState([]);

  useEffect(() => {
    vanList();
  }, []);

  const vanList = async () => {
    const result = await getVans();
    setVansList(result?.vanTypes);
  };

  return (
    <main className="flex min-h-screen flex-col flex-wrap items-center justify-between">
      <Image
        className="main-bg"
        src="/SVB_170_Backplate_v01_0067.jpg"
        alt=""
        width={1920}
        height={1080}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
        }}
      >
        <VanList vansList={vansList} />
      </div>
    </main>
  );
}
