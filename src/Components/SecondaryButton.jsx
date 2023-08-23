import React from 'react'

const SecondaryButton = ({text, onClick}) => {
  return (
    <div>
      <button onClick={onClick} className='border p-2 text-sm rounded-md text-gray-500 border-gray-500 hover:bg-gray-500 hover:text-white transition active:text-black'>{text}</button>
    </div> 
  );
}

export default SecondaryButton