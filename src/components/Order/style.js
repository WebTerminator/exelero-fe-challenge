import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
`;

export const SelectOrder = styled.div`
  display: flex;
  flex-direction: column;
  flex: 4;
  background-color: #fff;
  padding: 1rem;
`;

export const ReviewOrder = styled.div`
  display: flex;
  flex: 2;
  background-color: #000;
  padding: 1rem;
  justify-content: center;
  align-items: center;

  & > p {
    text-align: center;
  }
`;

export const DrinksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 2rem;
  overflow-y: scroll;
`;

export const TitleSelection = styled(Typography)`
  padding-left: 2rem;
`;

export const SelectedDrinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ReviewOrderTitle = styled(Typography)`
  color: #fff;
`;

export const OrderButton = styled(Button)`
  font-size: 1.2rem;
`;
