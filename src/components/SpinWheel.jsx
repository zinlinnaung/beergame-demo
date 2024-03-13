import useAxios from "../hooks/useAxios";
import customerAtom from "../recoil/spin/customer.atom";
import { useContext, useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { useToast } from "./ui/use-toast";
import { FormContext } from "../context/FormContext";
import Swal from "sweetalert2";

const SpinWheel = () => {
  const navigate = useNavigate();
  const api = useAxios({ toast: true });
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const { data, setData } = useContext(FormContext);

  const [customer] = useRecoilState(customerAtom);
  const [winningItem, setWinningItem] = useState(null);
  const [degreeToSpin, setDegreeToSpin] = useState(0);
  const [spinAudio] = useState(new Audio("assets/spin.mp3"));
  const [winningItems, setWinningItems] = useState([
    {
      id: 1,
      name: "Thin Kyan Mont Phoe 2000 Ks",
      quantity: 1,
      winningRatio: 0.5,
      winningMessage: "IPhone ",
      isActive: true,
    },
    {
      id: 2,
      name: "MB T-Shirt",
      quantity: 1,
      winningRatio: 0.2,
      winningMessage: "Airpod",
      isActive: true,
    },
    {
      id: 3,
      name: "Thin Kyan Mont Phoe 1000 Ks",
      quantity: 1,
      winningRatio: 0.16,
      winningMessage: "iWatch",
      isActive: true,
    },
    {
      id: 4,
      name: "Thin Kyan Mont Phoe 500 Ks",
      quantity: 1,
      winningRatio: 0.7,
      winningMessage: "Capital Gift Voucher",
      isActive: true,
    },
    {
      id: 5,
      name: "MB Towel L",
      quantity: 1, // Corrected quantity from 0 to 1
      winningRatio: 0.7,
      winningMessage: "G & G Gift Voucher",
      isActive: true,
    },
    {
      id: 6,
      name: "thankyou",
      quantity: 1, // Corrected quantity from 0 to 1
      winningRatio: 0.7,
      winningMessage: "G & G Gift Voucher",
      isActive: true,
    },
  ]);
  const resetAndPlayAudio = (audioElement) => {
    audioElement.pause();
    audioElement.currentTime = 0; // Reset to the beginning
    audioElement.loop = false;
    audioElement.play(); // Ensure looping is initially off
  };

  const spinWheel = () => {
    queryClient.invalidateQueries("check_spin");
    resetAndPlayAudio(spinAudio);
    setDegreeToSpin(3600);

    // Filter out prizes with quantity 0
    const availablePrizes = winningItems.filter((obj) => obj.quantity > 0); // Corrected property name from balance to quantity
    availablePrizes.sort(
      (firstItem, secondItem) =>
        firstItem.winningRatio - secondItem.winningRatio // Corrected property name from prize.win_ratio to winningRatio
    );

    // Calculate total ratio of available prizes
    const totalRatio = availablePrizes.reduce(
      (acc, current) => acc + current.winningRatio, // Corrected property name from prize.win_ratio to winningRatio
      0
    );

    // Iterate through available prizes to find the selected prize
    const ranges = [];
    let cumulativeRatio = 0;
    for (const selectedItem of availablePrizes) {
      const rangeStart = cumulativeRatio;
      cumulativeRatio += selectedItem.winningRatio; // Corrected property name from prize.win_ratio to winningRatio
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
        console.log(range.selectedItem);
      }
    }
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

  useEffect(() => {
    setTimeout(() => {
      if (winningItem) {
        Swal.fire({
          title: "Congratulations!",
          text: winningItem.name,
          icon: "success",
          confirmButtonText: "OK",
        }).then((result) => {
          if (result.isConfirmed) {
            // mutate();
            // window.location.reload();
            navigate("/game-select");
            setData({ ...data, productId: winningItem?.id });
          } else if (result.isDismissed) {
            // mutate();
            // window.location.reload();
            navigate("/game-select");
            setData({ ...data, productId: winningItem?.id });
          }
        });
        console.log(winningItem);
      }
    }, 2000);
  }, [winningItem]);

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
            <img
              src="assets/spin-img.png"
              alt="spin image"
              className="mx-auto"
            />

            <div id="spin" onClick={spinWheel}>
              <img
                src="/assets/spin-btn.png"
                alt="Spin Button"
                className="w-full"
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
