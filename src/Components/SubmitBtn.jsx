import React from 'react'

const SubmitBtn = ({text}) => {
  return (
    <div>
      <button className="border p-2 text-sm rounded-md text-white bg-blue-600 ">
        {text}
      </button>
    </div>
  );
}

export default SubmitBtn