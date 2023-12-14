import { Route, Routes, Navigate } from "react-router-dom";
import { ColorList } from "./ColorList";
import { ColorForm } from "./ColorForm";
import { useState } from "react";

import { Color } from "./Color";

export const ColorRoutes = ({ colors, addColor }) => {
  //   const [colors, setColors] = useState(["red", "green", "blue"]);
  //   const [colors, setColors] = useState([{ name: "red", value: "#f17878" }]);

  return (
    <Routes>
      <Route path="/colors">
        <Route index element={<ColorList colors={colors} />} />
        <Route path=":color" element={<Color colors={colors} />} />
        <Route
          path="new"
          element={<ColorForm colors={colors} addColor={addColor} />}
        />
        <Route path="*" element={<ColorList colors={colors} />} />
      </Route>

      <Route path="*" element={<Navigate to="/colors" />} />
    </Routes>
  );
};
