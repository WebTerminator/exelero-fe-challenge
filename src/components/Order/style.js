import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

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
  background-color: #ffffc8;
  padding: 1rem;
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
