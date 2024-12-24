import React from "react";

const EximContainer = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return <div className="lg:w-10/12 md:w-full mx-auto">{children}</div>;
};

export default EximContainer;