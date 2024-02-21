import { BiMessageDetail } from "react-icons/bi";
import style from './button.module.css'
export default function Button(props)
{
    
    return(
       <button className={props.isoutline ? style.outline : style.button}>
        <BiMessageDetail fontSize="24px" />
        {props.text}
       </button>
    );

}