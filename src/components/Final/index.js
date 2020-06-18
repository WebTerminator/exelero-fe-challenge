import React from "react";
import { Text, Wrapper } from "./style";
import Button from "@material-ui/core/Button";
import { setView } from "../../ducks/view";
import { useDispatch } from "react-redux";

const Final = ({ drink }) => {
  const dispatch = useDispatch();

  const handleRestart = () => dispatch(setView("welcome"));

  return (
    <Wrapper>
      <Text component="p" variant="h4">
        <span>Your {drink} is being prepared.</span>
        You will receive a notification once is ready
      </Text>
      <Button color="primary" onClick={handleRestart} variant="contained">
        Order again
      </Button>
    </Wrapper>
  );
};

export default Final;
