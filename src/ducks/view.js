const GET_VIEW = "GET_VIEW";

const initialState = {
  view: "welcome",
};

export const setView = (view) => ({
  type: GET_VIEW,
  payload: view,
});

export const getView = (state) => state.view;

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_VIEW:
      return {
        ...state,
        view: action.payload,
      };
    default:
      return state;
  }
}
