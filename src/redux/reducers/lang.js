import { LANG_CHANGED } from "../actions/types";
const defaultLang = localStorage.getItem("lang")
  ? localStorage.getItem("lang")
  : "ru";
const initialState = {
  language: defaultLang,
};

function lang(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LANG_CHANGED:
      return {
        ...state,
        language: payload,
      };
    default:
      return state;
  }
}

export default lang;
