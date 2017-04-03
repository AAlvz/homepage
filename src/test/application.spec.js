import Immutable, { Map, fromJS } from "immutable";
import { expect } from "chai";
import application from "../reducers/application";

describe("application", () => {
  it("handles CIRCLE_MENU_CLICK", () => {
    const initialState = Map();
    const action = {type:"CIRCLE_MENU_CLICK", value: fromJS({
        circle_menu_click:true})};
    const nextState = application(initialState, action);

    expect(
      Immutable.is(nextState, fromJS({
        "circle_menu_click": true}))
    ).to.be.true;
  });
  it("handles DEFAULT", () => {
    const initialState = Map();
    const action = {type:""};
    const nextState = application(initialState, action);

    expect(nextState).to.equal(fromJS({
    }));
  });
});
