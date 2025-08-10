import React, { useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";

interface InputGroupProps {
  label: string;
  type?: string;
  placeholder?: string;
  min?: number;
  max?: number;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function InputGroup(props: InputGroupProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="input-group flex flex-col gap-1 relative w-full">
      <input
        className="border-1 rounded focus:border-2 focus:border-black focus:shadow p-3"
        type={showPassword ? "text" : props.type}
        name={props.label}
        required={props.required || false}
        value={props.value}
        id={props.label}
        onChange={props.onChange}
        placeholder={props.placeholder}
        minLength={props.min}
        maxLength={props.max}
      />
      <label
        className="absolute top-[-10px] left-2.5 px-2 bg-white text-sm"
        htmlFor={props.label}
      >
        {props.label}
      </label>

      {props.type == "password" && (
        <button
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-5 "
        >
          {showPassword ? <HiEye /> : <HiEyeOff />}
        </button>
      )}
    </div>
  );
}

export default InputGroup;
