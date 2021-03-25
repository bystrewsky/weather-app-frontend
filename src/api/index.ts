import axios, { AxiosResponse } from 'axios';
import { API_URL } from '../config';
import { IThreeHourForecast } from '../interfaces/IThreeHourForecast';

export const fetchForecast = async (cityName: string): Promise<AxiosResponse<IThreeHourForecast>> => {

  const { data } = await axios.get(`${API_URL}/getForecast`, { params: { city: cityName } });

  return data;
}