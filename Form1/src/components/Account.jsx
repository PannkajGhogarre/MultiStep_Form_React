import React from 'react'

const Others = ({formData,setFormData,errors}) => {
  return (
    <div className='md:flex flex-col gap-2 justify-center items-center'>
    <input type="text" placeholder='City' className=' border border-gray-600 rounded-lg px-4 py-2'
    value={formData.City}
    onChange={(e)=> setFormData({...formData, City: e.target.value})}/>
    <span>{errors.City && <span className='text-red-500'>{errors.City}</span>}</span>
    
    <input type="text" placeholder='Country' className=' border border-gray-600 rounded-lg px-4 py-2'
    value={formData.country}
    onChange={(e)=> setFormData({...formData, country: e.target.value})}/>
    <span>{errors.country && <span className='text-red-500'>{errors.country}</span>}</span>
  </div>
  )
}

export default Others