import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  fetchCocktailsByIngredient,
  fetchSelectedCocktailDetails,
} from "./order";

jest.mock("../api", () => ({
  getCocktailsByIngredient: jest
    .fn()
    .mockImplementation(() => Promise.resolve({})),
  getCocktailInfo: jest.fn().mockImplementation(() => Promise.resolve([{}])),
}));

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Ducks - order", () => {
  it("will output the correct redux actions when calling fetchCocktailsByIngredient", async () => {
    const store = mockStore({
      order: {
        cocktails: null,
        cocktailsSelected: null,
        ingredient: "Vodka",
      },
      view: {
        view: "order",
      },
    });

    await store.dispatch(fetchCocktailsByIngredient());

    expect(store.getActions()).toEqual([
      {
        payload: true,
        type: "SET_LOADING",
      },
      {
        payload: false,
        type: "SET_LOADING",
      },
      {
        payload: {},
        type: "SET_COCKTAILS",
      },
    ]);
  });

  it("will output the correct redux actions when calling fetchSelectedCocktailDetails", async () => {
    const store = mockStore({
      order: {
        isLoading: false,
        ingredient: "",
        cocktails: [],
        cocktailSelected: null,
      },
      view: {
        view: "order",
      },
    });

    await store.dispatch(fetchSelectedCocktailDetails());

    expect(store.getActions()).toEqual([
      { payload: [{}], type: "SET_SELECTED_COCKTAIL" },
    ]);
  });
});
