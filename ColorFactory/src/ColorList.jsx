import React from "react";
import { Link } from "react-router-dom";

function ColorList({ colors }) {
  return (
    <div>
      <h1>Choose a color</h1>
      <ul>
        {colors.map((color) => (
          <li key={color}>
            <Link to={`/colors/${color}`}>{color}</Link>
          </li>
        ))}
      </ul>
      <Link to="/colors/new">Add a color</Link>
    </div>
  );
}

export default ColorList;
