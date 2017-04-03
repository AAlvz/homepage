import { CIRCLE_MENU_CLICK } from "../constants/ActionTypes";
import { Map } from "immutable";

const initialState = Map({
  circle_menu_click:false
});

export default function application(state = initialState, action) {
  switch (action.type) {
    case CIRCLE_MENU_CLICK:
    {
      return state.set("circle_menu_click", action.value.get("circle_menu_click"));
    }
    default:
      return state;
  }
}
