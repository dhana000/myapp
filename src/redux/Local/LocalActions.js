import { HIDE_MODEL, SHOW_MODEL } from "./LocalActionsType";

export function showModel() {
  return { type: SHOW_MODEL };
}

export function hideModel() {
  return { type: HIDE_MODEL };
}
