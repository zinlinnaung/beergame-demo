import useAxios from "../hooks/useAxios";
import customerAtom from "../recoil/spin/customer.atom";
import WiningAtom from "../recoil/spin/wining.atom";
import { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { useToast } from "./ui/use-toast";

const SpinWheel = () => {
  const navigate = useNavigate();
  const api = useAxios({ toast: true });
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const [customer] = useRecoilState(customerAtom);
  const [winningItem, setWinningItem] = useRecoilState(WiningAtom);
  const [degreeToSpin, setDegreeToSpin] = useState(0);
  const [winningItems, setWinningItems] = useState([
    {
      id: 1,
      name: "Beer",
      photo: "mug.png",
      quantity: 1,
      winningRatio: 0.5,
      winningMessage: "IPhone ",
      isActive: true,
    },
    {
      id: 2,
      name: "Bell Pen",
      photo: "pen.png",
      quantity: 1,
      winningRatio: 0.2,
      winningMessage: "Airpod",
      isActive: true,
    },
    {
      id: 3,
      name: "Trifold",
      photo: "purse.png",
      quantity: 1,
      winningRatio: 0.16,
      winningMessage: "iWatch",
      isActive: true,
    },
    {
      id: 4,
      name: "key chain",
      photo: "key-chain.png",
      quantity: 1,
      winningRatio: 0.7,
      winningMessage: "Capital Gift Voucher",
      isActive: true,
    },
    {
      id: 5,
      name: "T - Shirt",
      photo: "shirt.png",
      quantity: 0,
      winningRatio: 0.7,
      winningMessage: "G & G Gift Voucher",
      isActive: true,
    },
  ]);

  // useQuery(
  //   "prizes_list",
  //   async () => {
  //     const res = await api.get("/spin/prizes");
  //     return res.data;
  //   },
  //   {
  //     onSuccess: (data) => {
  //       setWinningItems(data);
  //     },
  //   }
  // );

  // useQuery(
  //   "check_spin",
  //   async () => {
  //     const res = await api.get(`/spin/check?customer_id=${customer?.id}`);
  //     return res.data;
  //   },
  //   {
  //     onSuccess: (data) => {
  //       if (!data) {
  //         toast({ title: "ကံစမ်းရန် အကြိမ်ရေကုန်သွားပါပြီ..." });
  //         setTimeout(() => navigate("/data"), 3000);
  //       }
  //     },
  //   }
  // );

  // const { mutate } = useMutation(
  //   async () => {
  //     return await api.post(`/spin`, {
  //       customer_id: customer.id,
  //       prize_id: winningItem.id,
  //     });
  //   },
  //   {
  //     onSuccess: (res) => {
  //       if (res.status === 200) {
  //         navigate("/win");
  //       }
  //     },
  //   }
  // );

  // useEffect(() => {
  //   setTimeout(() => {
  //     if (winningItem) {
  //       mutate();
  //     }
  //   }, 6000);
  // }, [winningItem]);

  // useEffect(() => {
  //   if (!customer) navigate("/");
  // }, [customer]);

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
                <img
                  src={item?.prize?.img_url}
                  alt=""
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
