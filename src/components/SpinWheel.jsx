import useAxios from "../hooks/useAxios";
import customerAtom from "../recoil/spin/customer.atom";
import WiningAtom from "../recoil/spin/wining.atom";
import { useContext, useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { useToast } from "./ui/use-toast";
import { FormContext } from "../context/FormContext";

const SpinWheel = () => {
  const navigate = useNavigate();
  const api = useAxios({ toast: true });
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const { data, setData } = useContext(FormContext);

  const [customer] = useRecoilState(customerAtom);
  const [winningItem, setWinningItem] = useRecoilState(WiningAtom);
  const [degreeToSpin, setDegreeToSpin] = useState(0);
  const [winningItems, setWinningItems] = useState([
    {
      id: 1,
      name: "Beer",
      photo: "/assets/earphone.jpg",
      quantity: 1,
      winningRatio: 0.5,
      winningMessage: "IPhone ",
      isActive: true,
    },
    {
      id: 2,
      name: "Bell Pen",
      photo: "/assets/iphone.jpg",
      quantity: 1,
      winningRatio: 0.2,
      winningMessage: "Airpod",
      isActive: true,
    },
    {
      id: 3,
      name: "Trifold",
      photo: "/assets/watch.jpg",
      quantity: 1,
      winningRatio: 0.16,
      winningMessage: "iWatch",
      isActive: true,
    },
    {
      id: 4,
      name: "key chain",
      photo: "/assets/vocture.jpg",
      quantity: 1,
      winningRatio: 0.7,
      winningMessage: "Capital Gift Voucher",
      isActive: true,
    },
    {
      id: 5,
      name: "T - Shirt",
      photo: "/assets/thankyou.jpg",
      quantity: 0,
      winningRatio: 0.7,
      winningMessage: "G & G Gift Voucher",
      isActive: true,
    },
  ]);

  const spinWheel = () => {
    queryClient.invalidateQueries("check_spin");
    setDegreeToSpin(3600);

    // Filter out prizes with quantity 0
    const availablePrizes = winningItems.filter((obj) => obj.balance > 0);
    availablePrizes.sort(
      (firstItem, secondItem) =>
        firstItem.prize.win_ratio - secondItem.prize.win_ratio
    );

    // Calculate total ratio of available prizes
    const totalRatio = availablePrizes.reduce(
      (acc, current) => acc + current.prize.win_ratio,
      0
    );

    // Iterate through available prizes to find the selected prize
    const ranges = [];
    let cumulativeRatio = 0;
    for (const selectedItem of availablePrizes) {
      const rangeStart = cumulativeRatio;
      cumulativeRatio += selectedItem.prize.win_ratio;
      const rangeEnd = cumulativeRatio;
      ranges.push({ selectedItem, rangeStart, rangeEnd });
    }
    // Generate a random number between 0 and 1
    const randomNum = Math.random() * totalRatio;
    // Find the prize corresponding to the random number
    for (const range of ranges) {
      if (randomNum >= range.rangeStart && randomNum < range.rangeEnd) {
        const newArray = winningItems.filter(
          (prize) => prize.id !== range.selectedItem.id
        );
        newArray.push(range.selectedItem);
        setTimeout(() => {
          setWinningItems(newArray);
        }, 1000);
        setWinningItem(range.selectedItem);
      }
    }

    setData({ ...data, productId: "1" });
  };

  const sliceColors = [
    "#FF5733",
    "#00A36C",
    "#985EFF",
    "#F2D024",
    "#3CB4E6",
    "#FF8C00",
    "#7D3C98",
    "#1ABC9C",
    "#FF6384",
    "#9B59B6",
    "#3498DB",
  ];

  // console.log(winningItem);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div id="main">
      <div>
        <div id="div_pointer">
          <div id="pointer"></div>
        </div>
        <div style={{ transform: "rotate(120deg)" }}>
          <div
            id="wheel"
            style={{
              transform: `rotate(${degreeToSpin}deg)`,
              backgroundColor: "#000",
            }}
          >
            {winningItems?.map((item, index) => (
              <div
                key={index}
                style={{
                  // backgroundImage: `url(${item.image})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "left",
                  width: "50%",
                  height: "50%",
                  position: "absolute",
                  transformOrigin: "bottom right",
                  clipPath: "polygon(0 0, 80% 0, 100% 100%, 0 88%)",
                  backgroundColor: sliceColors[index],
                  transform: `rotate(${
                    (360 / winningItems?.length) * index
                  }deg)`,
                }}
              >
                {/* {console.log(item.photo)} */}
                <img
                  src={item.photo}
                  alt="sidfidsi"
                  style={{
                    position: "absolute",
                    left: "40%",
                    top: "55%",
                    transform: "translate(-10%,-50%) rotate(-45deg)",
                    width: "30%",
                    objectFit: "contain",
                    // display: !item.image && "none",
                  }}
                />
              </div>
            ))}

            <div id="spin" onClick={spinWheel}>
              <img
                src="/assets/spin-now.png"
                alt="Spin Button"
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "5rem" }}>{/* <h2>Winner List</h2> */}</div>
    </div>
  );
};

export default SpinWheel;
