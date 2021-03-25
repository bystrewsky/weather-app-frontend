import { SetLoader, SET_LOADER } from '../types/loader';

export interface ILoaderState {
  isLoading: boolean;
}

const initialState: ILoaderState = {
  isLoading: false,
}

const loaderReducer = (state: ILoaderState = initialState, action: SetLoader): ILoaderState => {
  if(action.type !== SET_LOADER) {
    return state;
  }

  return {
    ...state,
    isLoading: action.payload,
  }
}

export default loaderReducer;
