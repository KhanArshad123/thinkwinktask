export const validations={
    validator:{
        pin:{
        message:"Pin Should only have numbers and of 6 digits",
        rule:(val,param,validator)=>
        {
            const value=val[1];
           const  numbers=new RegExp(/^[0-9]{1,6}$/);
            return numbers.test(value);
        }
    }
}
}