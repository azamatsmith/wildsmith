import React from 'react';

const initialState = {
  email: '',
  message: '',
  name: '',
  loading: false,
  error: false,
  success: false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'FORM_ERROR':
      return {...state, loading: false, error: true};
    case 'FORM_SUCCESS':
      return {...initialState, success: true};
    case 'SET_LOADING':
      return {...state, loading: action.loading};
    case 'UPDATE_FIELD':
      return {...state, [action.field]: action.value};
    default:
      return state;
  }
}

function useFormReducer() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return [state, dispatch];
}

export default useFormReducer;
