import * as types from "../constants/ActionTypes";

export function setProjectName(value) {
  return { type: types.SET_PROJECT_NAME, value };
}

export function setStack(value) {
  return { type: types.SET_STACK, value };
}

export function setDatabase(value) {
  return { type: types.SET_DATABASE, value };
}

export function setAddons(value) {
  return { type: types.SET_ADDONS, value };
}

export function setActiveStep(value) {
  return { type: types.SET_ACTIVE_STEP, value };
}

export function removeStack(value) {
  return { type: types.REMOVE_STACK, value };
}
