import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import styles from './Forecast.module.css';

const Forecast = ({forecast}) => {
    const _findAvg = (data) => {
        const sum = data.reduce(
            (previousValue, currentValue) => previousValue + currentValue,
            0
          );
        
        const avg = sum/data.length;

        return Math.round(avg);
    }

    const renderTempWSprkLines = () => {
        const data = forecast.list.map((weather) => {
            let avg = (weather.main.temp_max + weather.main.temp_min)/2;
            return avg;
        });
        
        return (
            <div>
                <Sparklines data={data}>
                    <SparklinesLine color="yellow"/>
                    <SparklinesReferenceLine type="mean" />
                </Sparklines>
                <h6 className={styles.chartSubheading}>{_findAvg(data)} F</h6>
            </div>
        )
    }

    console.log('hey')
    console.log(renderTempWSprkLines());

    const renderPressureWSprkLines = () => {
        const data = forecast.list.map((weather) => {
            return weather.main.pressure;
        })

        return (
            <div>
                <Sparklines data={data}>
                    <SparklinesLine color="green"/>
                    <SparklinesReferenceLine type="mean" />
                </Sparklines>
                <h6 className={styles.chartSubheading}>{_findAvg(data)} hPa</h6>
            </div>
            )
    }

    const renderHumidityWSprkLines = () => {
        const data = forecast.list.map((weather) => {
            return weather.main.humidity;
        })

        return (
            <div>
                <Sparklines data={data}>
                    <SparklinesLine color="black"/>
                    <SparklinesReferenceLine type="mean" />
                </Sparklines>
                <h6 className={styles.chartSubheading}>{_findAvg(data)} %</h6>
            </div>
            )
    }

    return (
        <tr>
            <td className={styles.cityNameWrap}><h6 className={styles.cityName}>{forecast.city.name}</h6></td> 
            <td>{renderTempWSprkLines()}</td>
            <td>{renderPressureWSprkLines()}</td> 
            <td>{renderHumidityWSprkLines()}</td>

        </tr>
    )
}

export default Forecast;