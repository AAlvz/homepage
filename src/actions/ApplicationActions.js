import * as types from "../constants/ActionTypes";

export function setEmail(value) {
  return { type: types.SET_EMAIL, value };
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

export function removeAddons(value) {
  return { type: types.REMOVE_ADDONS, value };
}

export function requestPostUser(value) {
  return { type: types.REQUEST_POST_USER, value };
}

export function setActiveStep(value) {
  return { type: types.SET_ACTIVE_STEP, value };
}

export function removeDatabase(value) {
  return { type: types.REMOVE_DATABASE, value };
}

export function removeStack(value) {
  return { type: types.REMOVE_STACK, value };
}
