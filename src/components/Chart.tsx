import React from 'react';
import { connect } from 'react-redux';
import { IThreeHourForecast } from '../interfaces/IThreeHourForecast';
import { AppState } from '../store';

interface IChartProps {
  isLoaded: boolean;
  isErrored: boolean;
  errorMessage: string;
  forecast: IThreeHourForecast[];
  isLoading: boolean;
}

const Chart: React.FC<IChartProps> = props => {
  const { isLoaded, isErrored, errorMessage, forecast, isLoading } = props;

  return (
    <div className={'chart__container'}>
      This is chart
    </div>
  );
}

const mapStateToProps = (state: AppState): IChartProps => {
  return {
    isLoaded: state.forecast.isLoaded,
    isErrored: state.forecast.isErrored,
    errorMessage: state.forecast.errorMessage,
    forecast: state.forecast.forecast,
    isLoading: state.loader.isLoading,
  }
}

export default connect(mapStateToProps, {})(Chart);
