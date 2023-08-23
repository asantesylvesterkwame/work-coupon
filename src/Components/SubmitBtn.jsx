import React from 'react'

const SubmitBtn = ({text, onClick}) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="hover:bg-blue-800 hover:text-white transition active:text-black border p-2 text-sm rounded-md text-white bg-blue-600 "
      >
        {text}
      </button>
    </div>
  );
}

export default SubmitBtn