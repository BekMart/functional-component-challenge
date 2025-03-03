import React, { useState } from "react";

function UseStateWithArrays() {
  const [nums, setNums] = useState([1, 2, 3]);
  const addNums = () => {
    setNums([...nums, nums.length +1]);
  }
  // This intefers with the above function and causes problems - don't use push!
  const buggyPushNums = () => {
    nums.push(nums.length + 1);
    setNums(nums);
    console.log(nums);
  }
  // return false for last item so its left out of resulting array
  const removeNum = () => {
    setNums(
        nums.filter((item, idx) => {
            return idx !== nums.length - 1;
        })
    );
  }

  return (
    <div>
      <button onClick={addNums}>Add Item</button>
      <button onClick={removeNum}>Remove Item</button>
      <button onClick={buggyPushNums}>Buggy Push Item</button>
      <ul>
        {nums.map((num) => (
          <li key={num}>{num}</li>
        ))}
      </ul>
    </div>
  );
}

export default UseStateWithArrays;
