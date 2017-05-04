import "babel-polyfill";
import { expect } from "chai";
import { call } from "redux-saga/effects";
import { fromJS } from "immutable";
import { doRequestPostUser, requestPostUser } from "../sagas";

describe("sagas middleware", () => {
  it("handles DELETE_PROJECT_SERVERS", () => {
    const user = {
      "email_address": "hello@tinkerware.io",
      "status": "subscribed",
      "merge_fields": {
        "STACK": "reactjs",
        "DATABASE": "mongodb",
        "ADDONS": "security,ci"
      }
    };
    const generator = requestPostUser(
      {
        "value": fromJS(user)
      }
    );
    const err = new ReferenceError("404");
    const generatorError = function () { throw err; };
    expect(generatorError).to.throw(err);
    expect(generator.next().value).to.deep.equal(
      call(doRequestPostUser, fromJS(user))
    );
  });
});
