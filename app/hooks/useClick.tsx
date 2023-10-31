import { useState } from "react";

export function useClick() {
  const [selectedTestimonyIndex, setSelectedTestimonyIndex] =
    useState<number>(0);

  const handleButtonClick = (index: number): void => {
    setSelectedTestimonyIndex(index);
  };
  return { selectedTestimonyIndex, handleButtonClick };
}
