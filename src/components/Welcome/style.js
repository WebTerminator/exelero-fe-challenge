import styled from "styled-components";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core";

export const MuiButton = withStyles({
  root: {
    fontSize: "1.5rem",
    padding: "1rem 1.2rem",
  },
})(Button);

export const Wrapper = styled.div`
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;
