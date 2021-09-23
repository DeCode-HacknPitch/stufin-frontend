import {
  SET_ACTIVE,
  SET_EMAIL,
  SET_LOGGEDIN,
  SET_NAME,
  SET_TOKEN,
  SET_TYPE,
} from "./user.types";

const initialState = {
  email: "",
  loggedIn: false,
  type: "",
  name: "",
  token: "",
  active: true,
};

const userReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case SET_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    case SET_LOGGEDIN:
      return {
        ...state,
        loggedIn: action.payload,
      };
    case SET_TYPE:
      return {
        ...state,
        type: action.payload,
      };
    case SET_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case SET_ACTIVE:
      return {
        ...state,
        active: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
