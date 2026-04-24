"use client";

import { getCalApi } from "@calcom/embed-react";
import { MaterialSymbolsArrowRightAltRounded } from "../icons/MaterialSymbolsArrowRightAltRounded";

export default function CalScheduleBtn() {
  const handleClick = async () => {
    const cal = await getCalApi({ namespace: "30min" });

    cal("modal", {
      calLink: "harshvardhan-b-jhw85x/30min",
      config: {
        layout: "month_view",
        useSlotsViewOnSmallScreen: "true",
      },
    });
  };

  return (
    <button
      onClick={handleClick}
      className="flex flex-row items-center px-6 py-2 rounded-lg bg-white border-b border-gray-300"
    >
      Open scheduling
      <span><MaterialSymbolsArrowRightAltRounded /></span>
    </button>
  );
}