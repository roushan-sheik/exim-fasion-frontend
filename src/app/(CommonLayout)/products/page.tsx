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

  // Handle category select changes and trigger an API call
  const handleForMenChange = (value: string) => {
    setSelectedForMen(value);
    apiCall(value); // Trigger API call immediately after selecting "For Men"
  };

  const handleForWomenChange = (value: string) => {
    setSelectedForWomen(value);
    apiCall(value); // Trigger API call immediately after selecting "For Women"
  };

  const handleForKidsChange = (value: string) => {
    setSelectedForKids(value);
    apiCall(value); // Trigger API call immediately after selecting "For Kids"
  };

  //* Function to make API request with a query
  const apiCall = (query: string) => {
    alert(`API Request with query: ${query}`);
    console.log("API Request with query:", query);
    //TODO: Replace this with actual API call logic
  };

  // Debounce function for the search input to make API call after 2 seconds
  useEffect(() => {
    if (searchValue === "") return; // Don't make request if input is empty
    const delayDebounceFn = setTimeout(() => {
      apiCall(searchValue); // Make API request after delay
    }, 2000); // 2-second delay

    return () => clearTimeout(delayDebounceFn); // Cleanup timeout if input changes
  }, [searchValue]); // Dependency on searchValue

  // Handle form submission
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); // Prevent the default form submission behavior
    console.log("Form submitted with search value:", searchValue);
    alert(`API Request with query: ${searchValue}`);
    //TODO: Optionally, make an API request here on form submit
  }

  return (
    <div className="w-full">
      <h2 className="lg:text-4xl text-2xl my-6 font-semibold text-center">
        Products
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="bg_pri p-2 flex flex-col gap-3 lg:gap-0 lg:flex-row w-full justify-between items-center rounded-md">
          {/* Category select options */}
          <div className="flex items-center flex-col lg:flex-row flex-1 gap-2">
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
          {/* Search box */}
          <div className="flex-1 lg:ml-4 pl-4 w-[400px] flex items-center justify-between rounded-[30px] p-1 bg-white">
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
