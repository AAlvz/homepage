import "whatwg-fetch";
import { call, takeLatest } from "redux-saga/effects";
import * as types from "../constants/ActionTypes";

export const doRequest = (url, options) => {
  return fetch(url, options)
    .then(response => {
      if (!response.ok) throw response.statusText;
      return response.json();
    })
    .then(response => Promise.resolve(response))
    .catch(error => Promise.reject(error));
};

export function* doRequestPostUser(user) {
  return yield call(
    doRequest, "/login",
    {
      method:"POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json; charset=utf-8"
      },
      mode:"cors",
      body: JSON.stringify(
        {
          "email_address": user.get("email_address"),
          "merge_fields": user.get("merge_fields"),
          "status": "subscribed"
        }
      )
    }
  );
}

export function* requestPostUser(data) {
  try {
    yield call(doRequestPostUser, data.value);
  }
  catch(error) {
    // console.log(error);
  }
}

export default function* root() {
  yield takeLatest(types.REQUEST_POST_USER, requestPostUser);
}
