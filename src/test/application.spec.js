import Immutable, { Map, fromJS } from "immutable";
import { expect } from "chai";
import application from "../reducers/application";

describe("application", () => {
  it("handles SET_PROJECT_NAME", () => {
    const initialState = Map();
    const action = {type:"SET_PROJECT_NAME", value: fromJS({
        project_name: "application.web"})};
    const nextState = application(initialState, action);

    expect(
      Immutable.is(nextState, fromJS({
        "project_name": "application.web"}))
    ).to.be.true;
  });
  it("handles SET_STACK", () => {
    const initialState = Map();
    const action = {type:"SET_STACK", value: fromJS({
        stack: "Rails"})};
    const nextState = application(initialState, action);

    expect(
      Immutable.is(nextState, fromJS({
        "stack": "Rails"}))
    ).to.be.true;
  });
  it("handles SET_DATABASE", () => {
    const initialState = Map();
    const action = {type:"SET_DATABASE", value: fromJS({
        database: "mariadb"})};
    const nextState = application(initialState, action);

    expect(
      Immutable.is(nextState, fromJS({
        "database": "mariadb"}))
    ).to.be.true;
  });
  it("handles SET_ADDONS", () => {
    const initialState = Map();
    const action = {type:"SET_ADDONS", value: fromJS({
        addons: ["security","performance"]})};
    const nextState = application(initialState, action);

    expect(
      Immutable.is(nextState, fromJS({
        "addons": ["security","performance"]}))
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
