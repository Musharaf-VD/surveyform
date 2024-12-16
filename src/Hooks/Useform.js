import  { useState } from 'react'

const Useform = (Validate) => {
const [values, setValues] = useState({
    username:"",
    email:"",
    mbl:"",
    feedback:""

});

const [errors, setErrors] = useState({});


const handleChange = (e) =>{
   const {name,value} = e.target

   setValues((prevValues)=>{
    return{
        ...prevValues,
        [name]:value,
    }
   })
}
const handleSubmit = (event) =>{
  event.preventDefault();
  setErrors(Validate(values))
 setValues({
  username:"",
  email:"",
  mbl:"",
  feedback:"",

  
 })
}
 return {handleChange,values,handleSubmit,errors }
}

export default Useform