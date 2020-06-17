import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getView, setView } from "./ducks/view";

const App = () => {
  const dispatch = useDispatch();
  const { view } = useSelector(getView);

  const handleOnClick = () => dispatch(setView("order"));

  console.log("view: ", view);
  return (
    <div>
      {/* SCREEN 1 - button to order drink */}
      {view === "welcome" && (
        <button onClick={handleOnClick}>What drink would you like ?</button>
      )}
      {view === "order" && <p>drink customization functionality</p>}
      {/* SCREEN 1 - button to order drink */}
      {/* SCREEN 1 - button to order drink */}
    </div>
  );
};

export default App;
