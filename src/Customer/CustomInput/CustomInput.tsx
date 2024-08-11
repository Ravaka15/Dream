import React, { useState } from "react";
import "../../Assets/style/CustomInput.css";

interface Props {
  placeholder: string;
  onChange: (value: string) => void;
}

const CustomInput: React.FC<Props> = ({ placeholder, onChange }) => {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    onChange(event.target.value);
  };

  return (
    <div className="form-group">
      <input
        type="text"
        className="form-control"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        required
      />
      <label className="form-control-placeholder">{placeholder}</label>
    </div>
  );
};

export default CustomInput;
