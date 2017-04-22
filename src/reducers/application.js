import { SET_PROJECT_NAME, SET_STACK, SET_DATABASE, SET_ADDONS, SET_ACTIVE_STEP } from "../constants/ActionTypes";
import { Map } from "immutable";

const initialState = Map({
  active_step: 0
});

export default function application(state = initialState, action) {
  switch (action.type) {
    case SET_PROJECT_NAME:
    {
      return state.set("project_name", action.value.get("project_name"));
    }
    case SET_STACK:
    {
      return state.set("stack", action.value.get("stack"));
    }
    case SET_DATABASE:
    {
      return state.set("database", action.value.get("database"));
    }
    case SET_ADDONS:
    {
      return state.set("addons", action.value.get("addons"));
    }
    case SET_ACTIVE_STEP:
    {
      return state.set("active_step", action.value.get("active_step"));
    }
    default:
      return state;
  }
}
