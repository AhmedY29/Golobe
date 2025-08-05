import React from "react";

interface InputGroupProps {
  label: string;
  placeholder?: string;
  value: string;
  options: string[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

function Select({
  label,
  value,
  options,
  onChange,
  placeholder,
}: InputGroupProps) {
  return (
    <div className="input-group flex flex-col gap-1 relative w-full">
      <select
        className="border-1 rounded focus:border-2 focus:border-black focus:shadow p-3"
        name={label}
        id={label}
        value={value}
        onChange={onChange}
      >
        <option value="">{placeholder || "Choose"}</option>
        {options.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </select>

      <label
        className="absolute top-[-10px] left-2.5 px-2 bg-white text-sm"
        htmlFor={label}
      >
        {label}
      </label>
    </div>
  );
}

export default Select;
