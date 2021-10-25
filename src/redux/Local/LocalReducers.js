import { SHOW_MODEL, HIDE_MODEL } from "./LocalActionsType";

const initialState = {
  modelStatus: false,
};

export const localReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODEL:
      return { modelStatus: true };
    case HIDE_MODEL:
      return { modelStatus: false };
    default:
      return state;
  }
};
