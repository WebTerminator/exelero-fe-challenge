const SET_INGREDIENT = "SET_INGREDIENT";

const initialState = {
  ingredient: "",
};

export const setIngredient = (ingredient) => ({
  type: SET_INGREDIENT,
  payload: ingredient,
});

export const getIngredient = (state) => state.order;

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_INGREDIENT:
      return {
        ...state,
        ingredient: action.payload,
      };
    default:
      return state;
  }
}
