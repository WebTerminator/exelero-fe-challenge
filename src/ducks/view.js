const SET_VIEW = "SET_VIEW";

const initialState = {
  view: "welcome",
};

export const setView = (view) => ({
  type: SET_VIEW,
  payload: view,
});

export const getView = (state) => state.view;

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_VIEW:
      return {
        ...state,
        view: action.payload,
      };
    default:
      return state;
  }
}
