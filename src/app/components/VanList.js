"use client";
import { useState } from "react";
import VanSteps from "./Steps";
import { getSteps } from "../../../graphql";
import OverlayImages from "./OverlayImages";

const VanList = (props) => {
  const [selectedVanImage, setSelectedVanImage] = useState("");
  const [steps, setSteps] = useState([]);

  const vanSteps = async (props) => {
    const result = await getSteps(props);
    setSteps(result?.stepCategories);
  };
  function imageHandler(e) {
    const vanImage = e.target.getAttribute("data-image");
    setSelectedVanImage(vanImage);
  }

  return (
    <>
      <div className="flex top-50 relative">
        {props.vansList.map((item) => (
          <button
            onClick={(e) => {
              vanSteps(e.target.getAttribute("data-id"));
              imageHandler(e);
            }}
            data-id={item.id}
            data-image={item.image?.url || ""}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
            key={item.id}
          >
            {item.name}
          </button>
        ))}
      </div>

      <OverlayImages vanimage={selectedVanImage} />
      {selectedVanImage && (
        <VanSteps steps={steps} selectedVan={selectedVanImage} />
      )}
    </>
  );
};
export default VanList;
