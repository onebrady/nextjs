import * as React from "react";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import InfoIcon from "@mui/icons-material/Info";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import Typography from "@mui/material/Typography";
import LinearWithValueLabel from "./progressBar";

export default function OptionCard({
  options,
  onSelectItem,
  currentGroupIndex,
  showNextGroup,
  showPreviousGroup,
  floorOption,
  wiringHarness,
  powerSystem,
  ceilingPanel,
  ceilingLighting,
  ventalation,
  walls,
  insulation,
  trim,
  stepName,
}) {
  // Function to group options by 'optionGroups.name'
  const groupOptions = (options) => {
    return options.reduce((acc, option) => {
      const groupName = option.optionGroups[0].name;
      if (!acc[groupName]) {
        acc[groupName] = [];
      }
      acc[groupName].push(option);
      return acc;
    }, {});
  };
  console.log(onSelectItem);
  const groupedOptions = groupOptions(options);
  const groupNames = Object.keys(groupedOptions);
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    let getSelectedOption = groupNames[currentGroupIndex];
    switch (getSelectedOption) {
      case "Floor Color":
        setSelectedOption(floorOption.name);
        break;
      case "Wiring Harness":
        setSelectedOption(wiringHarness.name);
        console.log(wiringHarness.name);
        break;
      case "48v Power System":
        setSelectedOption(powerSystem.name);
        break;
      case "Ceiling Panel":
        setSelectedOption(ceilingPanel.name);
        break;
      case "Lighting":
        setSelectedOption(ceilingLighting.name);
        break;
      case "Ventalation":
        setSelectedOption(ventalation.name);
        break;
      case "Wall Panels":
        setSelectedOption(walls.name);
        break;
      case "Wall Insulation":
        setSelectedOption(insulation.name);
        break;
      case "Trim Kit":
        setSelectedOption(trim.name);
        break;
    }
    console.log("SelectedOption " + selectedOption);
  }, [onSelectItem]);

  return (
    <>
      {groupedOptions && groupNames.length > 0 && (
        <Card
          className="optionCard"
          sx={{ maxWidth: 375, marginTop: 2, borderRadius: "0 10px 10px 0" }}
        >
          <CardContent>
            <LinearWithValueLabel />
            <Typography sx={{ fontSize: 14 }} gutterBottom>
              {stepName}
            </Typography>
            <Typography
              sx={{ paddingBottom: "30px" }}
              variant="h5"
              component="div"
              gutterBottom
            >
              {groupNames[currentGroupIndex]}
            </Typography>

            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label"></FormLabel>

              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name={groupNames[currentGroupIndex]}
              >
                {groupedOptions[groupNames[currentGroupIndex]].map(
                  (item, index) => (
                    <div key={item.id}>
                      <FormControlLabel
                        checked={selectedOption === item.name}
                        value={item.name}
                        control={<Radio />}
                        label={item.name}
                        onChange={(e) => {
                          onSelectItem(item);
                        }}
                      />

                      {item.toolTip && (
                        <Tooltip title={item.toolTip} arrow>
                          <IconButton>
                            <InfoIcon />
                          </IconButton>
                        </Tooltip>
                      )}
                    </div>
                  )
                )}
              </RadioGroup>
            </FormControl>
            {groupNames.length > 1 && (
              <>
                <div className="card-buttons">
                  <IconButton
                    aria-label="ArrowCircleLeftIcon"
                    onClick={showPreviousGroup}
                    disabled={currentGroupIndex === 0}
                  >
                    <ArrowCircleLeftIcon />
                  </IconButton>
                  <IconButton
                    aria-label="ArrowCircleRightIcon"
                    onClick={showNextGroup}
                    disabled={currentGroupIndex === groupNames.length - 1}
                  >
                    <ArrowCircleRightIcon />
                  </IconButton>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      )}
    </>
  );
}
