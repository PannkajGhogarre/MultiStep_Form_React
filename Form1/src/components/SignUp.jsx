import React from 'react'

const SignUp = ({formData,setFormData,errors}) => {
  return (
    <div className='md:flex flex-col gap-2 justify-center items-center'>
      <input type="email" placeholder='Email...' className=' border border-gray-600 rounded-lg px-4 py-2' 
      value={formData.email}
      onChange={(e)=> setFormData({...formData, email: e.target.value})} />
      <span>{errors.email && <span className='text-red-500'>{errors.email}</span>}</span>

      <input type="password" placeholder='Password' className=' border border-gray-600 rounded-lg px-4 py-2'
      value={formData.password}
      onChange={(e)=> setFormData({...formData, password: e.target.value})} /> 
      {errors.password && <span className='text-red-500'>{errors.password}</span>}
      
      <input type="password" placeholder='Confirm Password' className=' border border-gray-600 rounded-lg px-4 py-2'
      value={formData.confirmPassword}
      onChange={(e)=> setFormData({...formData, confirmPassword: e.target.value})} />
      {errors.confirmPassword && <span className='text-red-500'>{errors.confirmPassword}</span>}
    </div>
  )
}

export default SignUp