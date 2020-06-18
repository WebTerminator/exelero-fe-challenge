import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";

import {
  DrinksWrapper,
  ReviewOrder,
  SelectOrder,
  TitleSelection,
  Wrapper,
} from "./style";
import {
  fetchCocktailsByIngredient,
  getOrderState,
  setIngredient,
} from "../../ducks/order";
import MediaCard from "../Card";

const useStyles = makeStyles(() => ({
  formControl: {
    margin: "2rem auto 4rem",
    maxWidth: "70%",
    minWidth: 250,
  },
}));

const Order = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const {
    cocktails: { drinks },
    ingredient,
  } = useSelector(getOrderState);
  const [selectedIngredient, updateIngredient] = useState(ingredient);

  const handleIngredientOnChange = (event) => {
    const ingredient = event.target.value;

    updateIngredient(ingredient);

    dispatch(setIngredient(ingredient));
    dispatch(fetchCocktailsByIngredient(ingredient));
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

        {drinks && (
          <>
            <TitleSelection component="p" variant="h6">
              {ingredient} based drinks. Select your favourite
            </TitleSelection>
            <DrinksWrapper>
              {drinks.map((cocktail) => (
                <MediaCard
                  key={cocktail.strDrink}
                  imageTitle={cocktail.strDrink}
                  imageUrl={cocktail.strDrinkThumb}
                />
              ))}
            </DrinksWrapper>
          </>
        )}
      </SelectOrder>
      <ReviewOrder>
        <p>
          You will be able to review your order once the drink selection is
          made.
        </p>
      </ReviewOrder>
    </Wrapper>
  );
};

export default Order;
