import { SetLoader, SET_LOADER } from '../types/loader';

export const setLoader = (status: boolean): SetLoader => ({
  type: SET_LOADER,
  payload: status,
});
