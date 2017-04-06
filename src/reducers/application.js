import { CIRCLE_MENU_CLICK, SET_ACTIVE_MENU } from "../constants/ActionTypes";
import { Map } from "immutable";

const initialState = Map({
  circle_menu_click: false,
  active_menu: -1
});

export default function application(state = initialState, action) {
  switch (action.type) {
    case CIRCLE_MENU_CLICK:
    {
      return state.set("circle_menu_click", action.value.get("circle_menu_click"));
    }
    case SET_ACTIVE_MENU:
    {
      return state.set("active_menu", action.value.get("active_menu"));
    }
    default:
      return state;
  }
}
