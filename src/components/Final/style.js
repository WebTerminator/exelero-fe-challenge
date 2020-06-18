import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

export const Text = styled(Typography)`
  span {
    display: block;
  }
`;

export const Wrapper = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;

  button {
    margin: 40px 0;
  }
`;
