import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";

import { ReviewOrder, SelectOrder, Wrapper } from "./style";
import { getIngredient, setIngredient } from "../../ducks/order";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 250,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Order = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { ingredient } = useSelector(getIngredient);
  const [selectedIngredient, updateIngredient] = useState(ingredient);

  const handleIngredientOnChange = (event) => {
    const ingredient = event.target.value;

    updateIngredient(ingredient);
    dispatch(setIngredient(ingredient));
  };

  return (
    <Wrapper>
      <SelectOrder>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-helper-label">
            Select your favourite ingredient
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={selectedIngredient}
            onChange={handleIngredientOnChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="Vodka">Vodka</MenuItem>
            <MenuItem value="Gin">Gin</MenuItem>
            <MenuItem value="Cognac">Cognac</MenuItem>
          </Select>
        </FormControl>
      </SelectOrder>
      <ReviewOrder>
        {ingredient && <p>Your selected ingredient is: {ingredient}</p>}
      </ReviewOrder>
    </Wrapper>
  );
};

export default Order;
