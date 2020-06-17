import React from "react";
import { useSelector } from "react-redux";

import { getView } from "./ducks/view";
import Order from "./components/Order";
import Welcome from "./components/Welcome";

const App = () => {
  const { view } = useSelector(getView);

  return (
    <div>
      <Order />
      {/* {view === "welcome" && <Welcome />}
      {view === "order" && <Order />} */}
    </div>
  );
};

export default App;
