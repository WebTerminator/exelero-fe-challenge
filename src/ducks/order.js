import { getCocktailsByIngredient, getCocktailInfo } from "../api";

const SET_INGREDIENT = "SET_INGREDIENT";
const SET_COCKTAILS = "SET_COCKTAILS";
const SET_LOADING = "SET_LOADING";
const SET_SELECTED_COCKTAIL = "SET_SELECTED_COCKTAIL";

const initialState = {
  isLoading: false,
  ingredient: "",
  cocktails: [],
  cocktailSelected: null,
};

export const setIngredient = (ingredient) => ({
  type: SET_INGREDIENT,
  payload: ingredient,
});

export const setLoading = (loadingState) => ({
  type: SET_LOADING,
  payload: loadingState,
});

export const resetOrder = () => {
  return (dispatch) => {
    dispatch({
      type: SET_INGREDIENT,
      payload: "",
    });
    dispatch({
      type: SET_SELECTED_COCKTAIL,
      payload: null,
    });
    dispatch({
      type: SET_COCKTAILS,
      payload: [],
    });
  };
};

const setSelectedCocktail = (cocktail) => ({
  type: SET_SELECTED_COCKTAIL,
  payload: cocktail,
});

export const fetchSelectedCocktailDetails = (cocktail) => {
  return async (dispatch) => {
    const selectedCocktail = await getCocktailInfo(cocktail);
    dispatch(setSelectedCocktail(selectedCocktail));
  };
};

const setCocktails = (cocktails) => ({
  type: SET_COCKTAILS,
  payload: cocktails,
});

export const fetchCocktailsByIngredient = (ingredient) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const cocktails = await getCocktailsByIngredient(ingredient);
      dispatch(setLoading(false));
      dispatch(setCocktails(cocktails));
    } catch (error) {
      // some sort of error
    }
  };
};

export const getOrderState = (state) => state.order;

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case SET_INGREDIENT:
      return {
        ...state,
        ingredient: action.payload,
      };
    case SET_COCKTAILS:
      return {
        ...state,
        cocktails: action.payload,
      };
    case SET_SELECTED_COCKTAIL:
      return {
        ...state,
        cocktailSelected: action.payload ? action.payload.drinks[0] : null,
      };
    default:
      return state;
  }
}
