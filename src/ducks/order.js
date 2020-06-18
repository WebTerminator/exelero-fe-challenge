import { getCocktailsByIngredient } from "../api";

const SET_INGREDIENT = "SET_INGREDIENT";
const SET_COCKTAILS = "SET_COCKTAILS";

const initialState = {
  ingredient: "",
  cocktails: [],
};

export const setIngredient = (ingredient) => ({
  type: SET_INGREDIENT,
  payload: ingredient,
});

const setCocktails = (cocktails) => ({
  type: SET_COCKTAILS,
  payload: cocktails,
});

export const fetchCocktailsByIngredient = (ingredient) => {
  return async (dispatch) => {
    try {
      const cocktails = await getCocktailsByIngredient(ingredient);
      dispatch(setCocktails(cocktails));
      // dispatch(getPostsSuccess(data));
    } catch (error) {
      // dispatch(getPostsFailure())
    }
  };
};

export const getOrderState = (state) => state.order;

export default function reducer(state = initialState, action) {
  switch (action.type) {
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
    default:
      return state;
  }
}
