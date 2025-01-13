import {JSXElement} from "solid-js";
import parseDate from "@/shared/utils/date/parce-date";
import FieldInfo from "@/shared/field/field-info";
import {IHeaderInputProps} from "@/features/header-date-form/lnput/interface.ts";

const HeaderInput =  ({field,text}: IHeaderInputProps): JSXElement => {
 return (
     <div class='flex flex-col'>
         {text && <label for={field().name}>{text}</label>}
         <input
             id={field().name}
             name={field().name}
             value={field().state.value as string}
             onBlur={field().handleBlur}
             type='date'
             onInput={(e) => field().handleChange(parseDate(e.target.value))}
         />
         <FieldInfo field={field()}/>
     </div>
 );
};

export default HeaderInput;