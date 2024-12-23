"use client";

import EximSelect from "@/components/products/EximSelect";
import { for_kids, for_men, for_women } from "@/data/header/products";
import React, { useState, useEffect } from "react";
import EximButton from "@/components/ui/eximfashion/EximButton";

const Products = () => {
  const [searchValue, setSearchValue] = useState(""); // Search input value
  const [selectedForMen, setSelectedForMen] = useState<string>(""); // State for "For Men"
  const [selectedForWomen, setSelectedForWomen] = useState<string>(""); // State for "For Women"
  const [selectedForKids, setSelectedForKids] = useState<string>(""); // State for "For Kids"

  // Handle input change for search box
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  // Handle category select changes and reset other selects
  const handleForMenChange = (value: string) => {
    setSelectedForMen(value);
    setSelectedForWomen(""); // Reset "For Women" select when "For Men" changes
    setSelectedForKids(""); // Reset "For Kids" select when "For Men" changes
    apiCall(value); // Trigger API call immediately after selecting "For Men"
  };

  const handleForWomenChange = (value: string) => {
    setSelectedForWomen(value);
    setSelectedForMen(""); // Reset "For Men" select when "For Women" changes
    setSelectedForKids(""); // Reset "For Kids" select when "For Women" changes
    apiCall(value); // Trigger API call immediately after selecting "For Women"
  };

  const handleForKidsChange = (value: string) => {
    setSelectedForKids(value);
    setSelectedForMen(""); // Reset "For Men" select when "For Kids" changes
    setSelectedForWomen(""); // Reset "For Women" select when "For Kids" changes
    apiCall(value); // Trigger API call immediately after selecting "For Kids"
  };

  // Function to make API request with a query
  const apiCall = (query: string) => {
    console.log("API Request with query:", query);
    // Replace this with actual API call logic
  };

  // Debounce function for the search input to make API call after 2 seconds
  useEffect(() => {
    if (searchValue === "") return; // Don't make request if input is empty
    const delayDebounceFn = setTimeout(() => {
      apiCall(searchValue); // Make API request after delay
    }, 1500); // 2-second delay

    return () => clearTimeout(delayDebounceFn); // Cleanup timeout if input changes
  }, [searchValue]); // Dependency on searchValue

  // Handle form submission
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); // Prevent the default form submission behavior
    console.log("Form submitted with search value:", searchValue);
    console.log("Selected For Men:", selectedForMen);
    console.log("Selected For Women:", selectedForWomen);
    console.log("Selected For Kids:", selectedForKids);

    // Reset the select values after form submission
    setSelectedForMen(""); // Reset For Men select
    setSelectedForWomen(""); // Reset For Women select
    setSelectedForKids(""); // Reset For Kids select
    setSearchValue("");

    // Optionally, make an API request here on form submit
  }

  return (
    <div className="w-full">
      <h2 className="lg:text-4xl text-2xl lg:my-6 my-4 font-semibold text-center">
        Products
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="bg_pri lg:p-2 px-2 py-4 flex flex-col gap-3 lg:gap-0 lg:flex-row w-full justify-between items-center rounded-md">
          {/* Category select options */}
          <div className="flex lg:w-[180px] w-full items-center flex-col lg:flex-row flex-1 lg:gap-2 gap-3">
            <EximSelect
              title={"For Men"}
              categoryProducts={for_men}
              selectedValue={selectedForMen}
              onValueChange={handleForMenChange} // Handling value change for For Men
            />
            <EximSelect
              title={"For Women"}
              categoryProducts={for_women}
              selectedValue={selectedForWomen}
              onValueChange={handleForWomenChange} // Handling value change for For Women
            />
            <EximSelect
              title={"For Kids"}
              categoryProducts={for_kids}
              selectedValue={selectedForKids}
              onValueChange={handleForKidsChange} // Handling value change for For Kids
            />
          </div>
          {/* Search box ================>*/}
          <div className="flex-1 lg:ml-4 pl-4 lg:w-[400px] w-full flex items-center justify-between rounded-[30px] p-1 bg-white">
            <input
              className="active:outline-none lg:min-w-[300px] outline-none ring-0"
              type="text"
              placeholder="Search..."
              value={searchValue}
              onChange={handleInputChange} // Update search value on input change
            />
            <EximButton type="submit" className="rounded-[30px]">
              Search
            </EximButton>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Products;
