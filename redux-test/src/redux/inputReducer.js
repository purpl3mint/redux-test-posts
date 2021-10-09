import { INPUT_TEXT } from "./types";

const initialState = {
  text: ""
}

export const inputReducer = (state = initialState, action) => {
  console.log("input reducer > ", action);

  switch(action.type){
    case INPUT_TEXT:
      return {
        ...state,
        text: action.data
      }

    default:
      return state
  }

}