import React from 'react'

const SecondaryButton = ({text}) => {
  return (
    <div>
      <button className='border p-2 text-sm rounded-md text-gray-500 border-gray-500 '>{text}</button>
    </div>
  );
}

export default SecondaryButton