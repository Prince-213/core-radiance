"use client";

import React, { useState } from "react";
import NewsModal from "./new-modal";

const ModalWrap = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" w-full h-full">
      <NewsModal />
      {children}
    </div>
  );
};

export default ModalWrap;
