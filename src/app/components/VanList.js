"use client";
import { useState, useEffect } from "react";
import VanSteps from "./Steps";
import { getSteps } from "../../../graphql";
import OverlayImages from "./OverlayImages";

const VanList = (props) => {
  const [selectedVanImage, setSelectedVanImage] = useState("");
  const [steps, setSteps] = useState([]);

  const vanSteps = async (props) => {
    const result = await getSteps(props);
    setSteps(result?.stepCategories);
    //   steps && document.getElementById('van-selection').style.display = 'none';
  };
  function imageHandler(image) {
    //  const vanImage = e.target.getAttribute("data-image");
    setSelectedVanImage(image);
  }
  //  vanSteps("clp20wntffhgf0blutxpdtbcd");
  useEffect(() => {
    vanSteps("clp20wntffhgf0blutxpdtbcd");
    //   const image = props.vansList?[0].image.url;
    imageHandler("https://media.graphassets.com/bAPcpluAQBq7NWPq71Bd");
  }, []);
  //  console.log(props.vansList[0].image.url);
  if (steps.length === 0) {
    return (
      <>
        <div id="van-selection" className="flex top-50 relative">
          {props.vansList.map((item) => (
            <button
              onClick={(e) => {
                vanSteps(item.id);
                imageHandler(item.image?.url);
              }}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
              key={item.id}
            >
              {item.name}
            </button>
          ))}
        </div>
      </>
    );
  }
  return (
    <>
      <OverlayImages vanimage={selectedVanImage} />
      {selectedVanImage && (
        <VanSteps steps={steps} selectedVan={selectedVanImage} />
      )}
    </>
  );
};
export default VanList;
