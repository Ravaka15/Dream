import React, {FC} from 'react';
import "../../Assets/style/CustomButton.css";
interface ButtonProps {
  onClick:any;
  label:string;
}
const CustomButton : FC<ButtonProps> = (props) => {
  
  return (
      <button onClick={props.onClick} className="button">{props.label}</button>
  )
}

export default CustomButton;