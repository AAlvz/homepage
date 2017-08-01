import Immutable, { Map, fromJS } from "immutable";
import { expect } from "chai";
import application from "../reducers/application";

describe("application", () => {
  it("handles SET_EMAIL", () => {
    const initialState = Map();
    const action = {type:"SET_EMAIL", value: fromJS({
        email: "some@email.com"})};
    const nextState = application(initialState, action);

    expect(
      Immutable.is(nextState, fromJS({
        "email": "some@email.com"}))
    ).to.be.true;
  });
  it("handles SET_CELLPHONE", () => {
    const initialState = Map();
    const action = {type:"SET_CELLPHONE", value: fromJS({
        cellphone: "000-000-0000"})};
    const nextState = application(initialState, action);

    expect(
      Immutable.is(nextState, fromJS({
        "cellphone": "000-000-0000"}))
    ).to.be.true;
  });
  it("handles SET_STACK", () => {
    const initialState = Map();
    const action = {type:"SET_STACK", value: fromJS({
        stack: "Rails"})};
    const nextState = application(initialState, action);

    expect(
      Immutable.is(nextState, fromJS({
        "stacks": ["Rails"]}))
    ).to.be.true;
  });
  it("handles REMOVE_STACK", () => {
    const initialState = fromJS({
      stacks: ["Rails"]
    });
    const action = {type:"REMOVE_STACK", value: fromJS({
        stack: "Rails"})};
    const nextState = application(initialState, action);

    expect(
      Immutable.is(nextState, fromJS({
        "stacks": []}))
    ).to.be.true;
  });
  it("handles SET_DATABASE", () => {
    const initialState = Map();
    const action = {type:"SET_DATABASE", value: fromJS({
        database: "MariaDB"})};
    const nextState = application(initialState, action);

    expect(
      Immutable.is(nextState, fromJS({
        "databases": ["MariaDB"]}))
    ).to.be.true;
  });
  it("handles REMOVE_DATABASE", () => {
    const initialState = fromJS({
      databases: ["MariaDB"]
    });
    const action = {type:"REMOVE_DATABASE", value: fromJS({
        database: "MariaDB"})};
    const nextState = application(initialState, action);

    expect(
      Immutable.is(nextState, fromJS({
        "databases": []}))
    ).to.be.true;
  });
  it("handles SET_ADDONS", () => {
    const initialState = Map();
    const action = {type:"SET_ADDONS", value: fromJS({
        addon: "CI"})};
    const nextState = application(initialState, action);

    expect(
      Immutable.is(nextState, fromJS({
        "addons": ["CI"]}))
    ).to.be.true;
  });
  it("handles REMOVE_ADDONS", () => {
    const initialState = fromJS({
      addons: ["CI"]
    });
    const action = {type:"REMOVE_ADDONS", value: fromJS({
        addon: "CI"})};
    const nextState = application(initialState, action);

    expect(
      Immutable.is(nextState, fromJS({
        "addons": []}))
    ).to.be.true;
  });
  it("handles SET_ACTIVE_STEP", () => {
    const initialState = Map();
    const action = {type:"SET_ACTIVE_STEP", value: fromJS({
        active_step: 2})};
    const nextState = application(initialState, action);

    expect(
      Immutable.is(nextState, fromJS({
        "active_step": 2}))
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
