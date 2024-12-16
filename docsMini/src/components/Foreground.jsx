import React, { useState } from "react";
import { MdOutlineAddCircle } from "react-icons/md";
import InfoCard from "./InfoCard.jsx";
import { useRef } from "react";
import InputModal from "./InputModal.jsx";
import useGetCards from "../hooks/useGetCards.js";


function Foreground() {
  const { cardInfo } = useGetCards();
  const [showModel, setShowModel] = useState(false);
  const ref = useRef(null);
  
  // console.log(cardInfo);
  // Remove the unused function
  // function handleCreatecard() {
  //   console.log("create card");
  // }
  return (
    <div ref={ref} className="relative top-0 left-0 z-[3] h-full w-full flex flex-wrap gap-10 flexwrap-wrap p-8 overflow-y-scroll overflow-x-hidden">
      {cardInfo && cardInfo.map((card,idx) => {
        // console.log(card);
        return <InfoCard reference={ref} data={card} key={idx}/>;
      })}


      <div className="absolute right-8 bottom-8 h-10 w-10">
        <MdOutlineAddCircle className="fixed h-16 w-16 text-teal-300 cursor-pointer" onClick={() => setShowModel(true)} />
      </div>

      {showModel && <InputModal onclose={() => setShowModel(false)} />}
    </div>
  );
}

export default Foreground;
