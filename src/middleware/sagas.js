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
    doRequest, "https://us14.api.mailchimp.com/3.0/lists/xxxxxxxxx",
    {
      method:"POST",
      headers: {
        "Authorization":"Basic xxxxxxx",
        "Accept": "application/json",
      },
      mode:"no-cors",
      body: JSON.stringify(
        {
          "email_address": user.get("email_address"),
          "status": "subscribed",
          "merge_fields": user.get("merge_fields").toJS()
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
    console.log(error);
  }
}

export default function* root() {
  yield takeLatest(types.REQUEST_POST_USER, requestPostUser);
}
