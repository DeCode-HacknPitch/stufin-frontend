import {
  SET_ACTIVE,
  SET_EMAIL,
  SET_LOGGEDIN,
  SET_NAME,
  SET_TOKEN,
  SET_TYPE,
} from "./user.types";

export const setEmail = (email) => ({
  type: SET_EMAIL,
  payload: email,
});

export const setLoggedIn = (loggedIn) => ({
  type: SET_LOGGEDIN,
  payload: loggedIn,
});

export const setType = (type) => ({
  type: SET_TYPE,
  payload: type,
});

export const setName = (name) => ({
  type: SET_NAME,
  payload: name,
});

export const setToken = (token) => ({
  type: SET_TOKEN,
  payload: token,
});

export const setActive = (active) => ({
  type: SET_ACTIVE,
  payload: active,
});
