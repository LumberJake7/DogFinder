import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import ColorList from "./ColorList";
import ColorDetails from "./ColorDetails";
import NewColorForm from "./NewColorForm";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const [colors, setColors] = useState<string[]>(["red", "green", "blue"]);

  const addColor = (newColor: string) => {
    setColors([...colors, newColor]);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/colors" element={<ColorList colors={colors} />} />
          <Route
            path="/colors/new"
            element={<NewColorForm addColor={addColor} />}
          />
          <Route
            path="/colors/:color"
            element={<ColorDetails colors={colors} />}
          />
          <Route path="*" element={<Navigate to="/colors" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
