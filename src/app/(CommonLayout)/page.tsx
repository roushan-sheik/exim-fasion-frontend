import Activites from "@/components/home/Activities";
import EximSlider from "@/components/home/EximSlider";
import WhatDefineUs from "@/components/home/WhatDefineUs";

import React from "react";

const Home = () => {
  return (
    <div>
      <EximSlider />
      <div className=" main_container">{/* What define us section  */}</div>
      <WhatDefineUs />
      <Activites />
    </div>
  );
};

export default Home;
