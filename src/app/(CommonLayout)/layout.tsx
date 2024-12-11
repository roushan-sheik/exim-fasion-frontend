import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import React from "react";

const HomeLoayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
  <Footer />;
};

export default HomeLoayout;
