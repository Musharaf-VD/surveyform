export default function Validate(values){
    const errors={};
    
    if(!values.username.trim()){
        errors.username = "Username Required"
    }

    if(!values.email.trim()){
        errors.email = "Email Required"
    }
    else if(!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(values.email)){
        errors.email ="Email is Invalid "
    }
    if(!values.mbl.trim()){
        errors.mbl = "enter your mbl num"
    }
    if(!values.feedback.trim()){
        errors.feedback = "feedback compulsary type in 15 words"
    }
    return errors;
}