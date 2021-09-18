
import { useState } from "react";
import SimpleReactValidator from "simple-react-validator";
const useValidator=(customValidator)=>
{
    const [show,setShow]=useState(false);
    const validator=new SimpleReactValidator({
        validator:customValidator.validator
    })
    if(show)
    {
        validator.showMessages()
    }
    return [validator,setShow];
}
export default useValidator;