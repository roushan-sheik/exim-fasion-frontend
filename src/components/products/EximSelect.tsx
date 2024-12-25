import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const EximSelect = ({
  categoryProducts,
  title,
  selectedValue,
  onValueChange,
}: {
  title: string;
  categoryProducts: string[];
  selectedValue: string;
  onValueChange: (value: string) => void;
}) => {
  return (
    <Select value={selectedValue} onValueChange={onValueChange}>
      <SelectTrigger className="w-full bg-none ">
        <SelectValue placeholder={title} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{title}</SelectLabel>
          {categoryProducts.map((item) => (
            <SelectItem key={item} value={item}>
              {item}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default EximSelect;
