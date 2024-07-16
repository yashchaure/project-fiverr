import React from 'react'

const GigCard = () => {
  return (
    <div className='w-64 gap-3 my-4'>
        <img src="https://i.pinimg.com/236x/e3/a0/10/e3a0101686a077f3fdd12f4b0bb0d158.jpg" alt="" className='w-full rounded-md'/>
        <div className='flex justify-between items-center'>
            <span className='font-bold my-2'><img src="dp.jpeg" alt="" className='w-5 h-5 inline rounded-full mr-2'/>Techwave</span>
            <span>Level 1</span>
        </div>
        <p className='text-gray-dark text-md'>I will design, redesign shopify store, shopify dropshipping store, shopify website</p>
        <h3><i class="ri-star-s-fill"></i>4.9(234)</h3>
        <p className='font-bold'>From ₹7,455</p>
    </div>
  )
}

export default GigCard