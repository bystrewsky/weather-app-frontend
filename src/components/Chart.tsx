import moment from 'moment';
import React from 'react';
import { connect } from 'react-redux';
import { Line, LineChart, ResponsiveContainer, Tooltip, TooltipProps, XAxis, YAxis } from 'recharts';
import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';
import { IThreeHourForecast } from '../interfaces/IThreeHourForecast';
import { AppState } from '../store';

interface IChartProps {
  isLoaded: boolean;
  isErrored: boolean;
  errorMessage: string;
  forecast: IThreeHourForecast[];
  isLoading: boolean;
}

const Chart: React.FC<IChartProps> = (props) => {
  const { isLoaded, isErrored, errorMessage, forecast, isLoading } = props;

  const CustomTooltip = ({ active, payload, label }: TooltipProps<ValueType, NameType>) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{moment(label * 1000).format('DD.MM.YYYY HH:mm')}</p>
          <p className="desc">Temperature: {payload[0].value } °C</p>
        </div>
      );
    }

    return null;
  }

  return (
    <div className={'chart__container'}>
      { isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          { isLoaded ? (
            <ResponsiveContainer width={'100%'} height={400}>
              <LineChart data={forecast} >
                <Line type={'monotone'} dataKey={'temperature'} name={'Temperature'} />
                <XAxis
                  name={'Date'}
                  dataKey={'date'}
                  interval={8}
                  tickFormatter={(unixTime) => moment(unixTime * 1000).format('DD.MM')}
                />
                <YAxis name={'Temperature'}/>
                <Tooltip content={<CustomTooltip />} />
              </LineChart>
            </ResponsiveContainer>
          ) : (
            <>
              { isErrored ? (
                <h1 className={'error-message'}>{errorMessage}</h1>
              ) : (
                <h1>Please, search something</h1>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state: AppState): IChartProps => {
  return {
    isLoaded: state.forecast.isLoaded,
    isErrored: state.forecast.isErrored,
    errorMessage: state.forecast.errorMessage,
    forecast: state.forecast.forecast,
    isLoading: state.loader.isLoading,
  };
};

export default connect(mapStateToProps, {})(Chart);
