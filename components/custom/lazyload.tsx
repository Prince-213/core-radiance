import React, { useRef, useState } from "react";
import { useInView } from "framer-motion";

const LazyRenderComponent = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const inView = useInView(ref);

  return <div ref={ref}>{inView ? children : null}</div>;
};

export default LazyRenderComponent;
