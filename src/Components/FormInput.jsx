import React from "react";

const FormInput = ({
  Label,
  type,
  width,
  height,
  placeholder,
  recommendation,
  onChange,
  className
}) => {
  const inputStyle = {
    width: width + "em",
    height: height + "em",
  };
  return (
    <div className={className}>
      <form
        action=""
        className="flex flex-col py-2.5 gap-2"
      >
        <label
          htmlFor=""
          className="font-semibold flex items-center gap-2 text-sm"
        >
          {Label}
          <span className="text-sm text-gray-400">{recommendation}</span>
        </label>
        <input
          type={type}
          placeholder={placeholder}
          className="border rounded-xl py-1 px-3 bg-[#f3f4f6] text-sm outline-blue-700 outline-neon transition-all "
          style={inputStyle}
          onChange={onChange}
        />
      </form>
    </div>
  );
};

export default FormInput;
