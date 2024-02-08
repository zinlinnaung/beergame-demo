import React, { useState } from "react";

const CanGame = () => {
  const [selectedBottle, setSelectedBottle] = useState(0);
  const [bottleCapColors, setBottleCapColors] = useState({
    1: "white",
    2: "white",
    3: "white",
    4: "white",
  });
  const [isBottleSelected, setIsBottleSelected] = useState(false);

  const handleClick = (bottle) => {
    setSelectedBottle(bottle);
    setIsBottleSelected(true);
  };

  const handleCapClick = (bottle) => {
    if (isBottleSelected) {
      setBottleCapColors((prevState) => ({
        ...prevState,
        [bottle]: prevState[bottle] === "white" ? "red" : "white",
      }));
    }
  };

  const bottleContainerStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    gap: "50px",
    width: "100%",
  };

  const bottleStyle = {
    width: "100%", // Set the initial width of the bottle
    backgroundSize: "auto", // Set background size to auto to get original image size
    position: "relative",
    transition: "transform 0.5s ease-in-out",
  };

  const getBottleStyle = (bottle) => ({
    ...bottleStyle,
    transform: selectedBottle === bottle ? "scale(2)" : "scale(1)",
    width: selectedBottle === bottle ? "40%" : "50%",
    margin: "0 auto",
  });

  return (
    <div className="w-[100%]" style={bottleContainerStyles}>
      {[1, 2, 3, 4].map((bottle) =>
        selectedBottle === 0 || selectedBottle === bottle ? (
          <div key={bottle} style={{ position: "relative" }}>
            <div
              style={getBottleStyle(bottle)}
              onClick={() => handleClick(bottle)}
            >
              <img src="/assets/myanmarbeer.png" alt="" className="z-10 relative" />
              Bottle {bottle}
              {isBottleSelected && (
                <div
                  style={{
                    position: "absolute",
                    top: "-18px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    backgroundColor: bottleCapColors[bottle],
                    width: "30%",
                    borderRadius: "50%",
                    zIndex: 1
                  }}
                  onClick={() => handleCapClick(bottle)}
                >
                  <img src="/assets/pinlid.png" alt="" />
                </div>
              )}
            </div>
          </div>
        ) : null
      )}
    </div>
  );
};

export default CanGame;
