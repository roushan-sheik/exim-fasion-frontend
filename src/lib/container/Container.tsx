import React from "react";

const Container = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return <div className="lg:w-10/12 md:w-full mx-auto">{children}</div>;
};

export default Container;
