import React, {FC} from 'react';
import "../../Assets/style/CustomText.css";
interface TextProps {
    label:string;
  }
  const CustomText : FC<TextProps> = (props) => {
  
    return (
      <span className='span'>{props.label}</span>
    )
  }
  
  export default CustomText;
