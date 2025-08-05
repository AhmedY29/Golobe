import React from "react";
import PrimaryButton from "./PrimaryButton";
import { Button } from "./ui/button";
import InputGroup from "./InputGroup";
import { IoIosBed } from "react-icons/io";
import { IoAirplane } from "react-icons/io5";
import Select from "./Select";

function FilterHero() {
  return (
    <div className="w-full flex justify-center relative">
      <div className="form-home flex flex-col w-[90%] gap-8 bg-white rounded-2xl mt-[-7rem] p-5 shadow-2xl shadow-[#8dd3ba38]">
        <div className="category-selection flex gap-3">
          <div className=" py-4 border-b-[#8DD3BB] border-b-4 gap-2 flex items-center">
            <IoAirplane />
            <span>Find Flight</span>
          </div>
          <div className=" py-4 hover:border-b-[#8DD3BB] border-b-4 border-transparent gap-2 flex items-center">
            <IoIosBed />
            <span>Find Stays</span>
          </div>
        </div>
        <div className="inputs grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between gap-1">
          <InputGroup
            label="From - To"
            placeholder="Riyadh - London"
            type="text"
            value=""
            onChange={() => {}}
          />
          <Select
            label="Trip"
            placeholder="Choose Trip Type"
            value=""
            onChange={() => {}}
            options={["Return", "One Way"]}
          />
          <InputGroup
            label="Depart - Return"
            placeholder="2025/9/1"
            type="date"
            value=""
            onChange={() => {}}
          />
          <InputGroup
            label="Passenger - Class"
            placeholder="1 Passenger, Eco"
            type="text"
            value=""
            onChange={() => {}}
          />
        </div>
        <div className="actions flex  justify-end">
          <div className="flex gap-2 w-80">
            <Button variant={"outline"} className="h-11">
              Add Promo Code
            </Button>
            <PrimaryButton text="Show Flight" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterHero;
