import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import React from "react";

const HomeLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
  <Footer />;
};

export default HomeLayout;
