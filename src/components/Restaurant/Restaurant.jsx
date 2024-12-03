import React, { useState } from 'react'

const Restaurant = () => {

const [taskList, setTaskList] = useState([]);
const [textv, setTextV]  = useState("")

console.log(taskList);


const handleClick = () => {
    console.log(textv)
    taskList.push(textv);
}

  return (
    <div className="mt-20">
      <input
        className="border border-black p-3"
        onChange={(e) => setTextV(e.target.value)}
        type="text"
        value={textv}
      />
      <button
        className="px-10 py-3 text-white bg-blue-700 mx-5"
        onClick={(e) => handleClick(e.target.value)}
      >
        Add
      </button>
    </div>
  );
}

export default Restaurant
