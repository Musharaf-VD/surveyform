import  { useState } from 'react'

const Useform = (Validate) => {
const [values, setValues] = useState({
    username:"",
    email:"",
    mbl:"",
    language:"",
    gender:"",
    address:"",
    collage:"",
    qualification:"",
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
  language:"",
  gender:"",
  address:"",
  collage:"",
  qualification:"",
  feedback:"",

  
 })
}
 return {handleChange,values,handleSubmit,errors }
}

export default Useform