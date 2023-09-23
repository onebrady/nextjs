import Image from "next/image";
import App from "./app";
import GetImage from "./components/images";

function Home() {
  return (
    <>
      <GetImage photoUrl="/images/Background.jpg" />
      <GetImage photoUrl="/images/SVB_170_Bare_van_v01_0067.png" />
      <App />
    </>
  );
}

export default Home;
