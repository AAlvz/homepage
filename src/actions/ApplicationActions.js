import * as types from "../constants/ActionTypes";

export function setCircleMenuClick(value) {
  return { type: types.CIRCLE_MENU_CLICK, value };
}

export function setActiveMenu(value) {
  return { type: types.SET_ACTIVE_MENU, value };
}
