import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";

function ColorDetails({ colors }) {
  const { color } = useParams();
  const isColor = colors.includes(color);

  if (!isColor) return <Navigate to="/colors" />;

  return (
    <div style={{ backgroundColor: color, height: "100vh" }}>
      <h1>This is {color}</h1>
      <Link to="/colors">Go back</Link>
    </div>
  );
}

export default ColorDetails;
