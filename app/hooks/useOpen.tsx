"use client";
import { useState } from "react";

export function useOpen() {
  const [isOpen, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen((previousState: boolean) => !previousState);
  };
  return { isOpen, toggleOpen };
}
