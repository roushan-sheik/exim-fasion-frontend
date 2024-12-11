import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import React from "react";

const HomeLoayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div>
      <Header />
      <div className="lg:w-10/12 md:w-full mx-auto">{children}</div>
      <Footer />
    </div>
  );
  <Footer />;
};

export default HomeLoayout;
