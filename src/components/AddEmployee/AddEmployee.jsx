import React from 'react'

const AddEmployee = () => {
  return (
    // the border -b shows the border beign a little thicker
    <div className='flex max-w-2xl mx-auto shadow border-b'>
        <div className='px-8 py-8'>
            {/* font thin makes the text a little thinner and the tracking wider adds the space between letters */}
            <div className="font-thin text-2xl tracking-wider">
                <h1>Add New Employee</h1>
            </div>
            <div className='justify-center items-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm font-normal'>First Name</label>
                <input className ='h-8 w-96 border mt-2 px-2 py-2' type="text"/> 
            </div>
            <div className='justify-center items-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm font-normal'>Last Name</label>
                <input className ='h-8 w-96 border mt-2 px-2 py-2' type="text"/> 
            </div>
            <div className='justify-center items-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm font-normal'>Email</label>
                <input className ='h-8 w-96 border mt-2 px-2 py-2' type="email"/> 
            </div>
            <div className='justify-center items-center h-14 w-full my-4 selection space-x-4'>
                <button className='rounded text-white font-semibold bg-green-500 py-2 px-6 hover:bg-green-700'>
                    Save
                </button>
                <button className='rounded text-white font-semibold bg-red-500 py-2 px-6 hover:bg-red-700'>
                    Clear
                </button>
            </div>
            

        </div>
    </div>
  )
}

export default AddEmployee