import React from "react";
import { useDispatch } from "react-redux";

import { setView } from "../../ducks/view";
import { resetOrder } from "../../ducks/order";
import { MuiButton, Wrapper } from "./style";

const Welcome = () => {
  const dispatch = useDispatch();
  const handleOnClick = () => {
    dispatch(resetOrder());
    dispatch(setView("order"));
  };

  return (
    <Wrapper>
      <MuiButton onClick={handleOnClick} variant="contained" color="secondary">
        Start customizing your drink
      </MuiButton>
    </Wrapper>
  );
};

export default Welcome;
