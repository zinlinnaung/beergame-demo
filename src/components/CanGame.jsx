// import React, { useState } from "react";

import { useState } from "react";

const CanGame = () => {
  const [selectedBottle, setSelectedBottle] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  // const [bottleCapColors, setBottleCapColors] = useState({
  //   1: "white",
  //   2: "white",
  //   3: "white",
  //   4: "white",
  // });
  const [isBottleSelected, setIsBottleSelected] = useState(false);

  const handleClick = (bottle) => {
    setSelectedBottle(bottle);
    setIsBottleSelected(true);
  };

  // const handleCapClick = (bottle) => {
  //   if (isBottleSelected) {
  //     setBottleCapColors((prevState) => ({
  //       ...prevState,
  //       [bottle]: prevState[bottle] === "white" ? "red" : "white",
  //     }));
  //   }
  // };

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

  console.log(isClicked);

  return (
    <div className="w-[100%]" style={bottleContainerStyles}>
      {[1, 2, 3, 4].map((bottle) =>
        selectedBottle === 0 || selectedBottle === bottle ? (
          <div key={bottle} style={{ position: "relative" }}>
            <div
              style={getBottleStyle(bottle)}
              onClick={() => handleClick(bottle)}
            >
              <img
                style={{
                  transform: isClicked ? "translateY(200px)" : null,
                  opacity: isClicked ? 0 : 1,
                }}
                src="/assets/myanmarbeer.png"
                alt=""
                className="z-10 relative transition-all duration-500"
              />
              {/* Bottle {bottle} */}
              {isBottleSelected && (
                <>
                  <div
                    className="absolute top-[-18px] left-1/2 -translate-x-1/2 w-[30%] rounded-full z-[1]"
                    style={{
                      // scale: isClicked ? 1.5 : 1,
                      transform: isClicked
                        ? "scale(2) translateX(-30%)"
                        : "scale(1) translateX(-50%)",
                    }}
                    onClick={() => setIsClicked(true)}
                  >
                    <img src="/assets/pinlid.png" alt="" />
                  </div>
                  <div
                    style={{
                      opacity: isClicked ? 1 : 0,
                    }}
                    className="absolute top-3 left-1/2 -translate-x-1/2 flex items-center justify-center bg-white w-24 h-28 rounded-full transition-all duration-500 delay-200"
                  >
                    <p className="text-xs">Thank you</p>
                  </div>
                </>
              )}
            </div>
          </div>
        ) : null
      )}
    </div>
  );
};

export default CanGame;
