import React, { useState } from "react";

function ControlledFormHooks() {
  const [name, setName] = useState("");
  const [catagory, setCatagory] = useState("website");
  const [comments, setComments] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, catagory, comments);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="id-name">Your Name:</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="id-name"
            name="name"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="id-catagory">Query Catagory:</label>
          <select
            value={catagory}
            onChange={(e) => setCatagory(e.target.value)}
            id="id-catagory"
            name="catagory"
          >
            <option value="website">Website issue</option>
            <option value="order">Order issue</option>
            <option value="general">General question</option>
          </select>
        </div>
        <div>
          <label htmlFor="id-commenmts">Comments:</label>
          <textarea
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            id="id-comments"
            name="comments"
          />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default ControlledFormHooks;
