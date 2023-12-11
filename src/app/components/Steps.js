import { useState, useEffect } from "react";
import { getOptions, getDefaultOptions } from "../../../graphql";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import OptionCard from "./OptionCard";
import OverlayImages from "./OverlayImages";

const VanSteps = ({ steps, selectedVan }) => {
  const [defaultOptions, setDefaultOptions] = useState([]);
  const [options, setOptions] = useState([]);

  const [currentGroupIndex, setCurrentGroupIndex] = useState(0);

  // Function to show next group
  const showNextGroup = () => {
    setCurrentGroupIndex((prevIndex) => prevIndex + 1);
  };

  // Function to show previous group
  const showPreviousGroup = () => {
    setCurrentGroupIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : prevIndex
    );
  };
  const [runningOptions, setRunningOptions] = useState([]);
  const [floorOption, setFloorOption] = useState([]);
  const [wiringHarness, setWiringHarness] = useState([]);
  const [powerSystem, setPowerSystem] = useState([]);
  const [ceilingPanel, setCeilingPanel] = useState([]);
  const [ceilingLighting, setCeilingLighting] = useState([]);
  const [ventalation, setVentalation] = useState([]);
  const [walls, setWalls] = useState([]);
  const [insulation, setInsulation] = useState([]);
  const [trim, setTrim] = useState([]);

  const [floorOptionImage, setFloorOptionImage] = useState("");
  const [wiringHarnessImage, setWiringHarnessImage] = useState("");
  const [powerSystemImage, setPowerSystemImage] = useState("");
  const [ceilingPanelImage, setCeilingPanelImage] = useState("");
  const [ceilingLightingImage, setCeilingLightingImage] = useState("");
  const [ventalationImage, setVentalationImage] = useState("");
  const [wallsImage, setWallsImage] = useState("");
  const [insulationImage, setInsulationImage] = useState("");
  const [trimImage, setTrimImage] = useState("");

  const vanOptions = async (props) => {
    const result = await getOptions(props);
    setOptions(result?.options);
  };

  const selectedOptionsList = async (props) => {
    const result = await getDefaultOptions();
    setDefaultOptions(result?.options);
    //   console.log("selectopts");
  };
  useEffect(() => {
    selectedOptionsList();
  }, []);

  useEffect(() => {
    defaultOptions.map((item) => handleSelectItem(item));
    //    console.log(defaultOptions);
  }, [defaultOptions]);

  const handleSelectItem = (item) => {
    let optGroup = item.optionGroups[0].name;
    switch (optGroup) {
      case "Floor Color":
        setFloorOption(item);
        setFloorOptionImage(item.image.url);
        break;
      case "Wiring Harness":
        setWiringHarness(item);
        item.image
          ? setWiringHarnessImage(item.image.url)
          : setWiringHarnessImage("");

        break;
      case "48v Power System":
        setPowerSystem(item);
        item.image
          ? setPowerSystemImage(item.image.url)
          : setPowerSystemImage("");
        break;
      case "Ceiling Panel":
        setCeilingPanel(item);
        setCeilingPanelImage(item.image.url);
        break;
      case "Lighting":
        setCeilingLighting(item);
        item.image
          ? setCeilingLightingImage(item.image.url)
          : setCeilingLightingImage("");

        break;
      case "Ventalation":
        setVentalation(item);
        item.image
          ? setVentalationImage(item.image.url)
          : setVentalationImage("");
        break;
      case "Wall Panels":
        setWalls(item);
        item.image ? setWallsImage(item.image.url) : setWallsImage("");
        break;
      case "Wall Insulation":
        setInsulation(item);
        item.image
          ? setInsulationImage(item.image.url)
          : setInsulationImage("");
        break;
      case "Trim Kit":
        setTrim(item);
        item.image ? setTrimImage(item.image.url) : setTrimImage("");
        break;
    }
  };

  return (
    <>
      <Box className="top-50 bottom-steps" sx={{ width: "100%" }}>
        <Stepper activeStep={1} alternativeLabel>
          {steps.map((item) => (
            <Step
              onClick={(e) => {
                vanOptions(item.id);
              }}
              key={item.id}
            >
              <StepLabel>{item.name}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      <div className="flex top-50 relative">
        {steps.map((item) => (
          <button
            onClick={(e) => {
              vanOptions(item.id);
              setCurrentGroupIndex(0);
            }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
            key={item.id}
          >
            {item.name}
          </button>
        ))}
      </div>
      <OptionCard
        options={options}
        onSelectItem={handleSelectItem}
        currentGroupIndex={currentGroupIndex}
        showNextGroup={showNextGroup}
        showPreviousGroup={showPreviousGroup}
        floorOption={floorOption}
        wiringHarness={wiringHarness}
        powerSystem={powerSystem}
        ceilingPanel={ceilingPanel}
        ceilingLighting={ceilingLighting}
        ventalation={ventalation}
        walls={walls}
        insulation={insulation}
        trim={trim}
      />
      <OverlayImages vanimage={floorOptionImage} />
      <OverlayImages vanimage={wiringHarnessImage} />
      <OverlayImages vanimage={powerSystemImage} />
      <OverlayImages vanimage={insulationImage} />
      <OverlayImages vanimage={ceilingPanelImage} />
      <OverlayImages vanimage={ceilingLightingImage} />
      <OverlayImages vanimage={ventalationImage} />

      <OverlayImages vanimage={wallsImage} />
      <OverlayImages vanimage={trimImage} />
    </>
  );
};

export default VanSteps;
