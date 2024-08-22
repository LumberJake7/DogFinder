import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewColorForm({ addColor }) {
  const [color, setColor] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(color);
    navigate("/colors");
  };

  return (
    <div>
      <h1>Add a new color</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="Color name"
          required
        />
        <button>Add Color</button>
      </form>
    </div>
  );
}

export default NewColorForm;
