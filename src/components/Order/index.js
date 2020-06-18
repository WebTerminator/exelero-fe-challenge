import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";

import {
  DrinksWrapper,
  OrderButton,
  ReviewOrder,
  ReviewOrderTitle,
  SelectOrder,
  SelectedDrinkWrapper,
  TitleSelection,
  Wrapper,
} from "./style";
import {
  fetchCocktailsByIngredient,
  getOrderState,
  fetchSelectedCocktailDetails,
  setIngredient,
} from "../../ducks/order";
import { setView } from "../../ducks/view";
import MediaCard from "../Card";
import LoadingSpinner from "../LoadingSpinner";

const useStyles = makeStyles(() => ({
  formControl: {
    margin: "2rem auto 4rem",
    maxWidth: "70%",
    minWidth: "30rem",
  },
}));

const Order = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const {
    cocktails: { drinks },
    ingredient,
    isLoading,
    cocktailSelected,
  } = useSelector(getOrderState);
  const [selectedIngredient, updateIngredient] = useState(ingredient);

  const renderSelectedCocktailCard = () => {
    const placeDrinOrder = () => dispatch(setView("final"));

    const {
      strDrink,
      strDrinkThumb,
      strGlass,
      strIngredient1,
      strIngredient2,
      strIngredient3,
    } = cocktailSelected;

    return (
      <SelectedDrinkWrapper>
        <ReviewOrderTitle gutterBottom variant="h4">
          Review your order
        </ReviewOrderTitle>
        <MediaCard
          imageTitle={strDrink}
          imageUrl={strDrinkThumb}
          strGlass={strGlass}
          strIngredient1={strIngredient1}
          strIngredient2={strIngredient2}
          strIngredient3={strIngredient3}
        />
        <OrderButton
          onClick={placeDrinOrder}
          variant="contained"
          color="secondary"
        >
          Order you {strDrink}
        </OrderButton>
      </SelectedDrinkWrapper>
    );
  };

  const handleIngredientOnChange = (event) => {
    const ingredient = event.target.value;

    updateIngredient(ingredient);
    dispatch(setIngredient(ingredient));
    dispatch(fetchCocktailsByIngredient(ingredient));
  };

  const handleCocktailSelection = (cocktail) =>
    dispatch(fetchSelectedCocktailDetails(cocktail));

  return (
    <Wrapper>
      <SelectOrder>
        <FormControl className={classes.formControl}>
          <InputLabel
            style={{ fontSize: "1.2rem" }}
            id="demo-simple-select-helper-label"
          >
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
            <MenuItem value="Rum">Rum</MenuItem>
            <MenuItem value="Brandy">Brandy</MenuItem>
          </Select>
        </FormControl>

        {isLoading ? (
          <LoadingSpinner />
        ) : (
          drinks && (
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
                    onClick={() => handleCocktailSelection(cocktail.strDrink)}
                  />
                ))}
              </DrinksWrapper>
            </>
          )
        )}
      </SelectOrder>
      <ReviewOrder>
        {cocktailSelected !== null ? (
          renderSelectedCocktailCard()
        ) : (
          <p>
            You will be able to review your order once the drink selection is
            made.
          </p>
        )}
      </ReviewOrder>
    </Wrapper>
  );
};

export default Order;
