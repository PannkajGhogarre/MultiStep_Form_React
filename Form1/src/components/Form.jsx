import React, { useState } from 'react'
import SignUp from './SignUp';
import PersonalDetail from './PersonalDeatil'
// import Account from './Account'
import Others from './Account';

const Form = () => {

  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    FirstName: "",
    LastName: "",
    City: "",
    country: "",
  });

  const [errors, setErrors] = useState({});

  const form = [
    "Signup",
    "Personal Detail",
    "Other Info"
  ]

  const Display = () => {
    if(page == 0){
      return <SignUp formData={formData} setFormData={setFormData} errors={errors}/>
    }else if(page == 1){
      return <PersonalDetail formData={formData} setFormData={setFormData} errors={errors}/>
    }else{
      return <Others formData={formData} setFormData={setFormData} errors={errors}/>
    }

    }
    

    const validate = () => {
      const errors = {};
      
      if (!formData.email) errors.email = 'Email is required';
      if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email is invalid';
      if (!formData.password) errors.password = 'Password is required';
      if (formData.password.length < 6) errors.password = 'Password must be at least 6 characters';
      if (!formData.confirmPassword) errors.confirmPassword = 'confirmPassword is required';
      if (formData.confirmPassword.length < 6) errors.confirmPassword = 'Password must be at least 6 characters';
      if (page == 1 && !formData.FirstName) errors.FirstName = 'FirstName is required';
      if (page == 1 && formData.FirstName.length < 3) errors.FirstName = 'FirstName greater than 3 characters';
      if (page == 1 && !formData.LastName) errors.LastName = 'LastName is required';
      if (page == 1 && formData.LastName.length < 3) errors.LastName = 'LastName greater than 3 characters';
      if (page == page.length-1 && !formData.City) errors.City = 'City is required';
      if (page == page.length-1 && formData.City.length < 3) errors.City = 'City greater than 3 characters';
      if (page == page.length-1 && !formData.country) errors.country = 'country is required';
      if (page == page.length-1 && formData.country.length < 3) errors.country = 'country greater than 3 characters';
      return errors;
    };
    
    const handleNextStep = () => {
      const errors = validate();
      if (Object.keys(errors).length === 0) {
        setPage(page + 1);
      } else {
        setErrors(errors);
      }
      // console.log(formData);
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      
      if (page == form.length) {
        alert('Form submitted successfully!');
        console.log(formData);
      } else {
        setPage(page);
      }
    };
    



  return (
    <>
      <form onSubmit={handleSubmit}>
      <div className='md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white'>
        <div className='container horizontal mt-5'>

          <div className='flex justify-center items-center text-black font-bold text-2xl my-10 p-10'>{form[page]}</div>

          <div className='md:flex justify-center items-center text-center mt-10'>
            {Display()}
          </div>

          <div className="flex justify-center items-center gap-5 mt-10">
            <button className='border border-gray-400 bg-gray-400 text-white text-xl px-3 py-1 rounded-xl'
              disabled={page == 0}
              onClick={() => setPage(curpage => curpage - 1)}>Back</button>
            <button className='border border-gray-400 bg-green-600 text-white text-xl px-3 py-1 rounded-xl'
              onClick={handleNextStep}>{page === form.length-1 ? "Submit" : "Next"}</button>
          </div>
        </div>
      </div>
      </form>
    </>
  )
}

export default Form