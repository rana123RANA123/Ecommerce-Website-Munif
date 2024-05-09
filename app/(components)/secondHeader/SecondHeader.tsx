import React from "react";

export default function SecondHeader() {
  return (
    <div>
      <div>
        <div className="grid sm:grid-cols-3 gap-1">
          <div className="bg-[#F1E4E4] md:visible hidden h-14 md:flex flex-col justify-center items-center">
            <p className="text-[13px] font-medium">FREE UK DELIVERY</p>
            <p className="text-[13px]">on orders over £35</p>
          </div>
          <div className="bg-[#F1E4E4] md:w-[100%] w-[110%] h-14 flex flex-col justify-center items-center">
            <p className="text-[13px] font-medium">20% OFF EVERYTHING</p>
            <p className="text-[13px]">
              Checkout Code <span className="font-semibold">'TAKE20'</span> (exc
              sale)
            </p>
          </div>
          <div className="bg-[#F1E4E4] md:visible hidden h-14 md:flex flex-col justify-center items-center">
            <p className="text-[13px] font-medium">WORLDWIDE DELIVERY</p>
            <p className="text-[13px]">From £9.95</p>
          </div>
        </div>
      </div>
    </div>
  );
}
