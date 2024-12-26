import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import React from "react";

const HomeLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="overflow-hidden">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
  <Footer />;
};

export default HomeLayout;
