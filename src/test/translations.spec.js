import { Map, fromJS } from "immutable";
import { expect } from "chai";
import translations from "../reducers/translations";

describe("translations", () => {
  it("handles DEFAULT", () => {
    const initialState = Map();
    const action = {type:""};
    const nextState = translations(initialState, action);

    expect(nextState).to.equal(fromJS({
    }));
  });
});
