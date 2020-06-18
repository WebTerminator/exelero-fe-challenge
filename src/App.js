import React from "react";
import { useSelector } from "react-redux";

import { getView } from "./ducks/view";
import { getOrderState } from "./ducks/order";
import Order from "./components/Order";
import Welcome from "./components/Welcome";
import Final from "./components/Final";

const App = () => {
  const { view } = useSelector(getView);
  const { cocktailSelected } = useSelector(getOrderState);

  return (
    <div>
      {view === "welcome" && <Welcome />}
      {view === "order" && <Order />}
      {view === "final" && cocktailSelected && (
        <Final drink={cocktailSelected.strDrink} />
      )}
    </div>
  );
};

export default App;
