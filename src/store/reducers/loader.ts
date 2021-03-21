import { SetLoader } from '../types/loader';

export interface ILoaderState {
  isLoading: boolean;
}

const initialState: ILoaderState = {
  isLoading: false,
}

const loaderReducer = (state: ILoaderState = initialState, action: SetLoader): ILoaderState => {
  return {
    ...state,
    isLoading: action.status,
  }
}

export default loaderReducer;