import React from 'react'

function PersonalDeatil({formData,setFormData,errors}) {
  return (
    <div className='md:flex flex-col gap-2 justify-center items-center'>
      <input type="text" placeholder='First Name' className=' border border-gray-600 rounded-lg px-4 py-2'
      value={formData.FirstName}
      onChange={(e)=> setFormData({...formData, FirstName: e.target.value})}  />
      <span>{errors.FirstName && <span className='text-red-500'>{errors.FirstName}</span>}</span>
      
      <input type="text" placeholder='Last Name' className=' border border-gray-600 rounded-lg px-4 py-2'
      value={formData.LastName}
      onChange={(e)=> setFormData({...formData, LastName: e.target.value})} />
      <span>{errors.LastName && <span className='text-red-500'>{errors.LastName}</span>}</span>
      
    </div>
  )
}

export default PersonalDeatil