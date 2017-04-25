import * as types from "../constants/ActionTypes";
import { Map, List } from "immutable";

const initialState = Map({
  active_step: 0
});

export default function application(state = initialState, action) {
  switch (action.type) {
    case types.SET_PROJECT_NAME:
    {
      return state.set("project_name", action.value.get("project_name"));
    }
    case types.SET_STACK:
    {
      return state.set("stacks", state.get("stacks")?
        action.value.getIn(["stack", "otro"])?
          state.get("stacks").filter(stackFiltered=>
            !stackFiltered.get("otro")
          ).push(action.value.get("stack"))
          : state.get("stacks").push(action.value.get("stack"))
        : List.of(action.value.get("stack"))
      );
    }
    case types.REMOVE_STACK:
    {
      return state.set("stacks", state.get("stacks")?
        action.value.getIn(["stack", "otro"])?
          state.get("stacks").filter(stackFiltered=>
            !stackFiltered.get("otro")
          )
          : state.get("stacks").filter(stackFiltered=>
            stackFiltered !== action.value.get("stack")
          )
        : List.of()
      );
    }
    case types.SET_DATABASE:
    {
      return state.set("database", action.value.get("database"));
    }
    case types.SET_ADDONS:
    {
      return state.set("addons", action.value.get("addons"));
    }
    case types.SET_ACTIVE_STEP:
    {
      return state.set("active_step", action.value.get("active_step"));
    }
    default:
      return state;
  }
}
