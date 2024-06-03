import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function CurrencySelect() {
  return (
    <Select>
      <SelectTrigger className="w-[180px] bg-transparent border-black">
        <SelectValue placeholder="NGN ₦" />
      </SelectTrigger>
      <SelectContent className=" bg-foralwhite border-black">
        <SelectGroup>
          <SelectLabel>Currency</SelectLabel>
          <SelectItem value="naira">NGN ₦</SelectItem>
          <SelectItem value="p">NGN ₦</SelectItem>
          <SelectItem value="u">NGN ₦</SelectItem>
          <SelectItem value="s">NGN ₦</SelectItem>
          <SelectItem value="a">NGN ₦</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
